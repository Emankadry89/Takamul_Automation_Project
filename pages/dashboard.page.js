const elementHelper = require("../utils/element.helper");
const BasePage = require("./base.page");

class DashboardPage extends BasePage {
  constructor(page) {
    const element = "fuse-splash-screen";
    super(page, element);
    this.page = page; // Ensure page is accessible in methods
  }

  // Define locators
  get addContactIcon() {
    return this.page.locator('(//mat-icon[contains(@class, "plus_icon") and text()="add"])[2]');
  }
  get createNewContactGroupButton() {
    return this.page.locator('button:has-text("Create New Contact Group")');
  }

  // Methods to interact with the page
  async tabOnAddContactIcon() {
    await elementHelper.clickElement(this.page, this.addContactIcon);
  }

  async tabOnCreateNewContactGroupButton() {
    await elementHelper.clickElement(this.page, this.createNewContactGroupButton);
  }
}

module.exports = DashboardPage;