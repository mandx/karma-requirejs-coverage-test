Testing Require.js code with Grunt/Karma
==================================
Example setup of [Grunt](http://gruntjs.com/)/[Karma](http://karma-runner.github.io/) with code coverage enabled using [Istambul](https://github.com/yahoo/istanbul).

This setup is based on https://github.com/ariya/coverage-mocha-istanbul-karma.

## Getting started

```
$ git clone https://github.com/mandx/karma-requirejs-coverage-test
$ cd karma-requirejs-coverage-test
$ npm install
[... NPM gibberish ...]
$ grunt karma:test
Running "karma:test" (karma) task
INFO [karma]: Karma v0.10.9 server started at http://localhost:9876/
INFO [launcher]: Starting browser Chrome
INFO [PhantomJS]: Connected on socket MQycPQIddE99Bmh4OWkJ
INFO [Chrome]: Connected on socket rmw_xyvRACuhJeVsOWkK
PhantomJS: Executed 2 of 2 SUCCESS (0.266 secs / 0.003 secs)
Chrome: Executed 2 of 2 SUCCESS (2.512 secs / 0.22 secs)
TOTAL: 4 SUCCESS

Done, without errors.

```

Now check the code/config (specially `Gruntfile.js` and `test/test-main.js`) and make it your own!