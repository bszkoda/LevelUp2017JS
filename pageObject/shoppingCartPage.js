var ShoppingCartPage = function ShoppingCartPage() {
    this.productName = element(By.css('.first_item > td.cart_description > p > a'))
}
module.exports = ShoppingCartPage;