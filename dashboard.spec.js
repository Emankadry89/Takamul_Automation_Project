const { test, chromium } = require('@playwright/test');
const loginData = require('../../data/login.data');
import dotenv from 'dotenv';
import globals from '../../utils/api/globals';
import LoginPage from '../../pages/login.page';
import DashboardPage from '../../pages/dashboard.page';
import ContactsPage from '../../pages/contacts.page';

dotenv.config();

test.describe('Login to See_u platform', () => {
  let browser = null;
  let context = null;
  let page = null;
  let loginPage = null;
  let dashboardPage = null;
  let contactsPage = null;

  test.beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    contactsPage = new ContactsPage(page);
    page.setDefaultTimeout(60000);
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Sign In with correct email and Password', async () => {
    const user = loginData.getTestData()[0];
    await page.goto(globals.BASE_URL);
    await loginPage.waitForPageShown();
    await loginPage.enterEmail(user.email);
    await loginPage.enterPassword(user.password);
    await loginPage.clickLogin();
    await dashboardPage.waitForPageShown();
  });

  test('Create new group to hold the registered contacts', async () => {
    await dashboardPage.tabOnAddContactIcon();
    await dashboardPage.tabOnCreateNewContactGroupButton();
    await contactsPage.waitForPageShown()
  });
});
