var basePage = require('./base_page.js');
var glob = require("glob");

var CommonPage = function() {

    this.sideMenu = element(by.id('sidebar'));
    this.myProjectsMenu = this.sideMenu.element(by.cssContainingText('li a', 'My Projects'));
    this.searchMenu = this.sideMenu.element(by.cssContainingText('li a', 'Search'));
    this.loadingIcon = element(by.cssContainingText('td.dataTables_empty', 'Loading'));
    this.loadingView = element(by.css('.fa.fa-spinner.fa-pulse.fa-fw.monitor-article-grid-spinner.fa-5x'));

    this.waitForLoading = function () {
        browser.sleep(5000);
        browser.wait(basePage.isNotVisible(this.loadingIcon), 180000, 'Time out before loading disappear');
    };

    this.waitForLoader = function () {
        browser.wait(basePage.isNotVisible(this.loadingView), 60000, 'Time out before loading disappear');
        browser.sleep(1000);
    };

    this.randomValue = function(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

};
module.exports = new CommonPage();
