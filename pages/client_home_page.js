// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var ClientHomePage = function() {

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

    this.navigateToLocateAnEvent = function () {
      basePage.waitForPresent(this.locateAnEvent);
      this.locateAnEvent.click();
    };
    this.navigateToMyAccount = function () {
        basePage.waitForPresent(this.myAccount);
        this.myAccount.click();
    };

    this.viewEvent = function (eventObj) {
        basePage.waitForPresent(this.selectEvent(eventObj));
        basePage.waitForVisible(this.selectEvent(eventObj));
        basePage.waitForNotVisible(this.loadingEvent);
        basePage.waitForNoInDom(this.loadingEvent);
        browser.sleep(3000);
        this.selectEvent(eventObj.name).click();
    };
};
ClientHomePage.prototype = Object.create({},{
    loginButton: { get: function(){ return element(by.linkText('login'));}},
    logoutButton: { get: function(){ return element(by.linkText('Logout'));}},

    locateAnEvent:{ get: function(){ return element(by.linkText('Locate an Event'));}},
    myAccount:{ get: function(){ return element(by.linkText('My Account'));}},

    selectEvent: { value: function(value){ return element.all(by.cssContainingText('.selector_select option', value));}},
    loadingEvent:{ get: function(){ return element(by.id('loading_screen'));}},

});
module.exports = new ClientHomePage();

