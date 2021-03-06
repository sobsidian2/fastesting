//var HtmlReporter1 = require('protractor-angular-screenshot-reporter');
var HtmlReporter = require('protractor-beautiful-reporter');
var path = require('path');
var downloadsPath = path.resolve(__dirname, './downloads');

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
        'specs/admin_login_spec.js',
        'specs/admin_users_spec.js',
        'specs/admin_events_spec.js',
        'specs/admin_tools_spec.js',
        'specs/client_login_spec.js',
        'specs/client_login_spec.js',
        'specs/client_events_spec.js',
        'specs/client_my_account_spec.js',
    ],

    suites:{
        ClientLogin: 'specs/client_login_spec.js',
        ClientEvents: 'specs/client_events_spec.js',
        ClientMyAccount: 'specs/client_my_account_spec.js',
        AdminLogin: 'specs/admin_login_spec.js',
        AdminUsers: 'specs/admin_users_spec.js',
        AdminEvents: 'specs/admin_events_spec.js',
        AdminMassMail:'specs/admin_tools_spec.js',
        ClientSignUp:'specs/client_signup_spec.js'
    },

    baseUrl: 'https://www.fillaseatlasvegas.com/',  //test server baseURl
    baseUrlAdmin: "https://secure2.fillaseat.com/lasvegas/a/dmin/",  //test server baseURl admin website

    params: {
        login: {
            username: 'demo@fillaseat.com',
            password: 'demo1234'
        },
        loginAdmin: {
            username: 'demoadmin@fillaseat.com',
            password: 'demo1234'
        }
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
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: './reports/screenshots',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true
        }).getJasmine2Reporter());
    },


    capabilities: {
        browserName: 'chrome',
        //shardTestFiles: true,
        //maxInstances: 2,
        chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--window-size=1366,768',
                //'--headless',
                // '--disable-gpu',
                '--disable-infobars',
                '--disable-extensions',
                '--disable-web-security',
                // '--remote-debugging-port=9222',
                '--ignore-ssl-errors=true',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
            prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                'credentials_enable_service': false,
                'password_manager_enabled': false,
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': downloadsPath
                }
            }
        }
    },
    // restartBrowserBetweenTests: false,

    jasmineNodeOpts: {
        showColors: true,
        displayStacktrace: true,
        includeStackTrace: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: function () {},
        getPageTimeout:1800000, //set default time out for page load to 3 min
        defaultTimeoutInterval: 360000 //set to 6 min default time out
    }
};
