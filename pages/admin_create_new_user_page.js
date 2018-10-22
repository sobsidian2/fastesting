// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var CreateEditUserPage = function() {

    /*this.clickCreateNewUser = function () {
        basePage.mouseHover(this.usersTab);
        console.log('click create new user link');
        basePage.waitForVisible(this.newUserLink);
        this.newUserLink.click();
    };*/

    this.waitForCreatedUserDetailPage = function () {
        basePage.waitForPresent(this.userCreatePageTitle);
    };

    this.createEditUser = function (userObj) {
        userObj.lastName = basePage.randomText(10);
        console.log('enter first name: '+userObj.firstName);
        this.firstName.clear();
        this.firstName.sendKeys(userObj.firstName);

        console.log('enter last name: '+userObj.lastName);
        this.lastName.clear();
        this.lastName.sendKeys(userObj.lastName);

        console.log('enter email: '+userObj.email);
        this.email.clear();
        this.email.sendKeys(userObj.email);

        console.log('enter address: '+userObj.address);
        this.address.clear();
        this.address.sendKeys(userObj.address);

        console.log('enter city: '+userObj.city);
        this.city.clear();
        this.city.sendKeys(userObj.city);

        console.log('enter zip: '+userObj.zip);
        this.zip.clear();
        this.zip.sendKeys(userObj.zip);

        console.log('enter home phone: '+userObj.homePhone);
        this.homePhone.clear();
        this.homePhone.sendKeys(userObj.homePhone);

        console.log('enter cellphone: '+userObj.cellPhone);
        this.cellPhone.clear();
        this.cellPhone.sendKeys(userObj.cellPhone);

        console.log('select state: '+userObj.state);
        this.state(userObj.state).click();

        console.log('set is active: '+userObj.isActive);
        this.isActive(userObj.isActive).click();

        console.log('set is admin: '+userObj.isAdmin);
        this.isAdmin(userObj.isAdmin).click();

        console.log('set membership type: '+userObj.membershipType);
        this.membershipType(userObj.membershipType).click();

        console.log('set is paid: '+userObj.isPaid);
        this.isPaid(userObj.isPaid).click();

        this.saveButton.click();

        return userObj;
    };

    this.isCreateUserPageTitleCorrect = function () {
        return this.createUserPageTitle.isPresent();
    };
    this.isCreatedUserPageTitleCorrect = function () {
        return this.userCreatePageTitle.isPresent();
    };


};
CreateEditUserPage.prototype = Object.create({},{
    firstName: { get: function(){ return element(by.name('firstname'));}},
    lastName: { get: function(){ return element(by.name('lastname'));}},
    email: { get: function(){ return element(by.name('email'));}},
    address: { get: function(){ return element(by.name('address'));}},
    city: { get: function(){ return element(by.name('city'));}},
    zip: { get: function(){ return element(by.name('zip'));}},
    homePhone: { get: function(){ return element(by.name('hp'));}},
    cellPhone: { get: function(){ return element(by.name('cp'));}},

    isActive: { value: function(value){ return element(by.cssContainingText('[name="isActive"] option',value));}},
    isAdmin: { value: function(value){ return element(by.cssContainingText('[name="isAdmin"] option',value));}},
    membershipType: { value: function(value){ return element(by.cssContainingText('[name="mem"] option',value));}},
    isPaid: { value: function(value){ return element(by.cssContainingText('[name="isPaid"] option',value));}},
    state: { value: function(value){ return element(by.cssContainingText('[name="state"] option',value));}},
    saveButton: { get: function(){ return element(by.name('submit'));}},

    createUserPageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Create new User"));}},
    userCreatePageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Detailed Information"));}},
});
// HomePage.prototype = basePage; // extend basePage...
module.exports = new CreateEditUserPage();

