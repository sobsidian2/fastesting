/**
 * Login related test scenarios are covered...
 */
var basedPage = require('../pages/base_page');
var clientLoginPage = require('../pages/client_login_page');
var clientHomePage = require('../pages/client_home_page');
var clientEventDetailPage = require('../pages/client_event_detail_page');
var userData = require('../data/user_data');

describe ('Client Events Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.client);
        clientLoginPage.loginAs(userData.loginCredentials.client);
    });

    it('View Event', function() {
        // clientHomePage.navigateToLocateAnEvent();
        clientHomePage.viewEvent(userData.viewEvent);
        expect(clientEventDetailPage.isEventTitle(userData.viewEvent.name)).toBe(true,'event title not matched');
    });

    it('View Event', function() {
        // clientHomePage.navigateToLocateAnEvent();
        clientHomePage.viewEvent(userData.viewEvent);
        expect(clientEventDetailPage.isEventTitle(userData.viewEvent.name)).toBe(true,'event title not matched');
        clientEventDetailPage.reserveEvent();

        browser.sleep(30000);
    });

});