var config = require('./protractor.conf.js').config;

delete config.specs;
config.suites = {
    overview: 'e2e/myAccount/smoke/**/smoke.overview.e2e.spec.ts'
};

config.directConnect = false;

// config.seleniumAddress = `http://ondemand.saucelabs.com:80/wd/hub`; // desktop browser tests
config.seleniumAddress = `https://us1.appium.testobject.com/wd/hub`; // device browser tests

// This one works
config.multiCapabilities = [
    {
        testobject_api_key: config.sauce.apiKey,
        platformName: 'Android',
        platformVersion: '7',
        phoneOnly: 'true',
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 3,
        appiumVersion: '1.10.1',
        name: 'android-tests',
        username: config.sauce.username,
        accessKey: config.sauce.accessKey
    }
];

exports.config = config;
