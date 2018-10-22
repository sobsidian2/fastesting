// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var EventsListingPage = function() {

    this.waitForEventDetailPage = function () {
        basePage.waitForPresent(this.eventsDetailPageTitle);
    };
    this.waitForPerformanceTable = function () {
        basePage.waitForPresent(this.rowItems);
    };
    this.isEventDetailPageTitleCorrect = function () {
        return this.eventsDetailPageTitle.isPresent();
    };

    this.clickEditEvent = function () {
        this.editEventButton.click();
    };

    this.clickEditImage = function () {
        this.editImageButton.click();
    };

    this.clickAddPerformance = function () {
        this.addPerformanceButton.click();
    };

    this.deleteEvent = function () {
        this.deleteButton.click();
        this.deleteYes.click();
        this.saveButton.click();
    };

    this.isEventPerformancePresent = function () {
      return this.rowItems.get(1).isPresent();
    };
    this.clickEditPerformanceButtonFromList = function () {
        this.rowItems.get(1).all(by.tagName('td')).then(function (cols) {
            cols[7].all(by.tagName('a')).then(function (action) {
                action[0].click();
            });
        });
    };

    this.deleteEventPerformanceFromList = function () {
        this.rowItems.get(1).all(by.tagName('td')).then(function (cols) {
            cols[7].all(by.tagName('a')).then(function (action) {
                action[1].click();
            });
        });
        this.deletePerformanceYes.click();
        this.saveButton.click();
    };

};
EventsListingPage.prototype = Object.create({},{
    eventsDetailPageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Event Details"));}},

    editImageButton: { get: function(){ return element.all(by.linkText('Edit Image'));}},
    editEventButton: { get: function () { return element(by.linkText('Edit Event'));}},
    deleteButton: { get: function () { return element(by.linkText('Delete'));}},
    addPerformanceButton: { get: function () { return element(by.linkText('Add A Performance'));}},

    deleteYes: { get: function () { return element.all(by.name('del_event')).get(0);}},
    deletePerformanceYes: { get: function () { return element.all(by.name('del_perf')).get(0);}},
    saveButton: { get: function () { return element(by.name('submit'));}},

    rowItems: { get: function(){ return element.all(by.tagName('.adminTable tr'));}},

});
// HomePage.prototype = basePage; // extend basePage...
module.exports = new EventsListingPage();

