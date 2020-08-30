module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['javascript/script.js']
        },
        concat: {
            dist: {
                files: {
                    'javascript/all.js': ['javascript/scripts.js', 'javascript/plugin.js']
                }
            }
        },
        less: {
            dist: {
                files: {
                    'css/style.min.css' : ['less/style.less', 'less/mixins.less']
                }
            },
            option: {
                compress: true
            }
        }
        imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'images/src/',
					src: ['**/*.{jpg,gif,png}'],
					dest: 'images/dist/'
				}]
			}
		}
        // csslint: {
        //     all: ['css/reset.css', 'css/style.css']
        // },
        // cssmin: {
        //     dist: {
        //         files: {
        //             'css/style.min.css' : ['css/reset.css', 'css/style.css']
        //         }
        //     }
        // },
        // autoprefixer: {
        //     all: {
        //         src: 'css/style.min.css'
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', [
        'jshint',
        'concat',
        // 'csslint',
        'less',
        'imagemin'
        // 'cssmin',
        // 'autoprefixer'
    ]);
};