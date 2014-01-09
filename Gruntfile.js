module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({
        karma: {
            test: {
                options: {
                    // base path, that will be used to resolve files and exclude
                    basePath: '',

                    // frameworks to use
                    frameworks: ['jasmine', 'requirejs'],
                    // frameworks: ['mocha', 'requirejs'],

                    // list of files / patterns to load in the browser
                    files: [
                        {pattern: 'lib/**/*.js', included: false},
                        {pattern: 'src/**/*.js', included: false},
                        {pattern: 'test/**/*Spec.js', included: false},
                        // 'node_modules/karma-expect/node_modules/expect.js/expect.js',
                        'test/test-main.js',
                    ],

                    // list of files to exclude
                    exclude: [
                        'src/main.js'
                    ],

                    // test results reporter to use
                    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
                    reporters: ['progress', 'coverage'],

                    // We need 'coverage' both in `reporters` and `preprocessors`
                    // The coverage data will be stored into the "coverage/" folder
                    // both in HTML and JSON format
                    preprocessors: { 'src/*.js': ['coverage'] },

                    // enable / disable colors in the output (reporters and logs)
                    colors: true,

                    // level of logging
                    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
                    logLevel: 'INFO',

                    // enable / disable watching file and executing tests whenever any file changes
                    autoWatch: true,

                    // Start these browsers, currently available:
                    // - Chrome
                    // - ChromeCanary
                    // - Firefox
                    // - Opera
                    // - Safari (only Mac)
                    // - PhantomJS
                    // - IE (only Windows)
                    // PhantomJS appears to be used even if not listed here
                    browsers: ['Chrome'],

                    // If browser does not capture in given timeout [ms], kill it
                    captureTimeout: 60000,

                    // Continuous Integration mode
                    // if true, it capture browsers, run tests and exit
                    singleRun: true
                }
            }
        }
    });
};
