# READ ME #

## Fillaseat BST Test Script:
* Makes use of page objects
* Runs multiple browsers at once
* Runs test with parameters on different servers i.e. baseUrl, login credentials etc.

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* Install protractor with command: npm install -g protractor
* `npm install` to install the project dependencies
* `node_modules/.bin/webdriver_manager update` to update drivers

## Run tests:
* run script with protractor:
* run with param: '`node_modules/.bin/protractor conf.js --baseUrl="https://XXXXX/YYY" --prams.login.username="username" --params.login.password="password"`'
* run without params:
specifi suite
- 'protractor conf.js --suite login'
or all specs in the config
- 'protractor conf.js'