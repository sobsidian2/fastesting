exports.config = {
    /**
     *  Uncomment ONE of the following to connect to: seleniumServerJar OR directConnect. Protractor
     *  will auto-start selenium if you uncomment the jar, or connect directly to chrome/firefox
     *  if you uncomment directConnect.
     */
    //seleniumServerJar: "node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.3.1.jar",
    directConnect: true,

    // specs: ['specs/*_spec.js'],
    specs: [
        'spec-api/fillaseat_api_spec.js',
    ],

    suites:{
        ApiLogin: 'spec-api/fillaseat_api_spec.js',
    },

    framework: 'jasmine2',
    onPrepare: function(){  //configure junit xml report
        //browser.manage().window().setSize(1024, 700);
        var reporters = require('jasmine-reporters');
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        //jasmine.getEnv().clearReporters();
        jasmine.getEnv().addReporter(new reporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'xmloutput',
            savePath: 'reports',
            //displayStacktrace: 'spec'
        }));

        jasmine.getEnv().addReporter(new SpecReporter({
            spec:{
                displayStacktrace:true
            }
        }));
    },

    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        includeStackTrace: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: function () {},
        // getPageTimeout:1800000, //set default time out for page load to 3 min
        // defaultTimeoutInterval: 360000 //set to 6 min default time out
    }
};
