const elementHelper = require("../utils/element.helper");
const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor(page) {
    const element = "fuse-splash-screen";
    super(page, element);
    this.page = page; // Ensure page is accessible in methods
  }

  // Define locators
  get loginButton() {
    return this.page.locator('[aria-label="LOG IN"]');
  }
  get email() {
    return this.page.locator('#mat-input-0');
  }
  get password() {
    return this.page.locator("#mat-input-1");
  }

  // Methods to interact with the page
  async enterEmail(email) {
    await elementHelper.enterValue(this.page, this.email, email);
  }
  async enterPassword(password) {
    await elementHelper.enterValue(this.page, this.password, password);
  }
  // Clear username field
  async clearUsernameField() {
    await elementHelper.enterValue(this.page, this.email, '');
  }
  // Clear password field
  async clearPasswordField() {
    await elementHelper.enterValue(this.page, this.password, '');
  }
  async clickLogin() {
    await elementHelper.clickElement(this.page, this.loginButton);
  }
}

module.exports = LoginPage;