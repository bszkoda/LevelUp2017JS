beforeAll(function(){ //'kod ktory wykona sie przed wszystkim',
});
beforeEach(function(){ //'kod ktory wykona sie przed kazdym',
});
afterAll(function(){ //'kod ktory wykona sie po wszystkim',
});
afterEach(function(){ //'kod ktory wykona sie po kazdym',
});

describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');

        expect(browser.findElement(By.css('.shopping_cart'))
            .getText())
            .toEqual('Cart (empty)');
    });
});