
// store user data in object for ease of use and readability...
var UserData = {
    baseUrl : {'url':browser.baseUrl},
    loginCredentials : {'username': browser.params.login.username, 'password': browser.params.login.password},
    gridTable : {'results' : '20', 'pagination': '2'},
};
module.exports = UserData;