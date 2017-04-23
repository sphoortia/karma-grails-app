// Karma configuration
// Generated on Thu Apr 20 2017 11:24:14 GMT+0530 (India Standard Time)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            {pattern: 'lib/**/*.js', included: false},
            {pattern: 'src/js/*.js', included: false},
            {pattern: 'test/js/*Spec.js', included: false},

            'test/test-main.js',

        ],



        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/js/*.js': ['coverage']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['remote', 'coverage'],

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

        remoteReporter: {
            host: 'localhost',
            port: '9889'
        },

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        failOnEmptyTestSuite: false,

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-remote-reporter',
            'karma-requirejs',
            'karma-coverage'
        ]
    })
}
