var ProductPage = function ProductPage() {

    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product';

    this.productDescr = element(By.css('#short_description_content>p'))
    this.productCondition = element(By.css('#product_condition span'))
    this.sizeM = element(By.css('#group_1 option[title="M"]'))
    this.addToCart = element(By.css('#add_to_cart button'))
    this.cartButton = element(By.css('.shopping_cart>a'))
    this.price = element(By.css('#our_price_display'))
    this.goToDresses = element(By.css('#columns [title="Dresses"]'))
    this.title = element(By.css('h1'))
}

ProductPage.prototype.isLabelLongerThan = function (isLongerThan) {
    var that = this;
    return new Promise(function (resolve) {
        that.productDescr.getText().then(function (text) {
            resolve(text.length > isLongerThan);
            //resolve(text.length);
        })
    });
}
module.exports = ProductPage;