'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

  require('grunt-contrib-uglify')(grunt);


	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: {
				src: [
					'Gruntfile.js',
					'*.js'
				]
			}
		},
		jscs: {
			options: {
				config: '.jscsrc'
			},
			src: 'src/*.js'
		},
    uglify: {
      options: {
        compress: {
          drop_console: true
        }
      },
      my_target: {
        files: {
          'dist/js/social-sharing.min.js': ['src/social-sharing.js']
        }
      }
    },
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: ['social-sharing.scss'],
					dest: 'dist/css',
					ext: '.min.css'
				}]
			}
		},
		watch: {
			styles: {
				files: ['src/*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['src/*.js'],
				tasks: ['jshint', 'uglify']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'sass', 'uglify']);

};