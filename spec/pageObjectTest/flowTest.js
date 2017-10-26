var HomePage = require("../../pageObject/homePage.js");
var ContactUsPage = require("../../pageObject/contactUsPage.js");

var homePage=new HomePage();
var contactUsPage=new ContactUsPage();

describe('Protractor Demo App', function () {
    it('should have a title', function () {

        browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);
        homePage.contactUsLink.click();
       // expect(homePage.cartLabel.getText())
         //   .toEqual('Cart (empty)');

    var isLabelLongerThan = function(isLongerThan){
        return new Promise(function(resolve){
        browser.customerServiceLabel.getText().then(function(text){
        resolve(text.lenght > isLongerThan);
        })
        });
        }
        isLabelLongerThan(1).then(console.log)

    });
   it('should check visibility of headerLabel', function () {
        
        expect(contactUsPage.headerLabel.isEnabled());
                //browser.waitForAngularEnabled(false);
               // browser.click(homePage.contactUsLink);
        
               // expect(homePage.cartLabel.getText())
                //    .toEqual('Cart (empty)');
    });
     it('should check visibility of dropDownList', function () {
                
         expect(contactUsPage.dropDownList.isEnabled());              
     }); 
     it('should check visibility of sendButton', function () {
        
        expect(contactUsPage.sendButton.isEnabled());
    });       
});
