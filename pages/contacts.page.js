const elementHelper = require("../utils/element.helper");
const BasePage = require("./base.page");

class ContactsPage extends BasePage {
  constructor(page) {
    const element = "fuse-splash-screen";
    super(page, element);
    this.page = page; // Ensure page is accessible in methods
  }

  // Define locators
  get publicFormTab() {
    return this.page.locator('#option2');
  }
  get publicRegistrationForm() {
    return this.page.locator('#cdk-overlay-2');
  }
  get saveFormButton() {
    return this.page.locator('button >> text="Save Form"');
  }
  get closeButton() {
    return this.page.locator('button >> text="Close"');
  }
  get saveChangesMessage(){
    return this.page.locator('div[toastcontainer] #toast-container"]');
  }

  // Methods to interact with the page
  async pressPublickFormTab() {
    await elementHelper.clickElement(this.page, this.publicFormTab);
  }
  async openPublicRegisterationForm() {
    await elementHelper.waitForDisplayed(this.page, this.publicRegistrationForm);
  }
  async clickSaveButton() {
    await elementHelper.clickElement(this.page, this.saveFormButton);
  }
  async clickCloseButton() {
    await elementHelper.clickElement(this.page, this.closeButton);
  }
  async verifySaveChangesMessage(){
    await elementHelper.isElementDisplayed(this.page, this.saveChangesMessage);
  }
}

module.exports = ContactsPage;