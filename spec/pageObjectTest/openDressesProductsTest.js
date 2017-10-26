var using = require("jasmine-data-provider"); 

var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var DressesPage = require(pageObjectDir + "/dressesPage.js");
var ProductPage = require(pageObjectDir + "/productPage.js");

var homePage = new HomePage();
var womenPage = new WomenPage();
var dressesPage = new DressesPage();
var productPage = new ProductPage();

beforeAll(function () {
    browser.get(homePage.URL);
})

beforeEach(function () {
        homePage.dressesButton.click();
})

var data = {
    "dress1": {
        "selector": "dress1Image",
        "price": "$26.00",
        "title": "Printed Dress"
     },
     "dress2": {
        "selector": "dress2Image",
        "price": "$50.99",
        "title": "Printed Dress"      
     },
    "dress3": {
        "selector": "dress3Image",
        "price": "$28.98",
        "title": "Printed Summer Dress"        
    },
    "dress4": {
        "selector": "dress4Image",
        "price": "$30.50",
        "title": "Printed Summer Dress"       
    },
    "dress5": {
        "selector": "dress5Image",
        "price": "$16.40",
        "title": "Printed Chiffon Dress"      
    }
}

describe('Protractor Demo App', function () {
    browser.get(dressesPage.URL);

    using(data, function (dresses) {
        it('check dress', function () {
            dressesPage[dresses.selector].click();
            expect(productPage.price.getText()).toEqual(dresses.price)
        })

        it('check price', function () {
            dressesPage[dresses.selector].click();
            expect(productPage.title.getText()).toEqual(dresses.title)        
     })
    });
});