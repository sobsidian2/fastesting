browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var LoginPage = function() {
    this.userInput = element(by.name('username'));
    this.passInput = element(by.name('password'));
    this.loginButton = element(by.buttonText('Login'));
    this.errorMessage = element(by.css('.margin-left-12.error>strong'));

    this.loginAs = function(userObj) {
        this.login(userObj.username, userObj.password);
    };

    this.login = function(user, pass) {
        browser.wait(basePage.isVisible(this.userInput), 5000, 'username field appear');
        browser.wait(basePage.isVisible(this.passInput), 5000, 'password field appear');
        browser.wait(basePage.isVisible(this.loginButton), 5000, 'loginButton appear');
        console.log('enter username');
        this.userInput.clear();
        this.userInput.sendKeys(user);
        console.log('enter password');
        this.passInput.clear();
        this.passInput.sendKeys(pass);
        console.log('click login button to login to app');
        this.loginButton.click();
    };

    this.showErrorMessage = function () {
        browser.wait(basePage.isVisible(this.errorMessage), 5000, 'Time out before error message appear');
      return this.errorMessage.getText();
    };

};
LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();