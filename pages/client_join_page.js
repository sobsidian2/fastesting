browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var ClientJoinPage = function() {

    this.clickJoinFillASeat = function () {
        basePage.waitForClickable(this.joinFillASeatButton);
        expect(this.joinFillASeatButton.isPresent()).toBe(true, 'Join Fillaseat not present');
        console.log('click JoinFillASeatButton button');
        this.joinFillASeatButton.click();
    };

    this.fillPersonalInformation = function (infoObj) {
        infoObj.email = infoObj.email+basePage.randomText(10);

        console.log('enter first name'+ infoObj.firstName);
        basePage.waitForPresent(this.firstNameField);
        this.firstNameField.clear();
        this.firstNameField.sendKeys(infoObj.firstName);

        console.log('enter last name'+ infoObj.lastName);
        this.lastNameField.clear();
        this.lastNameField.sendKeys(infoObj.lastName);

        console.log('enter email'+ infoObj.email);
        this.emailField.clear();
        this.emailField.sendKeys(infoObj.email);

        console.log('enter re enter email'+ infoObj.email);
        this.email2Field.clear();
        this.email2Field.sendKeys(infoObj.email);

        console.log('enter password'+ infoObj.password);
        this.passwordField.clear();
        this.passwordField.sendKeys(infoObj.password);

        console.log('enter re enter password'+ infoObj.password);
        this.password2Field.clear();
        this.password2Field.sendKeys(infoObj.password);

        console.log('enter home phone'+ infoObj.homePhone);
        this.homePhoneField.clear();
        this.homePhoneField.sendKeys(infoObj.homePhone);

        console.log('enter re cell phone'+ infoObj.cellPhone);
        this.cellPhoneField.clear();
        this.cellPhoneField.sendKeys(infoObj.cellPhone);

        console.log('select dob day'+ infoObj.dob.day);
        this.dobDay(infoObj.dob.day).click();

        console.log('select dob month'+ infoObj.dob.month);
        this.dobMonth(infoObj.dob.month).click();

        console.log('select dob year'+ infoObj.dob.year);
        this.dobYear(infoObj.dob.year).click();

        console.log('select hear us'+ infoObj.hearUs);
        this.hearusField(infoObj.hearUs).click();
    };

    this.fillBillingAddress = function (billingObj) {
        console.log('enter billing address '+ billingObj.address);
        this.baddressField.clear();
        this.baddressField.sendKeys(billingObj.address);

        console.log('enter city '+ billingObj.city);
        this.bcityField.clear();
        this.bcityField.sendKeys(billingObj.city);

        console.log('select state '+ billingObj.state);
        this.bstateField(billingObj.state).click();

        console.log('enter zip '+ billingObj.zip);
        this.bzipField.clear();
        this.bzipField.sendKeys(billingObj.zip);
    };

    this.acceptAgree = function () {
        console.log('click agree');
        this.agreeField.click();
    };

    this.selectSubscription = function () {
        console.log('click subscription0Field');
        this.subscription0Field.click();
    };

    this.selectPaymentType = function () {
        console.log('click creditCardOption');
        this.creditCardOption.click();
    };

    this.enterCreditCardInfo = function (creditCardObj) {
        console.log('enter zip '+ creditCardObj.creditCardName);
        this.creditCardNameField.clear();
        this.creditCardNameField.sendKeys(creditCardObj.creditCardName);

        console.log('enter zip '+ creditCardObj.creditCardNumber);
        this.creditCardNumberField.clear();
        this.creditCardNumberField.sendKeys(creditCardObj.creditCardNumber);

        console.log('enter zip '+ creditCardObj.ccv);
        this.creditCardCcv.clear();
        this.creditCardCcv.sendKeys(creditCardObj.ccv);
    };

    this.clickContinue = function () {
        console.log('click continue');
        this.continueButton.click();
    };

    this.clickPurchase = function () {
        console.log('click purchase');
        basePage.waitForPresent(this.purchaseButton);
        this.purchaseButton.click();
    };

};
ClientJoinPage.prototype = Object.create({},{
    joinFillASeatButton: { get: function(){ return element(by.buttonText('Join Fillaseat'));}},
    firstNameField: { get: function(){ return element(by.id('firstname'));}},
    lastNameField: { get: function(){ return element(by.id('lastname'));}},
    emailField: { get: function(){ return element(by.id('email'));}},
    email2Field: { get: function(){ return element(by.id('email2'));}},
    passwordField: { get: function(){ return element(by.id('password'));}},
    password2Field: { get: function(){ return element(by.id('password2'));}},
    homePhoneField: { get: function(){ return element(by.id('home_phone'));}},
    cellPhoneField: { get: function(){ return element(by.id('cell_phone'));}},
    dobDay: { value: function(value){ return element(by.cssContainingText('#bdayd option',value));}},
    dobMonth: { value: function(value){ return element(by.cssContainingText('#bdaym option',value));}},
    dobYear: { value: function(value){ return element(by.cssContainingText('#bdayy option',value));}},
    hearusField: { value: function(value){ return element(by.cssContainingText('#hearus option',value));}},

    baddressField: { get: function(){ return element(by.id('baddress'));}},
    bcityField: { get: function(){ return element(by.id('bcity'));}},
    bstateField: { value: function(value){ return element(by.cssContainingText('#bstate option',value));}},
    bzipField: { get: function(){ return element(by.id('bzip'));}},

    agreeField: { get: function(){ return element(by.id('agree'));}},
    continueButton: { get: function(){ return element(by.buttonText('Continue'));}},

    subscription0Field: { get: function(){ return element(by.id('subscription0'));}},
    creditCardOption: { get: function(){ return element(by.id('pm1'));}},

    creditCardNameField: { get: function(){ return element(by.id('name'));}},
    creditCardNumberField: { get: function(){ return element(by.id('credit_card'));}},
    creditCardCcv: { get: function(){ return element(by.id('ccv'));}},
    purchaseButton: { get: function(){ return element(by.buttonText('Purchase'));}},

});
// LoginPage.prototype = basePage; // extend basePage...
module.exports = new ClientJoinPage();