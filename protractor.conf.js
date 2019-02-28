require('ts-node/register');

exports.config = {
    framework: 'jasmine',
    allScriptsTimeout: 123456, // This is one of the iOS issues that other people have reported https://github.com/angular/protractor/issues/4869

    jasmineNodeOpts: {
        print: function() {},
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 600123
    },

    sauce: {
        username: ' TO BE SET ',
        accessKey: ' TO BE SET ',
        apiKey: ' TO BE SET '
    },

    SELENIUM_PROMISE_MANAGER: true,

    onPrepare: function() {
        configureSpecReporter();

        let browser = require('protractor').browser;
        browser.getSession().then((session) => {
            console.log(`session details (protractor.conf): `, session);
        });
    },

    useAllAngular2AppRoots: true
};

function configureSpecReporter() {
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    jasmine.getEnv().addReporter(
        new SpecReporter({
            spec: {
                displayStacktrace: false,
                displayDuration: true
            },
            // overwrite the default ticks/crosses as they do not render in CI log files (like bamboo) making them hard to read
            prefixes: { successful: ' PASS: ', failed: ' FAIL: ', pending: ' (pending): ' }
        })
    );
}
