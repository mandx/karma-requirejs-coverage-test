var tests = [];
for (var file in window.__karma__.files) {
    // Our test modules are named "<something>Spec.js"
    // If you decide to change the format of the file name this Regex
    // must reflect it.
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    // The "src/" part is the same as the one in the repo root
    baseUrl: '/base/src',

    // Usual RequireJS stuff...
    paths: {
        'jquery': '../lib/jquery',
        'underscore': '../lib/underscore',
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests) that we collected before
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
