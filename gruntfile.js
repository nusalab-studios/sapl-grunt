/*

expand  : Enable dynamic expansion.
cwd     : Src matches are relative to this path.
src     : Actual pattern(s) to match.
dest    : Destination path prefix.
ext     : Dest filepaths will have this extension.

*/

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-cssnano');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-image');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // tasks
    const tasks = {
        default: 'default',
        html: 'htmlmin:prod',
        htmldev: 'htmlmin:dev',
        sass: 'sass:prod',
        sassdev: 'sass:dev',
        css: 'cssnano',
        autoprefixer: 'autoprefixer',
        browserify: 'browserify',
        uglify: 'uglify',
        copy: 'copy',
        eslint: 'eslint',
        browserSync: 'browserSync',
        watch: 'watch',
        image: 'image',
        svgmin: 'svgmin',
        sprites: 'svgstore',
        clean: 'clean:dist',
        cleanSprites: 'clean:sprites',
        concurrent: ['concurrent:clean', 'concurrent:prod'],
    }

    // source files
    const folderPath = {
        html: 'src/views/',
        images: 'src/assets/images',
        svgmin: 'src/assets/fonts/sprites',
        sass: 'src/assets/sass/',
        css: 'src/assets/css/',
        javascript: 'src/assets/js/',
        javascriptVendors: 'src/assets/js/vendors/',
        autoprefixer: 'dist/css/',
        uglify: 'dist/js/',
        fonts: 'src/assets/fonts/',
        videos: 'src/assets/videos/'
    }

    const inputPath = {
        html: '*.html',
        images: '*.{png,jpg,jpeg,gif,svg}',
        svgmin: '*.svg',
        sprites: 'dist/fonts/sprites/*.svg',
        fonts: '*.{eot,ttf,woff,woff2,svg}',
        videos: '*.mp4',
        sass: '*.scss',
        css: '*.css',
        javascript: '*.js',
        eslint: ['src/assets/js/**/*.js', '!src/assets/js/vendors/*.js']
    }

    const outputPath = {
        html: 'dist',
        images: 'dist/images',
        svgmin: 'dist/fonts/sprites',
        sass: 'dist/css',
        css: 'dist/css/vendors',
        javascript: 'dist/js',
        javascriptVendors: 'dist/js/vendors',
        autoprefixer: 'dist/css',
        uglify: 'dist/js',
        fonts: 'dist/fonts',
        videos: 'dist/videos',
    }

    const watchPath = {
        html: 'src/views/*.html',
        sass: 'src/assets/sass/**/*.scss',
        javascript: 'src/assets/js/**/*.js',
    }

    const livereloadPath = {
        html: 'dist/*.html',
        css: 'dist/css/*.css',
        javascript: 'dist/js/**/*.js'
    }

    // output extension
    const outputExt = {
        sass: '.min.css',
        css: '.min.css',
        javascript: '.bundle.js',
    }

    grunt.initConfig({

        // clean
        clean: {
            dist: 'dist',
            sprites: 'dist/fonts/sprites',
        },

        // automatic minifying html
        htmlmin: {
            prod: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: folderPath.html,
                    src: inputPath.html,
                    dest: outputPath.html,
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: folderPath.html,
                    src: inputPath.html,
                    dest: outputPath.html,
                }]
            }
        },

        // minify images
        image: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: folderPath.images,
                    src: inputPath.images,
                    dest: outputPath.images
                }]
            }
        },

        // svgmin
        svgmin: {
            options: {
                plugins: [{
                    removeViewBox: false,
                }]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: folderPath.svgmin,
                    src: inputPath.svgmin,
                    dest: outputPath.svgmin
                }]
            }
        },

        // svg sprites
        svgstore: {
            options: {
                prefix: 'si-',
            },
            default: {
                files: {
                    'dist/fonts/sapl-sprites.svg': inputPath.sprites,
                },
            }
        },

        // compile sass
        sass: {
            prod: {
                options: {
                    outputStyle: "compressed"
                },
                files: [{
                    expand: true,
                    cwd: folderPath.sass,
                    src: inputPath.sass,
                    dest: outputPath.sass,
                    ext: outputExt.sass
                }]
            },
            dev: {
                options: {
                    sourceMap: true,
                    outputStyle: "expanded"
                },
                files: [{
                    expand: true,
                    cwd: folderPath.sass,
                    src: inputPath.sass,
                    dest: outputPath.sass,
                    ext: outputExt.sass
                }]
            }
        },

        // minify css
        cssnano: {
            dist: {
                files: [{
                    expand: true,
                    cwd: folderPath.css,
                    src: inputPath.css,
                    dest: outputPath.css,
                    ext: outputExt.css
                }]
            }
        },

        // automatic browser prefixing
        autoprefixer: {
            dist: {
                options: {
                    map: true,
                    browsers: "last 50 versions"
                },
                files: [{
                    expand: true,
                    cwd: folderPath.autoprefixer,
                    src: inputPath.css,
                    dest: outputPath.autoprefixer,
                }]
            },
        },

        // babelify
        browserify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: folderPath.javascript,
                    src: inputPath.javascript,
                    dest: outputPath.javascript,
                    ext: outputExt.javascript
                }],
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    transform: ["babelify"]
                }
            }
        },

        // automatic minifying javascript
        uglify: {
            dist: {
                files: [{
                    expand: true,
                    cwd: folderPath.uglify,
                    src: inputPath.javascript,
                    dest: outputPath.uglify,
                }],
            }
        },

        // copy file
        copy: {
            jsvendors: {
                files: [{
                    expand: true,
                    cwd: folderPath.javascriptVendors,
                    src: inputPath.javascript,
                    dest: outputPath.javascriptVendors,
                }],
            },
            fonts: {
                files: [{
                    expand: true,
                    cwd: folderPath.fonts,
                    src: inputPath.fonts,
                    dest: outputPath.fonts,
                }],
            },
            videos: {
                files: [{
                    expand: true,
                    cwd: folderPath.videos,
                    src: inputPath.videos,
                    dest: outputPath.videos,
                }],
            }
        },

        // linter
        eslint: {
            all: [inputPath.eslint, '!node_modules/**']
        },

        // watch
        watch: {
            html: {
                files: [watchPath.html],
                tasks: tasks.htmldev
            },
            sass: {
                files: [watchPath.sass],
                tasks: tasks.sassdev
            },
            browserify: {
                files: [watchPath.javascript],
                tasks: [tasks.browserify, tasks.eslint]
            },
        },

        // livereload
        browserSync: {
            bsFiles: {
                src: [
                    livereloadPath.html,
                    livereloadPath.css,
                    livereloadPath.javascript
                ]
            },
            options: {
                watchTask: true,
                server: {
                    baseDir: './dist'
                }
            }
        },

        concurrent: {
            clean: [tasks.clean],
            prod: [tasks.html, tasks.css, [tasks.sass, tasks.autoprefixer],
                [tasks.browserify, tasks.uglify], tasks.image, [tasks.svgmin, tasks.sprites, tasks.cleanSprites], tasks.copy
            ],
        }
    }); //initConfig

    if (process.env.NODE_ENV === 'production') {
        grunt.registerTask(tasks.default, tasks.concurrent);
    } else {
        grunt.registerTask(tasks.default, [tasks.browserSync, tasks.watch]);
    }
};
