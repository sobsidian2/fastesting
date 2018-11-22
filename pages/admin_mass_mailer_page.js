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
        alert.getText().then(function (value) {
            if(value === mailObj.questions.school){
                console.log('school alert : '+value);
                console.log('school answer : '+mailObj.answers.school);
                alert.sendKeys(mailObj.answers.school);
            }else if(value === mailObj.questions.pet){
                console.log('pet alert : '+value);
                console.log('pet answer : '+mailObj.answers.pet);
                alert.sendKeys(mailObj.answers.pet);
            }else if(value === mailObj.questions.love){
                console.log('love alert : '+value);
                console.log('love answer : '+mailObj.answers.love);
                alert.sendKeys(mailObj.answers.love);
            }else if(value === mailObj.questions.movie){
                console.log('movie alert : '+value);
                console.log('movie answer : '+mailObj.answers.movie);
                alert.sendKeys(mailObj.answers.movie);
            }else if(value === mailObj.questions.auto){
                console.log('auto alert : '+value);
                console.log('auto answer : '+mailObj.answers.auto);
                alert.sendKeys(mailObj.answers.auto);
            }
        });

        alert.accept();
        basePage.waitForPresent(this.nextButton);
        basePage.waitForClickable(this.nextButton);
        basePage.waitForVisible(this.nextButton);

        browser.sleep(3000);
        this.nextButton.click();
        basePage.waitForPresent(this.pgstatus);
        browser.sleep(3000);
    };


};
MassMailerPage.prototype = Object.create({},{
    massMailerPageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Mass Mailer"));}},

    createNewMassMailLink: { get: function () { return element(by.linkText('Create New Mass Mail'));}},
    toField: { value: function (value) { return element(by.cssContainingText('#to option', value));}},
    subjectField: { get: function () { return element(by.id('subject'));}},
    sendMailButton: { get: function () { return element(by.name('send'));}},
    nextButton: { get: function () { return element(by.css('input[value=" Next > "]'));}},
    pgstatus: { get: function () { return element(by.id('pgstatus'));}}
});
module.exports = new MassMailerPage();

