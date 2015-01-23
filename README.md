# grunt-favicon [![NPM version](https://badge.fury.io/js/grunt-favicon.png)](http://badge.fury.io/js/grunt-favicon) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![Npm Downloads](https://nodei.co/npm/grunt-favicon.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.org/package/grunt-favicon)
[![Npm Downloads](https://nodei.co/npm-dl/grunt-favicon.png?height=3&months=3)](https://www.npmjs.org/package/grunt-favicon)

Generate site favicons via [ImageMagick](http://www.imagemagick.org/).

## Options

### options.countOfImages

* **type** &lt;number&gt;
* **default** 6

Count of images into icon.

### options.colorDepth

* **type** &lt;number&gt;
* **default** 8

Count of bits for color.

## Examples

``` javascript
grunt.initConfig({
    favicon: {
        // general options
        options: {},
        tasks: {
            // task options
            options: {},
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
```