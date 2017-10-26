var DressesPage = function DressesPage() {

    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';

    this.dressesHeader = element(By.css('h1>.cat-name'))
    this.dress1Image = element(By.css('ul.product_list li:nth-of-type(1) .replace-2x'));
    this.dress1Price = element(By.css('#center_column ul>li:nth-of-type(1) .right-block .product-price:first-of-type'));
    this.dress2Image = element(By.css('ul.product_list li:nth-of-type(2) .replace-2x'));
    this.dress2Price = element(By.css('#center_column ul>li:nth-of-type(2) .right-block .product-price:first-of-type'));
    this.dress3Image = element(By.css('ul.product_list li:nth-of-type(3) .replace-2x'));
    this.dress3Price = element(By.css('#center_column ul>li:nth-of-type(3) .right-block .product-price:first-of-type'));
    this.dress4Image = element(By.css('ul.product_list li:nth-of-type(4) .replace-2x'));
    this.dress4Price = element(By.css('#center_column ul>li:nth-of-type(4) .right-block .product-price:first-of-type'));
    this.dress5Image = element(By.css('ul.product_list li:nth-of-type(5) .replace-2x'));
    this.dress5Price = element(By.css('#center_column ul>li:nth-of-type(5) .right-block .product-price:first-of-type'));
}
module.exports = DressesPage;