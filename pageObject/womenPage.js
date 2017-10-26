var WomenPage = function WomenPage() {

    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';

    this.tops = element(By.css('.tree.dynamized>li>a[title*="Choose from"]'))
    this.womanNavig = element(By.css('.navigation_page'))
    this.dresses = element(By.css('.tree.dynamized>li>a[title*="Find your favorites"]'))
}
module.exports = WomenPage;