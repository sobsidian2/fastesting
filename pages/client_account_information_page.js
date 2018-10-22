// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var ClientAccountInformationPage = function() {

    this.renewUpgradeProcess = function (upgradeObj) {
        console.log('click account renew button');
        basePage.waitForPresent(this.renewUpgradeButton);
        this.renewUpgradeButton.click();

        basePage.waitForPresent(this.addressField);
        this.addressField.clear();
        this.addressField.sendKeys(upgradeObj.address);

        this.cityField.clear();
        this.cityField.sendKeys(upgradeObj.city);

        this.selectState(upgradeObj.state).click();

        this.zipField.clear();
        this.zipField.sendKeys(upgradeObj.zip);

        this.creditCardNameField.clear();
        this.creditCardNameField.sendKeys(upgradeObj.creditCardName);

        this.creditCardNumberField.clear();
        this.creditCardNumberField.sendKeys(upgradeObj.creditCardNumber);

        this.ccvField.clear();
        this.ccvField.sendKeys(upgradeObj.ccv);

        this.expiryMonth(upgradeObj.expiryMonth).click();
        this.expiryYear(upgradeObj.expiryYear).click();

        this.purchaseButton.click();
    };

};
ClientAccountInformationPage.prototype = Object.create({},{
    renewUpgradeButton: { get: function(){ return element(by.css('.glyphicon.glyphicon-repeat'));}},
    addressField: { get: function(){ return element(by.id('baddress'));}},
    cityField: { get: function(){ return element(by.id('bcity'));}},
    selectState: { value: function(value){ return element(by.cssContainingText('#bstate option',value));}},
    zipField: { get: function(){ return element(by.id('bzip'));}},
    creditCardNameField: { get: function(){ return element(by.id('name'));}},
    creditCardNumberField: { get: function(){ return element(by.id('credit_card'));}},
    ccvField: { get: function(){ return element(by.id('ccv'));}},
    expiryMonth: { value: function(value){ return element(by.cssContainingText('[name="exprm"] option',value));}},
    expiryYear: { value: function(value){ return element(by.cssContainingText('#expry option',value));}},
    purchaseButton: { get: function(){ return element(by.buttonText('Purchase'));}},
});
module.exports = new ClientAccountInformationPage();

