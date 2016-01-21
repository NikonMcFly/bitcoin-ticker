'use strict';
module.exports = function (grunt) {


  grunt.initConfig({
    /**
     * Write ES6 today, compile it to ES5.
     */
    browserify: {
        dist: {
          options: {
            transform: ["babelify", {presets: ["es2015", "react"]}]
        },
        debug: true,
        files: {
          'public/js/main.js': ['src/components/*.jsx']
        }
      }
    },
    /*
     * Run predefined tasks whenever watched files are added, 
     * modified or deleted.
     */
    watch: {
      scripts: {
        files: ['src/components/**/*.jsx'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify', 'watch']);

};