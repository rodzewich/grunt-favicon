/*global module */

module.exports = function (grunt) {

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            all: [
                'Gruntfile.js',
                'src/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        uglify: {
            options: {
                banner: grunt.file.read("src/banner.txt")
            },
            compile: {
                files: [{
                    expand : false,
                    dest   : "tasks/favicon.js",
                    src    : "src/*.js"
                }]
            }
        },
        // Build test data.
        favicon: grunt.file.readJSON("tests/fixtures.json"),
        // Unit tests.
        nodeunit: {
            tests: ['tests/*_test.js']
        },
        // Clean temp files.
        clean: {
            tests: ['tests/dest']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('src');

    grunt.registerTask("default", "Build package.", ["test", "compile"]);
    grunt.registerTask("test", "Test project.", ["favicon", "nodeunit", "clean:tests"]);
    grunt.registerTask("compile", "Compile project.", ["jshint:all", "uglify:compile"]);

};