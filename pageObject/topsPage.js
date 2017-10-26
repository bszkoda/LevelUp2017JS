var TopsPage = function TopsPage() {

    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';

    this.womanTops = element(By.css('.breadcrumb.clearfix'))
    this.fadedShortSleeve = element(By.css('.product_list.grid.row > li:first-of-type'))
    this.fadedShortSleeveMore = element(By.css('ul>li:first-of-type .lnk_view.btn-default'))

}
module.exports = TopsPage;