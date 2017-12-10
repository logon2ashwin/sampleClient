var pkgjson = require('./package.json');

var config = {
    pkg: pkgjson,
    dist: 'dist',
    lib: 'lib',
    build: 'build'
};


module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        config: config,
        pkg: config.pkg,
        wiredep: {

            target: {

                // Point to the files that should be updated when
                // you run `grunt bower-install`
                src: [
                    'dist/index.html'
                ],

                // Optional:
                // ---------
                cwd: '',
                dependencies: true,
                devDependencies: false,
                exclude: [],
                fileTypes: {},
                ignorePath: '',
                overrides: {}
            }
        },
        bower_concat: {
            prod: {
                dest: '<%= config.dist %>/js/lib.js',
                cssDest: '<%= config.dist %>/css/lib2.css',
                exclude:[
                    'font-awesome', 'moment-timezone'
                ],
                dependencies: {
                    'jquery-ui':'jquery',
                    'bootstrap':'jquery',
                    'angular': 'jquery',
                   'ngImgCrop': 'angular',
                    'angular-bootstrap-datetimepicker-directive': 'eonasdan-bootstrap-datetimepicker',
                    'eonasdan-bootstrap-datetimepicker': ['jquery', 'angular', 'bootstrap', 'moment']
                }
            },
            dev: {
                dest: '<%= config.lib %>/js/lib.js',
                cssDest: '<%= config.lib %>/css/lib2.css',
                exclude:[
                    'font-awesome'
                ],
                dependencies: {
                    'jquery-ui':'jquery',
                    'bootstrap':'jquery',
                    'angular': 'jquery'
                }
            }
        },
        uncss: {
            dist: {
                options: {
                    ignore: ['.content', '.thumb', '.panel-title', '.menutitle', '.menudesc', 'img-crop', 'img-crop canvas', "class*='fa','.fa','.fa-graduation-cap'"],
                    compress: true,
                    htmlroot: "dist"
                },
                files: {
                    'dist/css/tidy.css': ['dist/index.html', 'modules/**/*.html']
                }
            }
        },
        processhtml: {
            dist: {
                files: {
                    'dist/index.html': ['dist/index.html']
                }
            }
        },
        shell: {
            protractor:{
                command: function (libname) {
                    return '(cd test/e2e && protractor conf.js)';
                }
            },
            bowerinstall: {
                command: function (libname) {
                    return 'bower install ' + libname + ' -S';
                }
            },
            bowerupdate: {
                command: function (libname) {
                    return 'bower update ' + libname;
                }
            }
        },
        concat: {
            js: {
                src: ['modules/**/js/*.js', 'root/**/*.js', 'config.js'],
                dest: '<%= config.dist %>/js/pack.js'
            },
            prodconfigjs: {
                src: ['modules/**/js/*.js', 'root/**/*.js'],
                dest: '<%= config.dist %>/js/pack.js'
            },
            libcss: {
                src: ['bower_components/**/css/*.min.css', 'bower_components/**/dist/css/*.min.css', 'bower_components/ngImgCrop/compile/unminified/ng-img-crop.css'],
                dest: '<%= config.dist %>/css/lib.css'
            },
            css: {
                src: ['fonts/fonts.css','css/style.css','css/bootstrap-theme.css','css/lib.css', 'css/theme.css','css/ui.css','css/layout.css'],
                dest: '<%= config.dist %>/css/pack.css'
            },
            prodlibcss: {
                src: ['bower_components/**/css/*.min.css', 'bower_components/**/dist/css/*.min.css', 'bower_components/ngImgCrop/compile/unminified/ng-img-crop.css'],
                dest: '<%= config.dist %>/css/lib.css'
            },
            devlibcss: {
                src: ['bower_components/**/css/*.min.css', 'bower_components/**/dist/css/*.min.css', 'bower_components/ngImgCrop/compile/unminified/ng-img-crop.css','bower_components/angular-input-stars-directive/angular-input-stars.css'],
                dest: '<%= config.lib %>/css/lib.css'
            }
        },

        ngAnnotate: {
            options: {
                // Task-specific options go here.
            },
            prod: {
                expand: true,
                src: ['<%= config.dist %>/js/pack.js'],
                ext: '.js'
            }
        },
        comments: {
            js: {
                // Target-specific file lists and/or options go here.
                options: {
                    singleline: true,
                    multiline: true
                },
                src: ['<%= config.dist %>/js/pack.js'] // files to remove comments from
            },
            css: {
                // Target-specific file lists and/or options go here.
                options: {
                    singleline: true,
                    multiline: true
                },
                src: ['<%= config.dist %>/css/pack.css'] // files to remove comments from
            }
        },
        htmlclean: {
            options: {
                protect: /<\!--%fooTemplate\b.*?%-->/g,
                edit: function (html) {
                    return html.replace(/\begg(s?)\b/ig, 'omelet$1');
                }
            },
            deploy: {
                expand: true,
                cwd: '<%= config.dist %>/',
                src: 'index.html',
                dest: '/'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd-HH:MM:SS") %> */\n',
                screwIE8: true
            },
            my_target: {
                options: {
                    mangle: false,
                    compress: {
                        drop_console: true
                    },
                    wrap: true,
                    preserveComments: false
                },
                files: [{
                    expand: false,
                    src: '<%= config.dist %>/js/pack.js',
                    dest: '<%= config.dist %>/js/pack.min.js'
                }]
            },
            dest: {
                options: {
                    mangle: false,
                    compress: {},
                    wrap: true,
                    preserveComments: false
                },
                files: [{
                    expand: false,
                    src: '<%= config.dist %>/js/lib.js',
                    dest: '<%= config.dist %>/js/lib.min.js'
                }]
            }
        },
        min: {
            js: {
                src: '<%= config.dist %>/js/pack.js',
                dest: '<%= config.dist %>/js/pack.min.js'
            }
        },
        cssmin: {
            pack: {
                src: '<%= config.dist %>/css/pack.css',
                dest: '<%= config.dist %>/css/pack.min.css'
            },
            lib2: {
                src: '<%= config.dist %>/css/lib2.css',
                dest: '<%= config.dist %>/css/lib2.min.css'
            },
            mintidycss: {
                src: '<%= config.dist %>/css/tidy.css',
                dest: '<%= config.dist %>/css/tidy.min.css'
            }
        },
        copy: {
            prod_img: {
                expand: true,
                src: ['img/**'],
                dest: '<%= config.dist %>/',
                mode: true
            },
            prod_fonts: {
                expand: true,
                cwd: 'bower_components/font-awesome',
                src: '**/fonts/*',
                dest: '<%= config.dist %>'
            },
            prod_partials: {
                expand: true,
                cwd: './',
                src: 'root/partials/*.html',
                dest: '<%= config.dist %>'
            },
            prod_UI_partials: {
                expand: true,
                cwd: './',
                src: 'partials/*',
                dest: '<%= config.dist %>'
            },
            fonts: {
                expand: true,
                cwd: './',
                src: 'fonts/**/*',
                dest: '<%= config.dist %>'
            },
            prod_copy_files: {
                expand: true,
                cwd: 'build/prod/',
                src: ['**/index.html','**/robots.txt','**/sitemap.xml'],
                dest: '<%= config.dist %>/',
                mode: true
            },
            prod_copy_plugins: {
               expand: true,
               cwd: 'plugins/',
               src: ['**'],
               dest: '<%= config.dist %>/plugins',
               mode: true
           },
             prod_config: {
               expand: true,
               cwd: 'build/prod/',
               src: ['config.json'],
               dest: '<%= config.dist %>',
               mode: true
           },
            prodtinymce: {
                expand: true,
                cwd: 'plugins/tinymce',
                src: '**/*',
                dest: '<%= config.dist %>/tinymce'
            },
            prodsocketio: {
                expand: true,
                cwd: 'node_modules/socket.io/node_modules/socket.io-client',
                src: '**/socket.io.js',
                dest: '<%= config.dist %>/socketio'
            },
            dev: {
                expand: true,
                cwd: 'bower_components/font-awesome',
                src: '**/fonts/*',
                dest: '<%= config.lib %>'
            },
            devtinymce: {
                expand: true,
                cwd: 'plugins/tinymce',
                src: '**/*',
                dest: '<%= config.lib %>/tinymce'
            },
            devjquerycookie: {
                expand: true,
                cwd: 'plugins/jquery-cookie',
                src: '**/*',
                dest: '<%= config.lib %>/jquery-cookie'
            }
        },
        clean: {
            build: {
                src: ['<%= config.dist %>/*']
            },
            prod: {
                src: ['<%= config.dist %>/js/pack.js', '<%= config.dist %>/css/pack.css']
            },
            dev: {
                src: ['<%= config.lib %>/*']
            },
            unwanted: {
                src: ['<%= config.dist %>/js/lib.min.js', '<%= config.dist %>/js/pack.js', '<%= config.dist %>/css/pack.css']
            }
        },
        watch: {
            dev: {
                files: ['Gruntfile.js', 'modules/**/js/*.js', 'root/directives/*.js', 'root/controllers/*.js', 'root/services/*.js', 'root/routes/*.js', 'root/app.js', 'modules/**/*.html', 'css/*.css', 'index.html'],
                tasks: [],
                options: {
                    atBegin: true,
                    livereload: true
                }
            }
        },
        "jsbeautifier": {
            "default": {
                src: ["modules/**/js/*.js", "root/**/*.js", "root/*.js"]
            },
            "git-pre-commit": {
                src: ["modules/**/js/*.js"],
                options: {
                    mode: "VERIFY_ONLY"
                }
            }
        },
        prettify: {
            // Prettify a directory of files
            all: {
                expand: true,
                ext: '.html',
                src: ['index.html', 'modules/**/*.html']
            }
        },
        jslint: { // configure the task
            // lint your project's client code
            client: {
                src: ["modules/**/js/*.js", "root/**/*.js", "root/*.js"],
                directives: {
                    browser: true,
                    predef: [
                        'jQuery'
                    ]
                }
            }
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
                options: {                                 // Target options
                    removeComments: true,
                    collapseWhitespace: true
                },
                expand: true,
                src: ['modules/**/*.html'],
                dest: '<%= config.dist %>/',
                mode: true
            }
        },
        aws: grunt.file.readJSON('aws.json'),
        aws_s3: {
            options: {
                accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
                secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
                region: 'eu-west-1',
                uploadConcurrency: 5, // 5 simultaneous uploads
                downloadConcurrency: 5 // 5 simultaneous downloads
            },
            staging: {
                options: {
                    bucket: 'my-wonderful-staging-bucket',
                    differential: true // Only uploads the files that have changed
                },
                files: [
                    {dest: 'app/', cwd: 'backup/staging/', action: 'download'},
                    {src: 'app/', cwd: 'copy/', action: 'copy'},
                    {expand: true, cwd: 'dist/staging/scripts/', src: ['**'], dest: 'app/scripts/'},
                    {expand: true, cwd: 'dist/staging/styles/', src: ['**'], dest: 'app/styles/'},
                    {dest: 'src/app', action: 'delete'}
                ]
            },
            production: {
                options: {
                    region: "us-east-1",
                    bucket: 'clofusprod',
                    access: "public-read",
                    progress: "progressBar",
                    enableWeb: true,
                    params: {
                        ContentEncoding: 'gzip',
                        ACL: 'public-read'
                    }
                },
                files: [
                    {expand: true, cwd: 'dist/', src: ['**'], dest: '/'}
                ]
            },
            clean_production: {
                options: {
                    region: "us-east-1",
                    bucket: 'clofusprod',
                    access: "public-read",
                    progress: "progressBar"
                },
                files: [
                    {dest: '/', action: 'delete'}
                ]
            },
            download_production: {
                options: {
                    bucket: 'my-wonderful-production-bucket'
                },
                files: [
                    {dest: 'app/', cwd: 'backup/', action: 'download'}, // Downloads the content of app/ to backup/
                    {dest: 'assets/', cwd: 'backup-assets/', exclude: "**/*copy*", action: 'download'}, // Downloads everything which doesn't have copy in the name
                ]
            },
            secret: {
                options: {
                    bucket: 'my-wonderful-private-bucket',
                    access: 'private'
                },
                files: [
                    {expand: true, cwd: 'secret_garden/', src: ['*.key'], dest: 'secret/'},
                ]
            }
        },
        s3: {
            options: {
                accessKeyId: "<%= aws.dns.accessKeyId %>",
                secretAccessKey: "<%= aws.dns.secretAccessKey %>",
                region: "us-east-1",
                bucket: "<%= aws.dns.bucket %>"
            },
            build: {
                cwd: "dist/",
                src: "**"
            }
        },
        route53: {
            options: {
                accessKeyId: "<%= aws.dns.accessKeyId %>",
                secretAccessKey: "<%= aws.dns.secretAccessKey %>",
                zones: {
                    'mydomain.org': [{
                        name: 'record1.mydomain.org',
                        type: 'A',
                        value: ['1.1.1.1']
                    }, {
                        name: 'record2.mydomain.org',
                        type: 'CNAME',
                        value: ['record2.mydomain.org.s3-website-ap-southeast-2.amazonaws.com']
                    }]
                }
            }
        },
        cloudfront: {
            options: {
                accessKeyId: "<%= aws.dns.accessKeyId %>",
                secretAccessKey: "<%= aws.dns.secretAccessKey %>",
                distributionId: "<%= aws.dns.distributionId %>",
                invalidations: [
                    '/index.html',
                    '/favicon/*',
                    '/modules/**/index.html',
                    '/css/pack.min.css',
                    '/fonts/*',
                    '/js/pack.min.js',
                    '/favicon.ico',
                    '/tinymce/*',
                    '/css/lib2.css',
                    '/img/logo.png',
                    '/js/lib.js',
                    '/index.html',
                    '/img/clofus/*'
                ]
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                options: {                       // Target options
                    optimizationLevel: 1
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: '<%= config.dist %>/img',                   // Src matches are relative to this path
                    src: [
                        '*.{png,jpg}',
                        'clofus/*.{png,jpg}'
                    ],
                    dest: '<%= config.dist %>/img'
                }]
            }
        },
        favicons: {
                options: {
                    trueColor: true,
                    apple: true,
                    precomposed: true,
                    appleTouchPadding:0,
                    appleTouchBackgroundColor: "#fff",
                    coast: false,
                    windowsTile: true,
                    tileBlackWhite: true,
                    tileColor: "#46A6DB",
                    androidHomescreen: true,
                    HTMLPrefix: "/favicon/",
                    html: 'dist/index.html'
                },
                dev: {
                    src: 'img/logo.png',
                    dest: 'favicon/'
                },
                prod: {
                    src: 'img/logo.png',
                    dest: 'dist/favicon/'
                }
        }
    });

    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-stripcomments');
    grunt.loadNpmTasks('grunt-htmlclean');

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.loadNpmTasks('grunt-uncss');

    grunt.loadNpmTasks('grunt-processhtml');

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.loadNpmTasks('grunt-aws-s3');

    grunt.loadNpmTasks('grunt-aws');

// TASKS
    grunt.registerTask('bowerinstall', function (library) {
        grunt.task.run('shell:bowerinstall:' + library);
        grunt.task.run('buildbower');
    });

    grunt.registerTask('bowerconcat', ['bower_concat']);

    grunt.registerTask('bowerupdate', function (library) {
        grunt.task.run('shell:bowerupdate:' + library);
        grunt.task.run('buildbower');
    });

    grunt.registerTask('comments1', ['comments']);

    grunt.registerTask('includedep', ['wiredep']);

    grunt.registerTask('cleanhtml', ['htmlclean']);

    grunt.registerTask('cleanprod', ['clean:build']);

    grunt.registerTask('beautifyjs', ['jsbeautifier']);

    grunt.registerTask('beautifyhtml', ['prettify']);

    grunt.registerTask('lintjs', ['jslint']);

    grunt.registerTask('tidycss', ['uncss']);

    grunt.registerTask('correcthtml', ['processhtml']);

    grunt.registerTask('compresslib', ['uglify:bower']);

    grunt.registerTask('tidyhtml', ['htmlmin']);

    grunt.registerTask('deployprod', ['aws_s3:production']);

    grunt.registerTask('cleanprod', ['aws_s3:clean_production']);

    grunt.registerTask('deploys3', ['s3']);

    grunt.registerTask('deploys3cache', ['cloudfront']);

    grunt.loadNpmTasks('grunt-contrib-imagemin');

    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-favicons');

    grunt.registerTask('compressimg', ['imagemin']);


// BUILD TASk
    grunt.registerTask('buildprod', ['clean:build', 'bower_concat:prod', 'concat:prodconfigjs', 'concat:css', 'ngAnnotate', 'uglify:my_target', 'cssmin:pack','cssmin:lib2', 'copy:prod_img', 'copy:prod_fonts','copy:fonts', 'copy:prod_copy_files','copy:prod_copy_plugins','copy:prod_config', 'copy:prod_partials','copy:prod_UI_partials', 'tidyhtml', 'correcthtml', 'clean:unwanted','compressimg']);
//  grunt.registerTask('buildprod', ['clean:build','bower_concat:prod', 'concat:js','concat:css', 'ngAnnotate', 'comments', 'uglify', 'cssmin', 'copy:prod_img','copy:prod_fonts','copy:prod_copy_files','copy:prodtinymce','tidycss','correcthtml']);
    grunt.registerTask('builddev', ['clean:dev', 'bower_concat:dev', 'concat:devlibcss', 'copy:dev', 'copy:devtinymce','copy:devjquerycookie', 'watch:dev']);
    grunt.registerTask('builddev2', ['clean:dev', 'bower_concat:dev', 'concat:devlibcss', 'copy:dev', 'copy:devtinymce', 'beautifyjs', 'beautifyhtml']);
    grunt.registerTask('develop', ['clean:dev', 'bower_concat:dev', 'concat:devlibcss', 'copy:dev', 'copy:devtinymce', 'watch:dev']);
    grunt.registerTask('cleanup', ['clean:dev', 'bowerbrew install imagemagick_concat:dev', 'concat:devlibcss', 'copy:dev', 'copy:devtinymce', 'beautifyjs', 'beautifyhtml']);
;


};
