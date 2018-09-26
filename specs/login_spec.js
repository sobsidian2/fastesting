/**
 * Login related test scenarios are covered...
 */
var basedPage = require('../pages/base_page');
var commonPage = require('../pages/common_page');
var loginPage = require('../pages/login_page');
var homePage = require('../pages/home_page');
var userData = require('../data/user_data');
var username = browser.params.login.username;
var password = browser.params.login.password;

describe ('Login Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.url);

    });

    it('Login With Valid Credentials', function() {
        homePage.navigateToLoginPage();
        loginPage.loginAs(userData.loginCredentials);
        console.log('verify user is logged in');
        expect(homePage.isLogoutButtonPresent()).toBe(true, 'logout button did not appear on home page');
    });

});