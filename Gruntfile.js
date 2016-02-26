'use strict';
module.exports = function (grunt) {


  grunt.initConfig({

    browserify: {
        dist: {
          options: {
            transform: [["babelify", {presets: ["react"]}]]
        },
        debug: true,
        global: true,
        files: {
          'public/js/main.js': ['src/main.jsx']
        }
      }
    },
    /*
     * Run predefined tasks whenever watched files are added, 
     * modified or deleted.
     */
    watch: {
      scripts: {
        files: ['src/**/*.jsx'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch', 'browserify']);

};