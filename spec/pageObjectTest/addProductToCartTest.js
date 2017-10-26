var HomePage = require(pageObjectDir + "/homePage.js");
var WomenPage = require(pageObjectDir + "/womenPage.js");
var TopsPage = require(pageObjectDir + "/topsPage.js");
var ProductPage = require(pageObjectDir + "/productPage.js");
var ShoppingCartPage = require(pageObjectDir + "/shoppingCartPage.js")

var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var productPage = new ProductPage();
var shoppingCartPage = new ShoppingCartPage();

beforeAll(function () {
    browser.get(homePage.URL);
})

describe('Protractor Demo App', function () {

    it('should click on Women button', function () {
        homePage.womenButton.click();
    })

    it('should check WomanNavig element', function () {
        expect(womenPage.womanNavig.isDisplayed()).toBeTruthy();
    })

    it('should choose Tops on womenPage', function () {
        expect(womenPage.tops.click());
    })

    it('should check the product', function () {
        expect(topsPage.fadedShortSleeve.isDisplayed()).toBeTruthy();
    })

    it('should choose the product', function () {
        expect(topsPage.fadedShortSleeveMore.click());
    })

    it('should check description', function () {
        expect(productPage.productDescr.isDisplayed()).toBeTruthy();
    })

    it('should check if product description is longer than 8 chars?', function () {
        expect(productPage.isLabelLongerThan(8)).toBeTruthy();
    })

    it('should check if product is new condition', function () {
        expect(productPage.productCondition.getText()).toEqual('New');
    })

    it('should enter size M', function () {
        expect(productPage.sizeM.click());
    })

    it('should click add to cart', function () {
        expect(productPage.addToCart.click());
    })

    it('should click cart button', function () {
        expect(productPage.cartButton.click());
    })

    it('should click cart button', function () {
        expect(productPage.cartButton.click());
    })

    it('should check product name', function () {
        expect(shoppingCartPage.productName.getText()).toEqual("Faded Short Sleeve T-shirts");
    })
});