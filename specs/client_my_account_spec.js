/**
 * Login related test scenarios are covered...
 */
var basedPage = require('../pages/base_page');
var clientLoginPage = require('../pages/client_login_page');
var clientHomePage = require('../pages/client_home_page');
var clientAccountPage = require('../pages/client_account_information_page');
var userData = require('../data/user_data');

describe ('Client My Accounts Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.client);
        clientLoginPage.loginAs(userData.loginCredentials.client);
    });

    it('Renew Upgrade Process', function() {
        clientHomePage.navigateToMyAccount();
        clientAccountPage.renewUpgradeProcess(userData.upgradeProcess);

        browser.sleep(30000);
    });

});