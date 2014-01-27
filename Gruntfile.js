module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Compass compilation task.
    compass: {
      dist: {
        options: {
          config: 'config.rb', // Our configuration file.
          bundleExec: true, // Execute our compass comand with bundle exec.
        }
      }
    },

    // JavaScript Lint checking task.
    jshint: {
      all: ['Gruntfile.js', 'js/*.js']
    },

    // Image optimization task.
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'img-drop/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },

    // The default task we leave running to watch for file changes.
    watch: {
      css: {
        files: 'sass/*.scss',
        tasks: ['compass'],
        options: {
          livereload: true,
        },
      },
      js: {
        files: ['js/*', 'Gruntfile.js'],
        tasks: ['jshint']
      },
      image: {
        files: 'img/*',
        tasks: ['imagemin']
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default',['watch']);
};