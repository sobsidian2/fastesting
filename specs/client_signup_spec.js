/**
 * Login related test scenarios are covered...
 */
var basedPage = require('../pages/base_page');
var clientLoginPage = require('../pages/client_login_page');
var clientJoinPage = require('../pages/client_join_page');
var userData = require('../data/user_data');

describe ('Client Signup Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.client);

    });

    it('Login With Valid Credentials', function() {
        // clientHomePage.navigateToLoginPage();
        clientLoginPage.clickSignup();
        clientJoinPage.clickJoinFillASeat();
        var persoInfo = clientJoinPage.fillPersonalInformation(userData.joinPersonalInfo);
        clientJoinPage.fillBillingAddress(userData.billingInfo);
        clientJoinPage.acceptAgree();
        clientJoinPage.clickContinue();
        clientJoinPage.selectSubscription();
        clientJoinPage.selectPaymentType();
        clientJoinPage.enterCreditCardInfo(userData.billingInfo);
        clientJoinPage.clickContinue();
        clientJoinPage.clickPurchase();
    });

});