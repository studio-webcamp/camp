module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'public/stylesheets/css/base.css': 'public/stylesheets/sass/base.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'public/stylesheets/sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        }
    });

    //load tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default');

};