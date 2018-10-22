// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var EventsListingPage = function() {

    this.isEventPresent = function (event) {
        return this.rowElement(event).isPresent();
    };
    this.isEventListingPageTitleCorrect = function () {
        return this.eventsListingPageTitle.isPresent();
    };

    this.clickEventFromListing = function (event) {
        this.rowElement(event).click();
    };

    this.clickEditUserButtonFromList = function () {
        this.rowItems.get(1).all(by.tagName('td a')).then(function (cols) {
            cols[0].click();
        });
    };

};
EventsListingPage.prototype = Object.create({},{
    eventsListingPageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Events"));}},

    rowItems: { get: function(){ return element.all(by.tagName('.adminTable tr'));}},
    deleteButton: { get: function () { return element(by.name('action'));}},
    rowElement: { value: function (event) { return element(by.cssContainingText('.adminTable td',event));}}

});
// HomePage.prototype = basePage; // extend basePage...
module.exports = new EventsListingPage();

