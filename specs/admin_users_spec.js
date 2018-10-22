
var basedPage = require('../pages/base_page');
var adminLoginPage = require('../pages/admin_login_page');
var adminHomePage = require('../pages/admin_home_page');
var createNewUserPage = require('../pages/admin_create_new_user_page');
var usersListingPage = require('../pages/admin_users_listing_page');
var userData = require('../data/user_data');

describe ('Admin Users Tests', function() {
    beforeEach(function() {
        basedPage.toUrl(userData.baseUrl.admin);
        adminLoginPage.loginAs(userData.loginCredentials.admin);
    });

    it('Create New User > Verify Created > Delete > Verify Deleted', function() {
        adminHomePage.clickCreateNewUser();
        expect(createNewUserPage.isCreateUserPageTitleCorrect()).toBe(true, 'create user page title not found');
        var userObj = createNewUserPage.createEditUser(userData.createUserData);
        createNewUserPage.waitForCreatedUserDetailPage();
        expect(createNewUserPage.isCreatedUserPageTitleCorrect()).toBe(true, 'created user page title not found');

        adminHomePage.clickSearchUser();
        expect(usersListingPage.isUsersListingPageTitleCorrect()).toBe(true, 'create user page title not found');
        usersListingPage.searchUser(userObj.lastName);
        usersListingPage.isSearchResultContainsSearchValue(userObj.lastName);
        usersListingPage.clickDeleteUserButtonFromList();
        usersListingPage.confirmDelete();
        usersListingPage.searchUser(userObj.lastName);
        usersListingPage.isSearchResultContainsSearchValue(false);
    });

    it('Create User > Verify Created > Edit User > Verify Updated > Delete', function() {
        adminHomePage.clickCreateNewUser();
        expect(createNewUserPage.isCreateUserPageTitleCorrect()).toBe(true, 'create user page title not found');
        var userObj = createNewUserPage.createEditUser(userData.createUserData);
        createNewUserPage.waitForCreatedUserDetailPage();
        expect(createNewUserPage.isCreatedUserPageTitleCorrect()).toBe(true, 'created user page title not found');

        adminHomePage.clickSearchUser();
        expect(usersListingPage.isUsersListingPageTitleCorrect()).toBe(true, 'create user page title not found');
        usersListingPage.searchUser(userObj.lastName);
        usersListingPage.isSearchResultContainsSearchValue(userObj.lastName);
        usersListingPage.clickEditUserButtonFromList();
        var userEditObj =createNewUserPage.createEditUser(userObj);

        usersListingPage.waitForUserListPage();
        expect(usersListingPage.isUsersListingPageTitleCorrect()).toBe(true, 'created user page title not found');

        adminHomePage.clickSearchUser();
        expect(usersListingPage.isUsersListingPageTitleCorrect()).toBe(true, 'create user page title not found');
        usersListingPage.searchUser(userEditObj.lastName);
        usersListingPage.isSearchResultContainsSearchValue(userEditObj.lastName);
        usersListingPage.clickDeleteUserButtonFromList();
        usersListingPage.confirmDelete();
        usersListingPage.searchUser(userEditObj.lastName);
        usersListingPage.isSearchResultContainsSearchValue(false);
    });

});