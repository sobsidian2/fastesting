/**
 * Login related test scenarios are covered...
 */
var basedPage = require('../pages/base_page');
var adminLoginPage = require('../pages/admin_login_page');
var adminHomePage = require('../pages/admin_home_page');
var userData = require('../data/user_data');

describe ('Admin Login Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.admin);

    });

    it('Admin Login With Valid Credentials', function() {
        adminLoginPage.loginAs(userData.loginCredentials.admin);
        console.log('verify user is logged in');
        expect(adminHomePage.isLogoutButtonPresent()).toBe(true, 'logout button did not appear on home page');
    });

});