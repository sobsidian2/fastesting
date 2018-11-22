var BasePage;
BasePage = function () {
    /**
     * wait and verify that a page is loaded
     * @returns {promise}
     * @requires a page to include `pageLoaded` method
     */
    this.at = function () {
        return browser.wait(this.pageLoaded(), this.timeout.xl);
    };

    /**
     * navigate to a page via it's `url` var
     * and verify/wait via at()
     *
     * @requires page have both `url` and `pageLoaded` properties
     */
    this.to = function () {
        browser.get(this.url, this.timeout.xl);
        return this.at();
    };

    this.toUrl = function (url) {
        console.log('open URL in browser');
        browser.get(url);
    };
    /**
     * Wrappers for expected conditions
     *
     * I find ECs are generally poorly named, so we wrap them in
     * methods that are 9% more sexy, and allow us to add logging, etc...
     *
     * @returns {ExpectedCondition}
     */
    var EC = protractor.ExpectedConditions;

    this.waitForVisible = function (locator) {
        var visible = EC.visibilityOf(locator);
        browser.wait(visible(locator), 9000, 'element not visible')
    };

    this.waitForPresent = function (locator) {
        var present = EC.presenceOf(locator);
        browser.wait(present(locator), 9000, 'element not present')
    };

    this.waitForClickable = function (locator) {
        var clickable = EC.elementToBeClickable(locator);
        browser.wait(clickable(locator), 9000, 'element not clickable')
    };
    this.waitForNotVisible = function (locator) {
        var stale = EC.stalenessOf(locator);
        browser.wait(stale(locator), 15000, 'element still present');
    };

    this.waitForNoInDom = function (locator) {
        var invisible = EC.invisibilityOf(locator);
        browser.wait(invisible(locator), 15000, 'element still present')
    };

    this.inDom = function (locator) {
        return EC.presenceOf(locator);
    };

    this.notInDom = function (locator) {
        return EC.stalenessOf(locator);
    };

    this.isClickable = function (locator) {
        return EC.elementToBeClickable(locator);
    };

    this.hasText = function (locator, text) {
        return EC.textToBePresentInElement(locator, text);
    };

    this.and = function (arrayOfFunctions) {
        return EC.and(arrayOfFunctions);
    };

    this.titleIs = function (title) {
        return EC.titleIs(title);
    };

    /**
     * wrap this.timeout. (ms) in t-shirt sizes
     */
    this.timeout = {
        'xs': 420,
        's': 1000,
        'm': 2000,
        'l': 5000,
        'xl': 9000,
        'xxl': 15000
    };

    /**
     * test if an element has a class
     *
     * @param  {elementFinder} locator - eg. $('div#myId')
     * @param  {string}  klass  - class name
     * @return {Boolean} - does the element have the class?
     */
    this.hasClass = function (locator, klass) {
        return locator.getAttribute('class').then(function (classes) {
            return classes.split(' ').indexOf(klass) !== -1;
        });
    };

    /**
     * Webdriver equivilant to hitting Enter/Return key.
     */
    this.hitEnter = function () {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };
    this.mouseHover = function (element) {
        browser.actions().mouseMove(element).perform();
    };
    /**
     * switches focus to a new window
     * @param  {int} windowHandleIndex - the nth window to switch to
     * @param  {pageObject} targetPage - the page we'll be on after the switch
     */
    this.switchToWindow = function (windowHandleIndex, targetPage) {
        var that = this;
        // wait for new page to open...
        var handle = browser.wait(function () {
            return browser.getAllWindowHandles().then(function (handles) {
                // make sure window we're switching to exists...
                if (handles.results > windowHandleIndex) {
                    return handles[windowHandleIndex];
                } else {
                    throw new Error('window index ' + windowHandleIndex + ' does not exist');
                }
            });
        }, this.timeout.xxl);
        console.log('switching to window ' + windowHandleIndex);
        browser.switchTo().window(handle);
        // test that we're at the new page...
        targetPage.at();
    };

    /*/!**
     * get an element's width
     * extend's protractors ElementFinder
     *
     * @return {int} - the width of the element
     *!/
    protractor.ElementFinder.prototype.getWidth = function () {
        return this.getSize().then(function (size) {
            return size.width;
        });
    };*/
    this.selectDropdownbyNum = function (element, optionNum ) {
        if (optionNum){
            var options = element.all(by.tagName('option')).then(function(options){
                options[optionNum].click();
            });
        }
    };
    this.randomText = function(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };


};
module.exports = new BasePage();
