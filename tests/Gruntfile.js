/*jslint */
/*global module */

module.exports = function (grunt) {

    grunt.loadTasks("../src");

    grunt.initConfig({
        favicon: {
            options: {},
            tasks: {
                files: [{
                    expand : true,
                    cwd    : "src",
                    ext    : ".ico",
                    dest   : "dest",
                    src    : "*.png"
                }]
            }
        }
    });

    grunt.registerTask("default", "Test all.", ["favicon"]);

};