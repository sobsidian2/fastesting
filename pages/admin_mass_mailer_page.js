// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var MassMailerPage = function() {

    this.waitForMassMailerPage = function () {
        basePage.waitForPresent(this.massMailerPageTitle)
    };
    this.isMassMailerPageTitleCorrect = function () {
        return this.massMailerPageTitle.isPresent();
    };

    this.sendMassEmail = function (mailObj) {
        this.createNewMassMailLink.click();
        basePage.waitForPresent(this.subjectField);
        this.toField(mailObj.to).click();
        this.subjectField.clear();
        this.subjectField.sendKeys(mailObj.subject);
        this.sendMailButton.click();

        var EC = protractor.ExpectedConditions;
        browser.wait(EC.alertIsPresent(), 5000);
        var alert = browser.switchTo().alert();
        alert.sendKeys(mailObj.alertEmail);
        alert.accept();
    };


};
MassMailerPage.prototype = Object.create({},{
    massMailerPageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Mass Mailer"));}},

    createNewMassMailLink: { get: function () { return element(by.linkText('Create New Mass Mail'));}},
    toField: { value: function (value) { return element(by.cssContainingText('#to option', value));}},
    subjectField: { get: function () { return element(by.id('subject'));}},
    sendMailButton: { get: function () { return element(by.name('send'));}},

});
module.exports = new MassMailerPage();

