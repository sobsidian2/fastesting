// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var AddEditPerformancePage = function () {

    this.waitForAddPerformancePage = function () {
        basePage.waitForPresent(this.addPerformancePageTitle)
    };
    this.waitForEditPerformancePage = function () {
        basePage.waitForPresent(this.editPerformancePageTitle)
    };
    this.isEditPerformancePageTitleCorrect = function () {
        return this.editPerformancePageTitle.isPresent();
    };
    this.isAddPerformancePageTitleCorrect = function () {
        return this.addPerformancePageTitle.isPresent();
    };

    this.addUpdatePerformance = function (performanceObj) {
        console.log('select date');
        basePage.selectDropdownbyNum(this.dateDay, performanceObj.date.day);
        basePage.selectDropdownbyNum(this.dateMonth, performanceObj.date.month);
        basePage.selectDropdownbyNum(this.dateYear, performanceObj.date.year);

        console.log('select time');
        basePage.selectDropdownbyNum(this.timeHour, performanceObj.time.hour);
        basePage.selectDropdownbyNum(this.timeMin, performanceObj.time.min);
        basePage.selectDropdownbyNum(this.timePeriod, performanceObj.time.period);

        console.log('set is performance all day');
        this.allday.click();

        console.log('enter ticket pickup '+ performanceObj.pickUp);
        this.ticketPickup.clear();
        this.ticketPickup.sendKeys(performanceObj.pickUp);

        console.log('enter ticket pickup '+performanceObj.totalTickets);
        this.totalTickets.clear();
        this.totalTickets.sendKeys(performanceObj.totalTickets);

        console.log('select is active '+performanceObj.active);
        this.isActive.get(performanceObj.active).click();

        console.log('select is featured '+performanceObj.featured);
        this.isActive.get(performanceObj.featured).click();

        console.log('enter additional infor '+performanceObj.additionalInfo);
        this.additionalInfo.clear();
        this.additionalInfo.sendKeys(performanceObj.additionalInfo);

        console.log('select web start date');
        basePage.selectDropdownbyNum(this.displayStartDateDay, performanceObj.webStartdate.day);
        basePage.selectDropdownbyNum(this.displayStartDateMonth, performanceObj.webStartdate.month);
        basePage.selectDropdownbyNum(this.displayStartDateYear, performanceObj.webStartdate.year);

        console.log('select web removal date');
        basePage.selectDropdownbyNum(this.displayEndDateDay, performanceObj.webEnddate.day);
        basePage.selectDropdownbyNum(this.displayEndDateMonth, performanceObj.webEnddate.month);
        basePage.selectDropdownbyNum(this.displayEndDateYear, performanceObj.webEnddate.year);

        console.log('select web display time');
        basePage.selectDropdownbyNum(this.displayTimeStartHour, performanceObj.webStartTime.hour);
        basePage.selectDropdownbyNum(this.displayTimeStartMin, performanceObj.webStartTime.min);
        basePage.selectDropdownbyNum(this.displayTimeStartPeriod, performanceObj.webStartTime.period);

        console.log('select web remove time');
        basePage.selectDropdownbyNum(this.displayTimeEndHour, performanceObj.WebEndTime.hour);
        basePage.selectDropdownbyNum(this.displayTimeEndMin, performanceObj.WebEndTime.min);
        basePage.selectDropdownbyNum(this.displayTimeEndPeriod, performanceObj.WebEndTime.period);

        this.saveButton.click();
    };


};
AddEditPerformancePage.prototype = Object.create({}, {
    addPerformancePageTitle: { get: function () { return element(by.cssContainingText('div.Title1', "Add A Performance"));}},
    editPerformancePageTitle: { get: function () { return element(by.cssContainingText('div.Title1', "Edit Performance"));}},

    dateMonth: { get: function () { return element(by.id('date_month'));}},
    dateDay: { get: function () { return element(by.id('date_day'));}},
    dateYear: { get: function () { return element(by.id('date_year'));}},

    timeHour: { get: function () { return element(by.id('time_hour'));}},
    timeMin: { get: function () { return element(by.id('time_min')); }},
    timePeriod: {get: function () { return element(by.id('time_period')); }},

    allday: {get: function () { return element(by.id('allday')); }},
    alldayText: { get: function () { return element(by.name('allday_text')); }},
    ticketPickup: {get: function () { return element(by.name('ticket_pickup')); }},
    totalTickets: {get: function () { return element(by.name('total_tickets')); }},

    isActive: { get: function () { return element.all(by.name('isActive'));}},
    isFeatured: { get: function () { return element.all(by.name('featured'));}},
    additionalInfo: { get: function () { return element.all(by.name('additionalinfo')); }},

    displayStartDateDay: {get: function () { return element(by.id('display_start_date_day')); }},
    displayStartDateMonth: { get: function () { return element(by.id('display_start_date_month')); }},
    displayStartDateYear: {get: function () {return element(by.id('display_start_date_year')); }},

    displayEndDateDay: {get: function () { return element(by.id('display_end_date_day')); }},
    displayEndDateMonth: {get: function () { return element(by.id('display_end_date_month')); }},
    displayEndDateYear: {get: function () {return element(by.id('display_end_date_year')); }},

    displayTimeStartHour: {get: function () { return element(by.id('display_time_start_hour')); }},
    displayTimeStartMin: { get: function () { return element(by.id('display_time_start_min')); }},
    displayTimeStartPeriod: { get: function () {return element(by.id('display_time_start_period')); }},

    displayTimeEndHour: { get: function () { return element(by.id('display_time_end_hour')); }},
    displayTimeEndMin: { get: function () {return element(by.id('display_time_end_min')); }},
    displayTimeEndPeriod: { get: function () { return element(by.id('display_time_end_period')); }},

    saveButton: { get: function(){ return element(by.name('submit'));}},
});
module.exports = new AddEditPerformancePage();

