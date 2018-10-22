
var basedPage = require('../pages/base_page');
var adminLoginPage = require('../pages/admin_login_page');
var adminHomePage = require('../pages/admin_home_page');
var adminAddEventPage = require('../pages/admin_add_event_page');
var adminEventsListingPage = require('../pages/admin_events_listing_page');
var adminEventsDetailPage = require('../pages/admin_events_detail_page');
var adminEditImagePage = require('../pages/admin_edit_image_page');
var adminAddEditPerformancePage = require('../pages/admin_add_edit_performance_page');
var userData = require('../data/user_data');

describe ('Admin Events Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.admin);
        adminLoginPage.loginAs(userData.loginCredentials.admin);
    });

    it('Add New Event > Delete Event', function() {
        adminHomePage.clickAddEvent();
        expect(adminAddEventPage.isAddEventPageTitleCorrect()).toBe(true, 'add event page title not found');
        var addedEvent = adminAddEventPage.addEvent(userData.addEventData);

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event detail page title not found');

        adminEventsListingPage.clickEventFromListing(addedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.deleteEvent();

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event listing page title not found');
        expect(adminEventsListingPage.isEventPresent(userData.addEventData.name)).toBe(false, 'event not found in list');
    });

    it('Add Event > Edit Event > Delete Event', function() {
        adminHomePage.clickAddEvent();
        expect(adminAddEventPage.isAddEventPageTitleCorrect()).toBe(true, 'add event page title not found');
        var addedEvent = adminAddEventPage.addEvent(userData.addEventData);

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event detail page title not found');

        adminEventsListingPage.clickEventFromListing(addedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.clickEditEvent();

        var updatedEvent = adminAddEventPage.addEvent(userData.updateEventData);

        adminEventsDetailPage.waitForEventDetailPage();
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event listing page title not found');
        expect(adminEventsListingPage.isEventPresent(updatedEvent.name)).toBe(true, 'event not found in list');

        adminEventsListingPage.clickEventFromListing(updatedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.deleteEvent();

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event listing page title not found');
        expect(adminEventsListingPage.isEventPresent(updatedEvent.name)).toBe(false, 'event not found in list');
    });

    it('Add New Event > Update Image', function() {
        adminHomePage.clickAddEvent();
        expect(adminAddEventPage.isAddEventPageTitleCorrect()).toBe(true, 'add event page title not found');
        var addedEvent = adminAddEventPage.addEvent(userData.addEventData);

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event detail page title not found');

        adminEventsListingPage.clickEventFromListing(addedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.clickEditImage();

        adminEditImagePage.waitForEditImagePage();
        expect(adminEditImagePage.isEditImagePageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEditImagePage.uploadEeventImage(userData.imageUpdatePath);

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsListingPage.clickEventFromListing(addedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
    });

    it('Add New Event > Add Performance', function() {
        adminHomePage.clickAddEvent();
        expect(adminAddEventPage.isAddEventPageTitleCorrect()).toBe(true, 'add event page title not found');
        var addedEvent = adminAddEventPage.addEvent(userData.addEventData);

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsListingPage.clickEventFromListing(addedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.clickAddPerformance();

        adminAddEditPerformancePage.waitForAddPerformancePage();
        expect(adminAddEditPerformancePage.isAddPerformancePageTitleCorrect()).toBe(true, 'add performance page title not found');
        adminAddEditPerformancePage.addUpdatePerformance(userData.addPerformance);
        adminEventsDetailPage.waitForPerformanceTable();
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.isEventPerformancePresent();
    });
    it('Add New Event > Add Performance > Delete Performance', function() {
        adminHomePage.clickAddEvent();
        expect(adminAddEventPage.isAddEventPageTitleCorrect()).toBe(true, 'add event page title not found');
        var addedEvent = adminAddEventPage.addEvent(userData.addEventData);

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsListingPage.clickEventFromListing(addedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.clickAddPerformance();

        adminAddEditPerformancePage.waitForAddPerformancePage();
        expect(adminAddEditPerformancePage.isAddPerformancePageTitleCorrect()).toBe(true, 'add performance page title not found');
        adminAddEditPerformancePage.addUpdatePerformance(userData.addPerformance);
        adminEventsDetailPage.waitForPerformanceTable();
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.isEventPerformancePresent();
        adminEventsDetailPage.deleteEventPerformanceFromList();
        adminEventsDetailPage.waitForEventDetailPage();
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
    });
    it('Add New Event > Add Performance > Edit Performance', function() {
        adminHomePage.clickAddEvent();
        expect(adminAddEventPage.isAddEventPageTitleCorrect()).toBe(true, 'add event page title not found');
        var addedEvent = adminAddEventPage.addEvent(userData.addEventData);

        adminHomePage.clickViewEvent();
        expect(adminEventsListingPage.isEventListingPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsListingPage.clickEventFromListing(addedEvent.name);
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.clickAddPerformance();

        adminAddEditPerformancePage.waitForAddPerformancePage();
        expect(adminAddEditPerformancePage.isAddPerformancePageTitleCorrect()).toBe(true, 'add performance page title not found');
        adminAddEditPerformancePage.addUpdatePerformance(userData.addPerformance);
        adminEventsDetailPage.waitForPerformanceTable();
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.isEventPerformancePresent();
        adminEventsDetailPage.clickEditPerformanceButtonFromList();

        adminAddEditPerformancePage.waitForAddPerformancePage();
        expect(adminAddEditPerformancePage.isEditPerformancePageTitleCorrect()).toBe(true, 'edit performance page title not found');
        adminAddEditPerformancePage.addUpdatePerformance(userData.editPerformance);
        adminEventsDetailPage.waitForPerformanceTable();
        expect(adminEventsDetailPage.isEventDetailPageTitleCorrect()).toBe(true, 'event detail page title not found');
        adminEventsDetailPage.isEventPerformancePresent();
    });

});