'use strict';

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	require('jit-grunt')(grunt);

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
			src: '*.js'
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'src',
					src: ['socialSharing.scss'],
					dest: 'src',
					ext: '.min.css'
				}]
			}
		},
		watch: {
			styles: {
				files: ['*.scss'],
				tasks: ['sass']
			},
			js: {
				files: ['*.js'],
				tasks: ['jshint', 'jscs']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'jscs', 'sass']);
};