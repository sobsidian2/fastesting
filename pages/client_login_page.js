browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var ClientLoginPage = function() {

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
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

    this.clickSignup = function () {
        basePage.waitForClickable(this.signUpButton);
        console.log('click signup button');
        this.signUpButton.click();
    };

};
ClientLoginPage.prototype = Object.create({},{
    userInput: { get: function(){ return element(by.name('username'));}},
    passInput: { get: function(){ return element(by.name('password'));}},
    loginButton: { get: function(){ return element(by.buttonText('Login'));}},
    signUpButton: { get: function(){ return element(by.linkText('Or Sign Up'));}},
});
// LoginPage.prototype = basePage; // extend basePage...
module.exports = new ClientLoginPage();