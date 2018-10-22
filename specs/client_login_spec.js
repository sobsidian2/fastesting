/**
 * Login related test scenarios are covered...
 */
var basedPage = require('../pages/base_page');
var clientLoginPage = require('../pages/client_login_page');
var clientHomePage = require('../pages/client_home_page');
var userData = require('../data/user_data');

describe ('Client Login Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.client);

    });

    it('Login With Valid Credentials', function() {
        // clientHomePage.navigateToLoginPage();
        clientLoginPage.loginAs(userData.loginCredentials.client);
        console.log('verify user is logged in');
        expect(clientHomePage.isLogoutButtonPresent()).toBe(true, 'logout button did not appear on home page');
    });

});