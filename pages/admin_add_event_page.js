// browser.ignoreSynchronization = true;
var path = require('path');
var basePage = require('./base_page.js');

var AddEventPage = function() {

    this.addEvent = function (eventObj) {
        eventObj.name = eventObj.name+basePage.randomText(10);
        console.log('enter event name: '+eventObj.name);
        this.nameField.clear();
        this.nameField.sendKeys(eventObj.name);

        console.log('enter event description: '+eventObj.description);
        this.descriptionField.clear();
        this.descriptionField.sendKeys(eventObj.description);

        console.log('enter event additional info: '+eventObj.additionalInfo);
        this.addInfoField.clear();
        this.addInfoField.sendKeys(eventObj.additionalInfo);

        console.log('enter event age restriction: '+eventObj.ageRestriction);
        this.ageRestrictionField.clear();
        this.ageRestrictionField.sendKeys(eventObj.ageRestriction);

        console.log('enter event dress code: '+eventObj.dressCode);
        this.dressCodeField.clear();
        this.dressCodeField.sendKeys(eventObj.dressCode);

        console.log('enter event price: '+eventObj.price);
        this.priceField.clear();
        this.priceField.sendKeys(eventObj.price);

        console.log('set is event active: '+eventObj.isActive);
        this.isActive.get(eventObj.isActive).click();

        console.log('set is event free: '+eventObj.isActive);
        this.isFreeShow.get(eventObj.freeShow).click();

        console.log('enter event ticket value: '+eventObj.ticketValue);
        this.ticketValueField.clear();
        this.ticketValueField.sendKeys(eventObj.ticketValue);

        console.log('enter event show limit: '+eventObj.showLimit);
        this.showLimitField.clear();
        this.showLimitField.sendKeys(eventObj.showLimit);

        console.log('set show limit to be displayed or not');
        this.showLimitDisplay.click();

        console.log('enter event max reservation limit: '+eventObj.maxReservationLimit);
        this.maxReservationLimitField.clear();
        this.maxReservationLimitField.sendKeys(eventObj.maxReservationLimit);

        // console.log('set notify zero attention');
        // this.notifyZeroAttendance.click();

        // console.log('set disable reservation');
        // this.disableReservations.click();

        console.log('enter event venue: '+eventObj.venue);
        this.venueField.clear();
        this.venueField.sendKeys(eventObj.venue);

        console.log('enter event venue address: '+eventObj.venueAddress);
        this.venueAddressField.clear();
        this.venueAddressField.sendKeys(eventObj.venueAddress);

        console.log('enter event url: '+eventObj.venueUrl);
        this.venueUrlField.clear();
        this.venueUrlField.sendKeys(eventObj.venueUrl);

        console.log('enter event venue email: '+eventObj.venueEmail);
        this.venueEmailField.clear();
        this.venueEmailField.sendKeys(eventObj.venueEmail);

        console.log('enter event contact name: '+eventObj.contactName);
        this.contactNameField.clear();
        this.contactNameField.sendKeys(eventObj.contactName);

        console.log('enter event contact phone: '+eventObj.contactPhone.phone1+eventObj.contactPhone.phone2+eventObj.contactPhone.phone3);
        this.contactPhone1Field.clear();
        this.contactPhone1Field.sendKeys(eventObj.contactPhone.phone1);

        this.contactPhone2Field.clear();
        this.contactPhone2Field.sendKeys(eventObj.contactPhone.phone2);

        this.contactPhone3Field.clear();
        this.contactPhone3Field.sendKeys(eventObj.contactPhone.phone3);

        console.log('upload event image');
        var fileToUpload = eventObj.imagePath;
        var absolutePath = path.resolve(__dirname, fileToUpload);
        this.uploadImage.sendKeys(absolutePath);

        console.log('enter event youtube url: '+eventObj.youtubeUrl);
        this.youtubeUrlField.clear();
        this.youtubeUrlField.sendKeys(eventObj.youtubeUrl);

        this.saveButton.click();
        return eventObj;
    };

    this.editEvent = function (eventObj) {
        eventObj.name = eventObj.name+basePage.randomText(10);
        console.log('enter event name: '+eventObj.name);
        this.nameField.clear();
        this.nameField.sendKeys(eventObj.name);

        console.log('enter event description: '+eventObj.description);
        this.descriptionField.clear();
        this.descriptionField.sendKeys(eventObj.description);

        console.log('enter event additional info: '+eventObj.additionalInfo);
        this.addInfoField.clear();
        this.addInfoField.sendKeys(eventObj.additionalInfo);

        console.log('enter event age restriction: '+eventObj.ageRestriction);
        this.ageRestrictionField.clear();
        this.ageRestrictionField.sendKeys(eventObj.ageRestriction);

        console.log('enter event dress code: '+eventObj.dressCode);
        this.dressCodeField.clear();
        this.dressCodeField.sendKeys(eventObj.dressCode);

        console.log('enter event price: '+eventObj.price);
        this.priceField.clear();
        this.priceField.sendKeys(eventObj.price);

        console.log('set is event active: '+eventObj.isActive);
        this.isActive.get(eventObj.isActive).click();

        console.log('set is event free: '+eventObj.isActive);
        this.isFreeShow.get(eventObj.freeShow).click();

        console.log('enter event ticket value: '+eventObj.ticketValue);
        this.ticketValueField.clear();
        this.ticketValueField.sendKeys(eventObj.ticketValue);

        console.log('enter event show limit: '+eventObj.showLimit);
        this.showLimitField.clear();
        this.showLimitField.sendKeys(eventObj.showLimit);

        console.log('set show limit to be displayed or not');
        this.showLimitDisplay.click();

        console.log('enter event max reservation limit: '+eventObj.maxReservationLimit);
        this.maxReservationLimitField.clear();
        this.maxReservationLimitField.sendKeys(eventObj.maxReservationLimit);

        // console.log('set notify zero attention');
        // this.notifyZeroAttendance.click();

        // console.log('set disable reservation');
        // this.disableReservations.click();

        console.log('enter event venue: '+eventObj.venue);
        this.venueField.clear();
        this.venueField.sendKeys(eventObj.venue);

        console.log('enter event venue address: '+eventObj.venueAddress);
        this.venueAddressField.clear();
        this.venueAddressField.sendKeys(eventObj.venueAddress);

        console.log('enter event url: '+eventObj.venueUrl);
        this.venueUrlField.clear();
        this.venueUrlField.sendKeys(eventObj.venueUrl);

        console.log('enter event venue email: '+eventObj.venueEmail);
        this.venueEmailField.clear();
        this.venueEmailField.sendKeys(eventObj.venueEmail);

        console.log('enter event contact name: '+eventObj.contactName);
        this.contactNameField.clear();
        this.contactNameField.sendKeys(eventObj.contactName);

        console.log('enter event contact phone: '+eventObj.contactPhone.phone1+eventObj.contactPhone.phone2+eventObj.contactPhone.phone3);
        this.contactPhone1Field.clear();
        this.contactPhone1Field.sendKeys(eventObj.contactPhone.phone1);

        this.contactPhone2Field.clear();
        this.contactPhone2Field.sendKeys(eventObj.contactPhone.phone2);

        this.contactPhone3Field.clear();
        this.contactPhone3Field.sendKeys(eventObj.contactPhone.phone3);

        // console.log('upload event image');
        // var fileToUpload = eventObj.imagePath;
        // var absolutePath = path.resolve(__dirname, fileToUpload);
        // this.uploadImage.sendKeys(absolutePath);

        console.log('enter event youtube url: '+eventObj.youtubeUrl);
        this.youtubeUrlField.clear();
        this.youtubeUrlField.sendKeys(eventObj.youtubeUrl);

        this.saveButton.click();
        return eventObj;
    };

    this.isAddEventPageTitleCorrect = function () {
        return this.addEventPageTitle.isPresent();
    };
    this.isCreatedUserPageTitleCorrect = function () {
        return this.userCreatePageTitle.isPresent();
    };


};
AddEventPage.prototype = Object.create({},{
    nameField: { get: function(){ return element(by.name('shortDesc'));}},
    descriptionField: { get: function(){ return element(by.name('longDesc'));}},
    addInfoField: { get: function(){ return element(by.name('disclaimer'));}},
    ageRestrictionField: { get: function(){ return element(by.name('age_restrictions'));}},
    dressCodeField: { get: function(){ return element(by.name('dress_code'));}},
    isActive: { get: function(){ return element.all(by.name('isActive'));}},
    isFreeShow: { get: function(){ return element.all(by.name('free'));}},
    priceField: { get: function(){ return element(by.name('price'));}},
    ticketValueField: { get: function(){ return element(by.name('ticket_value'));}},
    showLimitField: { get: function(){ return element(by.name('showlimit'));}},
    showLimitDisplay: { get: function(){ return element(by.name('showLimitDisplay'));}},
    maxReservationLimitField: { get: function(){ return element(by.name('maxRes'));}},
    notifyZeroAttendance: { get: function(){ return element(by.name('NotifyZeroAttendance'));}},
    disableReservations: { get: function(){ return element(by.name('disableReservations'));}},
    venueField: { get: function(){ return element(by.name('venue'));}},
    venueAddressField: { get: function(){ return element(by.name('venue_address'));}},
    venueUrlField: { get: function(){ return element(by.name('url'));}},
    venueEmailField: { get: function(){ return element(by.name('email'));}},
    contactNameField: { get: function(){ return element(by.name('contact_person'));}},
    contactPhone1Field: { get: function(){ return element(by.name('contact_phone_area'));}},
    contactPhone2Field: { get: function(){ return element(by.name('contact_phone_pre'));}},
    contactPhone3Field: { get: function(){ return element(by.name('contact_phone_suf'));}},
    uploadImage: { get: function(){ return element(by.id('upload_file'));}},
    youtubeUrlField: { get: function(){ return element(by.name('youtube'));}},

    saveButton: { get: function(){ return element(by.name('submit'));}},

    addEventPageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Add An Event"));}},
});
// HomePage.prototype = basePage; // extend basePage...
module.exports = new AddEventPage();

