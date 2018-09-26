//browser.ignoreSynchronization = true;
var basePage = require('../pages/base_page');
var commonPage = require('../pages/common_page');

var SampleModal = function() {
    this.modalContainer = element.all(by.css('[title="abc"]')).first();

    this.createNewModel = function (createObj) {
        browser.wait(basePage.isVisible(this.createNewModelButtton), 5000, '');

        var name = createObj.name+' '+commonPage.randomValue(10);
        return name;
    };

};

SampleModal.prototype = basePage; // extend basePage...
module.exports = new SampleModal();