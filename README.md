To run these examples you would need to first install node 8.11.2 and yarn 1.13.0.

Install the required node_modules by running `yarn`. Then update the ' TO BE SET ' values in protractor.conf.js (sauce user key and api key) and then see:

1.	A working android example run via `yarn smoke:saucelabs:android quarterly_test`
2.	The problematic iOS example that only differs by the multiCapabilities set for iOS. It can be run via `yarn smoke:saucelabs:ios quarterly_test`.

Looking in the Appium logs in Sauce Labs I can see a session is being created and our website is loaded, but once we start trying to make assertions on the contents of the site the connection times out.

The only thing I have found in the logs is that iOS Appium in Sauce Labs seems to have an issue with the `allScriptsTimeout: 123456` value we set in the protractor config. Other people have this issue too (https://github.com/angular/protractor/issues/4869) but as there is not option to disable it.  If I go into the node_modules folder and remove the setting of that value from the actual protractor code (just to see if I can make progress with this issue) I still get timeouts with slightly different message from Sauce Labs.
