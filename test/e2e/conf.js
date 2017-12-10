exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*-spec.js'],
    //baseUrl: 'http://clofushost',//trial.clofus.com
    baseUrl: 'http://clofushost',//trial.clofus.com
    directConnect: false,
    firefoxPath: '/usr/local/bin/firefox',
    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000
    }
};


/*
// An example configuration file.
exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    directConnect: true,
    chromeDriver: '../../node_modules/protractor/selenium/chromedriver',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['*-spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
*/
