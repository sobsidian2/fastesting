
var basedPage = require('../pages/base_page');
var adminLoginPage = require('../pages/admin_login_page');
var adminHomePage = require('../pages/admin_home_page');
var massMailerPage = require('../pages/admin_mass_mailer_page');
var usersListingPage = require('../pages/admin_users_listing_page');
var userData = require('../data/user_data');

describe ('Admin Tools Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.admin);
        adminLoginPage.loginAs(userData.loginCredentials.admin);
    });

    it('Send Mass Email', function() {
        adminHomePage.clickMassEmail();
        massMailerPage.waitForMassMailerPage();
        expect(massMailerPage.isMassMailerPageTitleCorrect()).toBe(true, 'mass mailer page title not found');
        massMailerPage.sendMassEmail(userData.massMail);
    });

});