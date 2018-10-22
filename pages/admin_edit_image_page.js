// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var EditImagePage = function() {

    this.waitForEditImagePage = function () {
        basePage.waitForPresent(this.eventsEditImagePageTitle)
    };
    this.isEditImagePageTitleCorrect = function () {
        return this.eventsEditImagePageTitle.isPresent();
    };

    this.uploadEeventImage = function (fileToUpload) {
        var absolutePath = path.resolve(__dirname, fileToUpload);
        this.uploadImage.sendKeys(absolutePath);
        this.saveButton.click();
    };


};
EditImagePage.prototype = Object.create({},{
    eventsEditImagePageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Edit Event Image"));}},

    uploadImage: { get: function () { return element.all(by.id('upload_file'));}},
    saveButton: { get: function () { return element.all(by.id('save_btn'));}}

});
module.exports = new EditImagePage();

