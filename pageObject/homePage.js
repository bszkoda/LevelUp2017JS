var HomePage = function HomePage() {

    this.URL = 'http://automationpractice.com/index.php';

    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'))
    this.womenButton = element(By.css('.menu-content>li:nth-of-type(1) a[title="Women"]'))
    this.dressesButton = element(By.css('.menu-content>li:nth-of-type(2) a[title="Dresses"]'))
}
module.exports = HomePage;