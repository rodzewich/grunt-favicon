/*jslint */
/*global module, require, process */

var spawn   = require("child_process").spawn,
    rows    = process.stdout.rows,
    columns = process.stdout.columns,
    path    = require("path"),
    fs      = require("fs");

process.stdout.on("resize", function () {
    "use strict";
    rows    = process.stdout.rows;
    columns = process.stdout.columns;
});

module.exports = function (grunt) {
    "use strict";

    grunt.registerMultiTask("favicon", "description", function () {
        var self    = this,
            files   = self.files,
            length  = files.length,
            done    = this.async(),
            time1   = Number(new Date()),
            fileMode,
            dirMode,
            options,
            sizeDepth,
            colorDepth;
        function displayError(error) {
            grunt.log.writeln(">> ".red + String(error.name + ":").yellow + " " + error.message);
        }
        function displayErrorContent(content) {
            content.split(/(?:\n|\r)+/).forEach(function (item) {
                item = item.replace(/\s+$/, "");
                if (item) {
                    while (item) {
                        grunt.log.write(">> ".red);
                        grunt.log.writeln(item.substr(0, columns - 3));
                        item = item.substr(columns - 3);
                    }
                }
            });
        }
        function getOptions() {
            if (typeof options === "undefined") {
                options = self.options() || {};
            }
            return options;
        }
        function getFileModeOption() {
            var opt,
                temp;
            if (typeOf(fileMode) === "undefined") {
                opt = getOptions();
                temp = String(opt.fmode || "");
                if (typeOf(opt.fmode) === "undefined") {
                    temp = "644";
                } else if (!/^[0-7]{3,3}$/.test(temp)) {
                    throw new Error("Incorrect \"fmode\" option.");
                }
                fileMode = parseInt(temp, 8);
            }
            return fileMode;
        }
        function getDirModeOption() {
            var opt,
                temp;
            if (typeOf(dirMode) === "undefined") {
                opt = getOptions();
                temp = String(opt.dmode || "");
                if (typeOf(opt.dmode) === "undefined") {
                    temp = "755";
                } else if (!/^[0-7]{3,3}$/.test(temp)) {
                    throw new Error("Incorrect \"dmode\" option.");
                }
                dirMode = parseInt(temp, 8);
            }
            return dirMode;
        }

        function typeOf(value) {
            var type  = String(Object.prototype.toString.call(value) || '').slice(8, -1) || 'Object',
                types = ['Arguments', 'Array', 'Boolean', 'Date', 'Error', 'Function', 'Null', 'Number', 'Object', 'String', 'Undefined'];
            if (types.indexOf(type) !== -1) {
                type = type.toLowerCase();
            }
            return type;
        }
        function deferred(actions) {
            function iterate() {
                setTimeout(function () {
                    var action = actions.shift();
                    if (typeOf(action) === "function") {
                        action(iterate);
                    }
                }, 0);
            }
            iterate();
        }
        function mkdir(dir, callback) {
            deferred([
                function (iterate) {
                    fs.exists(dir, function (exists) {
                        if (exists) {
                            callback(null);
                        } else {
                            iterate();
                        }
                    });
                },
                function () {
                    mkdir(path.dirname(dir), function (error) {
                        if (error) {
                            callback(error);
                        } else {
                            fs.mkdir(dir, getDirModeOption(), function (error) {
                                callback(error || null);
                            });
                        }
                    });
                }
            ]);
        }
        function getColorDepthOption() {
            var options;
            if (typeof colorDepth === "undefined") {
                options = getOptions();
                if (typeof options.colorDepth === "undefined") {
                    // default value
                    colorDepth = 8;
                } else {
                    colorDepth = parseFloat(String(options.colorDepth));
                    if ([1, 2, 3, 4, 5, 6, 7, 8].indexOf(colorDepth) === -1) {
                        colorDepth = 8;
                        throw new Error("Incorrect \"colorDepth\" option, must be \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\" or \"8\".");
                    }

                }
            }
            return colorDepth;
        }
        function getColorDepth() {
            return String(Math.pow(2, getColorDepthOption()));
        }
        function getSizeDepthOption() {
            var options;
            if (typeof sizeDepth === "undefined") {
                options = getOptions();
                if (typeof options.sizeDepth === "undefined") {
                    // default value
                    sizeDepth = 4;
                } else {
                    sizeDepth = parseFloat(String(options.sizeDepth));
                    if ([1, 2, 3, 4, 5, 6].indexOf(sizeDepth) === -1) {
                        sizeDepth = 8;
                        throw new Error("Incorrect \"sizeDepth\" option, must be \"1\", \"2\", \"3\", \"4\", \"5\" or \"6\".");
                    }

                }
            }
            return sizeDepth;
        }
        function getFileSize(value) {
            var suffix = ["B", "K", "M", "G", "T"],
                ext = suffix.shift(),
                useDot = false,
                temp;
            while (value > 1024) {
                value = value / 1024;
                ext = suffix.shift();
                useDot = true;
            }
            temp = String(value + 0.0001).split(".");
            return temp[0] + (useDot ? "." + temp[1].substr(0, 1) : "") + ext;
        }
        function getTime() {
            var temp = String((Number(new Date()) - time1) /  1000 + 0.0001).split(".");
            return temp[0] + "." + temp[1].substr(0, 3);
        }
        function complete() {
            grunt.log.writeln("compiled " + String(length).cyan + " icon(s), " + getTime().cyan + " sec");
            done(true);
        }
        function iterate(item) {
            var expand,
                source = item.src[0],
                dest   = String(item.dest || ""),
                args   = [],
                errors = [],
                version;
            function hasExpand() {
                if (typeof expand === "undefined") {
                    if (typeof item.expand !== "undefined") {
                        expand = !!item.expand;
                    } else if (["off", "no", "false", "0", ""].indexOf(String(item.orig.expand).toLowerCase()) !== -1) {
                        expand = false;
                    } else {
                        expand = !!item.orig.expand;
                    }
                }
                return expand;
            }
            function compileManyToOne() {
                displayErrorContent("Forbidden to compile many-to-one.");
                grunt.fail.warn("Something went wrong.");
                done(false);
            }
            function compileManyToMany() {
                var time2 = Number(new Date()),
                    stats;
                function getTime() {
                    var temp = String((Number(new Date()) - time2) /  1000 + 0.0001).split(".");
                    return temp[0] + "." + temp[1].substr(0, 3) + "s";
                }
                deferred([
                    function (next) {
                        mkdir(path.dirname(dest), function (error) {
                            if (error) {
                                displayError(error);
                                done(false);
                            } else {
                                next();
                            }
                        })
                    },
                    function (next) {
                        var depth = getSizeDepthOption();
                        args.push(source);
                        args.push("-bordercolor", "white", "-border", "0");
                        args.push("(", "-clone", "0", "-resize", "16x16", ")");
                        if (depth > 1) {
                            args.push("(", "-clone", "0", "-resize", "32x32", ")");
                        }
                        if (depth > 2) {
                            args.push("(", "-clone", "0", "-resize", "48x48", ")");
                        }
                        if (depth > 3) {
                            args.push("(", "-clone", "0", "-resize", "64x64", ")");
                        }
                        if (depth > 4) {
                            args.push("(", "-clone", "0", "-resize", "128x128", ")");
                        }
                        if (depth > 5) {
                            args.push("(", "-clone", "0", "-resize", "256x256", ")");
                        }
                        args.push("-delete", "0");
                        args.push("-alpha", "off");
                        args.push("-colors", getColorDepth());
                        args.push(dest);
                        version = spawn("convert", args);
                        version.stderr.on("data", function (data) {
                            errors.push(data.toString("utf8"));
                        });
                        version.stdout.on("data", function (data) {
                            errors.push(data.toString("utf8"));
                        });
                        version.on("close", function (code) {
                            if (code !== 0) {
                                displayErrorContent(errors.join(""));
                                grunt.fail.warn("Something went wrong.");
                                done(false);
                            } else {
                                next();
                            }
                        });
                    },
                    function (next) {
                        fs.chmod(dest, getFileModeOption(), function (error) {
                            if (error) {
                                displayError(error);
                                done(false);
                            } else {
                                next();
                            }
                        });
                    },
                    function (next) {
                        fs.stat(dest, function (error, result) {
                            if (error) {
                                displayError(error);
                                done(false);
                            } else {
                                stats = result;
                                next();
                            }
                        });
                    },
                    function () {
                        grunt.log.writeln(
                            ">>".green + " compile " + String(source).green + " (" + getTime().yellow + ")" +
                            "\n        to " + String(dest).cyan + " (" + getFileSize(stats.size).yellow + ")"
                        );
                        if (files.length) {
                            iterate(files.shift());
                        } else {
                            complete();
                        }
                    }
                ]);
            }
            if (hasExpand()) {
                compileManyToMany();
            } else {
                compileManyToOne();
            }
        }
        function compile() {
            deferred([
                // show version
                function (next) {
                    var convert = spawn("convert", ["-version"]),
                        content = [];
                    convert.stdout.on("data", function (data) {
                        content.push(data.toString("utf8"));
                    });
                    convert.stderr.on("data", function (data) {
                        content.push(data.toString("utf8"));
                    });
                    convert.on("close", function (code) {
                        var temp = [];
                        if (code === 0) {
                            content.join("").split("\n").forEach(function (element) {
                                element = String(element).
                                    replace(/\s+/g, " ").
                                    replace(/\s+$/g, "").
                                    replace(/^\s+/g, "");
                                if (element) {
                                    temp.push(element);
                                }
                            });
                            grunt.log.writeln(temp.join("\n").magenta);
                            next();
                        } else {
                            displayErrorContent(content.join(""));
                            displayErrorContent("Imagemagick not installed.");
                            grunt.fail.warn("Something went wrong.");
                            done(false);
                        }
                    });
                },
                // show options
                function (next) {
                    grunt.log.writeflags({
                        sizeDepth  : getSizeDepthOption(),
                        colorDepth : getColorDepthOption(),
                        fmode      : getFileModeOption().toString(8),
                        dmode      : getDirModeOption().toString(8)
                    }, "options");
                    next();
                },
                // process start
                function () {
                    if (files.length) {
                        iterate(files.shift());
                    } else {
                        complete();
                    }
                }
            ]);
        }
        compile();
    });

};