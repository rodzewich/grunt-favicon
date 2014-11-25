/*jslint */
/*global module, require, process, setTimeout */

module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                banner: grunt.file.read("banner.txt")
            },
            tasks: {
                files: [{
                    expand : false,
                    dest   : "tasks/tsc.js",
                    src    : "src/*.js"
                }]
            }
        }
    });

    grunt.registerTask("default", "Build package.", ["uglify:tasks"]);

};