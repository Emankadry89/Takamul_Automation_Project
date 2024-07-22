const { expect } = require("@playwright/test");
//base class for all pages
class BasePage {
  constructor(page, selector) {
    this.page = page;
    //unique element in the page
    this.selector = selector

  }
  // navigate to a page with the given path
  async navigate(path) {
    await this.page.goto('https://seeu' + process.env.server + '/${path}')
  }
  // wait for the page to be shown using the selector passed in the constructor
  async waitForPageShown() {
    try {
      await this.page.waitForLoadState()
      await this.page.locator(this.selector).first().waitFor({ state: 'visible' });
      return await this.page.locator(this.selector).first().isVisible();
    }
    catch (err) {
      console.log(err)
      throw "Page not shown"
    }
  }
  //returns the title of the page 
  async getPageTitle() {
    await this.page.waitForLoadState()
    return await this.page.title()
  }
}
module.exports = BasePage