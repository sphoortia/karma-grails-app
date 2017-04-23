# karma-grails-app
Grails sample application to demo use of Karma, Jasmine &amp; RequireJS
This uses NodeJs  [https://nodejs.org/en/] , grails 2.5.0 [https://grails.org/download.html] so it needs to be setup separately.
Internally it uses plugin karma-test-runner:0.2.4 [https://grails.org/plugin/karma-test-runner]

Make sure you setup
npm install -g karma
npm install -g karma-remote-reporter
npm install -g karma-jasmine
npm install -g karma-phantomjs-launcher
npm install -g karma-coverage

Once cloned run the following to test
grails clean
grails compile
grails test-app unit:javascript

output is shown in console for
C:\work>grails test-app unit:javascript
| Running without daemon...
..............................................Karma will be started with process builder args: [karma.cmd, start, C:\work\gitHub\karma-grails-app\.\karma.conf.js]
|Running 1 javascript test...
Karma result receiver server startet at port: 9889
23 04 2017 19:26:01.230:INFO [reporter.remote]: Connected to localhost:9889
23 04 2017 19:26:01.257:INFO [karma]: Karma v1.6.0 server started at http://0.0.0.0:9876/
23 04 2017 19:26:01.258:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
23 04 2017 19:26:01.280:INFO [launcher]: Starting browser PhantomJS
23 04 2017 19:26:04.673:INFO [PhantomJS 2.1.1 (Windows 8 0.0.0)]: Connected on socket YUBZY2QYBwBsTi9gAAAA with id 65510579
23 04 2017 19:26:04.836:INFO [reporter.remote]: browser + connectionPhantomJS 2.1.1 (Windows 8 0.0.0)
|Running 1 javascript test... 1 of 1
23 04 2017 19:26:04.836:INFO [reporter.remote]: onBrowserStart: 65510579
|Running 1 javascript test... 2 of 2
|Running 1 javascript test... 3 of 3
|Completed 3 javascript tests, 0 failed in 0m 8s
| Tests PASSED - view reports in C:\work\gitHub\karma-grails-app\target\test-reports

The coverage is captured and gets added to a folder  C:\work\gitHub\karma-grails-app\coverage
We can access the index.html to see the details.
