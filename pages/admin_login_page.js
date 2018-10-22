browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');


var AdminLoginPage = function() {

    this.loginAs = function(userObj) {
        this.login(userObj.city, userObj.username, userObj.password);
    };

    this.login = function(city, user, pass) {
        this.selectCity(city);
        basePage.waitForVisible(this.userInput);
        basePage.waitForVisible(this.passInput);
        basePage.waitForVisible(this.loginButton);

        console.log('enter username');
        this.userInput.clear();
        this.userInput.sendKeys(user);
        console.log('enter password');
        this.passInput.clear();
        this.passInput.sendKeys(pass);
        console.log('click login button');
        this.loginButton.click();
    };

    this.selectCity = function (city) {
        basePage.waitForVisible(this.selectCityOption(city));
        this.selectCityOption(city).click();
    };

};
AdminLoginPage.prototype = Object.create({},{
    selectCityOption: { value: function(option){ return element(by.cssContainingText('#citylist option', option)); }},
    userInput: { get: function(){ return element(by.name('username'));}},
    passInput: { get: function(){ return element(by.name('password'));}},
    loginButton: { get: function(){ return element(by.name('submit'));}},
});

// LoginAdminPage.prototype = basePage; // extend basePage...
module.exports = new AdminLoginPage();