// browser.ignoreSynchronization = true;
var basePage = require('./base_page.js');

var UsersListingPage = function() {
    this.waitForUserListPage = function () {
        basePage.waitForPresent(this.userListingPageTitle);
    };

    this.searchUser = function (userName) {
        console.log('enter user to search');
        this.searchField.clear();
        this.searchField.sendKeys(userName);
        this.searchButton.click();
    };

    this.isUsersListingPageTitleCorrect = function () {
        return this.userListingPageTitle.isPresent();
    };
    this.isSearchResultContainsSearchValue = function (user) {
        var row = this.rowItems.get(1);
        row.isPresent().then(function (isPresent) {
            if(isPresent){
                row.all(by.tagName('td')).then(function (cols) {
                    cols[0].getText().then(function (value) {
                        expect(value).toContain(user);
                    });
                });
            }else {
                expect(false).toBe(user);
            }
        });
    };

    this.clickEditUserButtonFromList = function () {
        this.rowItems.get(1).all(by.tagName('td')).then(function (cols) {
            cols[5].all(by.tagName('a')).then(function (action) {
                action[0].click();
            });
        });
    };
    this.clickDeleteUserButtonFromList = function () {
        this.rowItems.get(1).all(by.tagName('td')).then(function (cols) {
            cols[5].all(by.tagName('a')).then(function (action) {
                action[1].click();
            });
        });
    };
    this.confirmDelete = function () {
        basePage.waitForPresent(this.deleteButton);
        this.deleteButton.click();
    };

};
UsersListingPage.prototype = Object.create({},{
    userListingPageTitle: { get: function(){ return element(by.cssContainingText('div.Title1',"Users"));}},
    searchField: { get: function(){ return element(by.id('search'));}},
    searchButton: { get: function(){ return element(by.name('submit'));}},

    rowItems: { get: function(){ return element.all(by.tagName('.adminTable tr'));}},

    deleteButton: { get: function () { return element(by.name('action'));}}

});
module.exports = new UsersListingPage();

