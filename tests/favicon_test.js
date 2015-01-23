"use strict";

var grunt = require("grunt"),
    path = require("path");

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.favicon = {

    setUp: function (done) {
        // setup here if necessary
        done();
    },

    options_countOfImages6_colorDepth8: function(test) {
        var name = "options_countOfImages6_colorDepth8",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth8: function(test) {
        var name = "options_countOfImages5_colorDepth8",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth8: function(test) {
        var name = "options_countOfImages4_colorDepth8",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth8: function(test) {
        var name = "options_countOfImages3_colorDepth8",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth8: function(test) {
        var name = "options_countOfImages2_colorDepth8",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth8: function(test) {
        var name = "options_countOfImages1_colorDepth8",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages6_colorDepth7: function(test) {
        var name = "options_countOfImages6_colorDepth7",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth7: function(test) {
        var name = "options_countOfImages5_colorDepth7",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth7: function(test) {
        var name = "options_countOfImages4_colorDepth7",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth7: function(test) {
        var name = "options_countOfImages3_colorDepth7",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth7: function(test) {
        var name = "options_countOfImages2_colorDepth7",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth7: function(test) {
        var name = "options_countOfImages1_colorDepth7",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages6_colorDepth6: function(test) {
        var name = "options_countOfImages6_colorDepth6",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth6: function(test) {
        var name = "options_countOfImages5_colorDepth6",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth6: function(test) {
        var name = "options_countOfImages4_colorDepth6",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth6: function(test) {
        var name = "options_countOfImages3_colorDepth6",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth6: function(test) {
        var name = "options_countOfImages2_colorDepth6",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth6: function(test) {
        var name = "options_countOfImages1_colorDepth6",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages6_colorDepth5: function(test) {
        var name = "options_countOfImages6_colorDepth5",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth5: function(test) {
        var name = "options_countOfImages5_colorDepth5",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth5: function(test) {
        var name = "options_countOfImages4_colorDepth5",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth5: function(test) {
        var name = "options_countOfImages3_colorDepth5",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth5: function(test) {
        var name = "options_countOfImages2_colorDepth5",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth5: function(test) {
        var name = "options_countOfImages1_colorDepth5",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages6_colorDepth4: function(test) {
        var name = "options_countOfImages6_colorDepth4",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth4: function(test) {
        var name = "options_countOfImages5_colorDepth4",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth4: function(test) {
        var name = "options_countOfImages4_colorDepth4",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth4: function(test) {
        var name = "options_countOfImages3_colorDepth4",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth4: function(test) {
        var name = "options_countOfImages2_colorDepth4",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth4: function(test) {
        var name = "options_countOfImages1_colorDepth4",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages6_colorDepth3: function(test) {
        var name = "options_countOfImages6_colorDepth3",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth3: function(test) {
        var name = "options_countOfImages5_colorDepth3",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth3: function(test) {
        var name = "options_countOfImages4_colorDepth3",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth3: function(test) {
        var name = "options_countOfImages3_colorDepth3",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth3: function(test) {
        var name = "options_countOfImages2_colorDepth3",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth3: function(test) {
        var name = "options_countOfImages1_colorDepth3",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages6_colorDepth2: function(test) {
        var name = "options_countOfImages6_colorDepth2",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth2: function(test) {
        var name = "options_countOfImages5_colorDepth2",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth2: function(test) {
        var name = "options_countOfImages4_colorDepth2",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth2: function(test) {
        var name = "options_countOfImages3_colorDepth2",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth2: function(test) {
        var name = "options_countOfImages2_colorDepth2",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth2: function(test) {
        var name = "options_countOfImages1_colorDepth2",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages6_colorDepth1: function(test) {
        var name = "options_countOfImages6_colorDepth1",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages5_colorDepth1: function(test) {
        var name = "options_countOfImages5_colorDepth1",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages4_colorDepth1: function(test) {
        var name = "options_countOfImages4_colorDepth1",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages3_colorDepth1: function(test) {
        var name = "options_countOfImages3_colorDepth1",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages2_colorDepth1: function(test) {
        var name = "options_countOfImages2_colorDepth1",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    },

    options_countOfImages1_colorDepth1: function(test) {
        var name = "options_countOfImages1_colorDepth1",
            expected = grunt.file.expand(
                {
                    cwd: path.join("tests/expected", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort(),
            dest = grunt.file.expand(
                {
                    cwd: path.join("tests/dest", name),
                    filter: function (filename) {
                        return grunt.file.isFile(filename);
                    }
                },
                ["*", "**/*"]
            ).sort();
        test.expect(expected.length + 1);
        test.deepEqual(expected, dest, "Checking file names in build [version=1.3,target=es5]");
        expected.forEach(function (filename) {
            var expected = grunt.file.read(path.join("tests/expected", name, filename)),
                dest = grunt.file.read(path.join("tests/dest", name, filename));
            test.equal(expected, dest, "Checking file [" + filename + "]");
        });
        test.done();
    }

};