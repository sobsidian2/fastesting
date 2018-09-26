// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');
var commonPage = require('../pages/common_page');

var HomePage = function() {
    this.loginButton = element(by.linkText('login'));
    this.logoutButton = element(by.linkText('Logout'));
    this.loadingIcon = element(by.cssContainingText('td.dataTables_empty', 'Loading'));

    this.navigateToLoginPage = function () {
        console.log('click login button to go to login page');
        browser.wait(basePage.isClickable(this.loginButton), 3000, 'login button did not appear');
        this.loginButton.click();
    };

    this.logout = function () {
        this.userDropdownTottle.click();
        browser.wait(basePage.isClickable(this.logoutButton), 3000, 'logout button appear');
        this.logoutButton.click();
    };

    this.isLogoutButtonPresent = function () {
        return this.logoutButton.isPresent();
    };
};
HomePage.prototype = basePage; // extend basePage...
module.exports = new HomePage();

