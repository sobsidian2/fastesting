// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var ClientEventDetailPage = function() {

    this.isEventTitle = function (eventTitle) {
        return this.eventTitle(eventTitle).isPresent();
    };

    this.reserveEvent = function () {
      basePage.waitForPresent(this.reserveEventButton);
        basePage.waitForVisible(this.reserveEventButton);
        this.reserveEventButton.get(0).click();

        basePage.waitForPresent(this.selectTickets);
        basePage.waitForVisible(this.selectTickets);
        browser.sleep(3000);
        basePage.selectDropdownbyNum(this.selectTickets, 1);

        basePage.waitForPresent(this.confirmButton);
        basePage.waitForVisible(this.confirmButton);
        this.confirmButton.click();

        basePage.waitForPresent(this.reserveButton);
        basePage.waitForVisible(this.reserveButton);
        this.reserveButton.click();

        basePage.waitForNotVisible(this.loadingButton);
        basePage.waitForNoInDom(this.loadingButton);
    };

};
ClientEventDetailPage.prototype = Object.create({},{
    eventTitle: { value: function(value){ return element(by.cssContainingText('h3 strong',value));}},
    reserveEventButton: { get: function(){ return element.all(by.css('.offers'));}},

    selectTickets: { get: function(){ return element(by.name('num_tickets'));}},
    confirmButton: { get: function(){ return element(by.css('.centerEventButton button'));}},
    reserveButton: { get: function(){ return element(by.css('#reservebutton button'));}},
    //loading
    loadingButton: { get: function(){ return element(by.id('loading'));}},
});
module.exports = new ClientEventDetailPage();

