module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['js/*.js']
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
        'css/main.css': 'sass/main.sass'
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
        expand: true,
        cwd: 'images/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'images/build/'
        }]
      }
    },

    watch: {
      css: {
        files: ['sass/*.sass'],
        tasks: ['sass'],
        options: {
        spawn: false,
        }
      },
      js: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint']
      }
    }
  });

  	// Load the plugin tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  	// Default task(s).
  grunt.registerTask('default', ["jshint", "sass", "imagemin", "watch"]);

};