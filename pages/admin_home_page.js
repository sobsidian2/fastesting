// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var HomePage = function() {

    this.clickCreateNewUser = function () {
        basePage.mouseHover(this.usersTab);
        console.log('click create new user link');
        basePage.waitForVisible(this.newUserLink);
        this.newUserLink.click();
    };

    this.clickSearchUser = function () {
        basePage.mouseHover(this.usersTab);
        console.log('click search user link');
        basePage.waitForVisible(this.searchUserLink);
        this.searchUserLink.click();
    };

    this.clickViewAllUser = function () {
        basePage.mouseHover(this.usersTab);
        console.log('click view all user link');
        basePage.waitForVisible(this.viewAllUserLink);
        this.viewAllUserLink.click();
    };

    this.clickAddEvent = function () {
        basePage.mouseHover(this.eventsTab);
        console.log('click add event link');
        basePage.waitForVisible(this.addEventLink);
        this.addEventLink.click();
    };

    this.clickViewEvent = function () {
        basePage.mouseHover(this.eventsTab);
        console.log('click view event link');
        basePage.waitForVisible(this.viewEventLink);
        this.viewEventLink.click();
    };

    this.clickMassEmail = function () {
        basePage.mouseHover(this.toolsTab);
        console.log('click mass email link');
        basePage.waitForVisible(this.massEmailLink);
        this.massEmailLink.click();
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
HomePage.prototype = Object.create({},{
    logoutButton: { get: function(){ return element(by.cssContainingText('#event','Logout'));}},
    passInput: { get: function(){ return element(by.name('password'));}},
    loginButton: { get: function(){ return element(by.name('submit'));}},

    usersTab: { get: function(){ return element(by.cssContainingText('#nav a','Users'));}},
    eventsTab: { get: function(){ return element(by.cssContainingText('#nav a','Events'));}},
    toolsTab: { get: function(){ return element(by.cssContainingText('#nav a','Tools'));}},

    newUserLink: { get: function(){ return element(by.cssContainingText('#nav a','New'));}},
    searchUserLink: { get: function(){ return element(by.cssContainingText('#nav a','Search'));}},
    viewAllUserLink: { get: function(){ return element(by.cssContainingText('#nav a','View All'));}},
    addEventLink: { get: function(){ return element(by.cssContainingText('#nav a','Add'));}},
    // viewEventLink: { get: function(){ return element(by.cssContainingText('li a','Add')).element(by.xpath('../..')).element(by.cssContainingText('a','View'));}},
    viewEventLink: { get: function(){ return element(by.xpath('.//*[.="View"]'));}},//.element(by.xpath('../..')).element(by.css('a'));}},
    massEmailLink: { get: function(){ return element(by.cssContainingText('#nav a','Mass Mail'));}},

    firstName: { get: function(){ return element(by.name('firstname'));}}
});
// HomePage.prototype = basePage; // extend basePage...
module.exports = new HomePage();

