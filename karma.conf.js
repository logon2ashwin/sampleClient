// Karma configuration
// Generated on Tue Jul 21 2015 11:24:16 GMT+0530 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/js/lib.js',
      'root/*.js',
      'root/**/*.js',
      'root/**/*.html',
      'config.js',
      'modules/**/js/*.js',
      'modules/**/*.html',
      'modules/**/**/*.html',
      'bower_components/angular-mocks/angular-mocks.js',{
        pattern: "bower_components/angular-socket.io-mock/angular-socket.io-mock.js", included: false
      },
      'test/unit/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
      '**/*.html'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'modules/**/*.html': 'ng-html2js',
      'modules/**/**/*.html': 'ng-html2js',
      'root/**/*.html': 'ng-html2js',
      'modules/**/*.js': 'coverage',
      'modules/**/**/*.js': 'coverage',
      'modules/**/**/**/*.js': 'coverage',
      'root/**/*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','junit'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    junitReporter: {
      outputDir: 'test/results',
      outputFile: 'test-results-karma.xml'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    
    
    browserNoActivityTimeout: 100000
    
  })
};