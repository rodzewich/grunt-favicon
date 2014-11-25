/*jslint */
/*global module, require, process */

var spawn = require('child_process').spawn,
/*process = require('process'),*/
    fs = require('fs');

module.exports = function (grunt) {
    'use strict';

    grunt.registerMultiTask('favicon', 'description', function () {
        var self    = this,
            files   = self.files,
            length  = files.length,
            done    = this.async(),
            time1   = Number(new Date()),
            options = this.options({
                depth: 4,
                resolutions: [16, 32, 48, 64, 128, 256]
            }),
            depth = options.depth,
            resolutions = options.resolutions,
            realDepth,
            realResolutions;



        function size(value) {
            var suffix = ['B', 'K', 'M', 'G', 'T'],
                ext = suffix.shift(),
                useDot = false,
                temp;
            while (value > 1024) {
                value = value / 1024;
                ext = suffix.shift();
                useDot = true;
            }
            temp = String(value + 0.0001).split('.');
            return (temp[0] + (useDot ? '.' + temp[1].substr(0, 1) : '')).cyan + ' ' + ext;
        }
        function time(value) {
            var temp = String(value / 1000 + 0.0001).split('.');
            return temp[0] + (temp.length > 1 ? '.' + temp[1].substr(0, 3) : '.000');
        }
        function end() {
            grunt.log.writeln(
                'Created %count% icon(s), %time% sec'.
                    replace(/%count%/g, String(length).cyan).
                    replace(/%time%/g, time(Number(new Date()) - time1).cyan)
            );
            done();
        }
        function next(item) {
            var expand = !!item.orig.expand,
                source = item.src[0],
                dest   = String(item.dest || ''),
                args   = [],
                errors = [],
                time2  = Number(new Date()),
                process;
            if (expand) {
                args.push('convert');
                args.push(source);
                args.push('-bordercolor', 'white', '-border', '0');
                args.push('(', '-clone', '0', '-resize', '16x16', ')');
                args.push('(', '-clone', '0', '-resize', '32x32', ')');
                args.push('(', '-clone', '0', '-resize', '48x48', ')');
                args.push('(', '-clone', '0', '-resize', '64x64', ')');
                //args.push('(', '-clone', '0', '-resize', '128x128', ')');
                //args.push('(', '-clone', '0', '-resize', '256x256', ')');
                args.push('-delete', '0', '-alpha', 'off', '-colors', '256', dest);
                process = spawn('/usr/bin/env', args/*, {
                 cwd: process.cwd(),
                 env: process.env
                 }*/);
                process.stderr.on('data', function (data) {
                    errors.push(data.toString());
                });
                process.on('close', function (code) {
                    if (code !== 0) {
                        grunt.verbose.or.error().error(errors.join('\n'));
                        grunt.fail.warn('Something went wrong.');
                    } else {
                        fs.stat(dest, function (error, stats) {
                            if (error) {
                                grunt.verbose.or.error().error(error.message);
                                grunt.fail.warn('Something went wrong.');
                            } else {
                                grunt.log.writeln(
                                    'Created %icon% (%time% sec, %size%)'.
                                        replace(/%icon%/g, dest.cyan).
                                        replace(/%time%/g, time(Number(new Date()) - time2).cyan).
                                        replace(/%size%/g, size(stats.size))
                                );
                                if (files.length) {
                                    next(files.shift());
                                } else {
                                    end();
                                }
                            }
                        });
                    }
                });
            } else {
                // todo: replace true text
                grunt.verbose.or.error().error('bla bla bla');
                grunt.fail.warn('Something went wrong.');
            }
        }
        function start() {
            var args = ['convert', '-version'],
                content = [],
                process = spawn('/usr/bin/env', args/*, {
                 cwd: '.',
                 env: process.env
                 }*/);
            process.stdout.on('data', function (data) {
                content.push(data.toString());
            });
            process.on('close', function (code) {
                var temp = [];
                if (code === 0) {
                    content.join('\n').split('\n').forEach(function (element) {
                        element = String(element).
                            replace(/\s+/g, ' ').
                            replace(/\s+$/g, '').
                            replace(/^\s+/g, '');
                        if (element) {
                            temp.push(element);
                        }
                    });
                    grunt.log.writeln(temp.join('\n').magenta);
                    if (files.length) {
                        next(files.shift());
                    } else {
                        end();
                    }
                } else {
                    // todo: replace true text
                    grunt.verbose.or.error().error('bla bla bla');
                    grunt.fail.warn('Something went wrong.');
                }
            });
        }
        start();
    });

};