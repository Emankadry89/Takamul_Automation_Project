class ElementHelper {

    async isElementDisplayed(page,locator) {
        try {
            await locator.waitFor({ state: 'visible', timeout: 20000 });
            return true
        }
        catch (err) {
            return false
        }
    }

    async isElementHidden(page, locator) {
        try {
            await locator.waitFor({ state: 'hidden', timeout: 20000 });
            return true
        }
        catch (err) {
            return false
        }
    }
    async enterValue(page, locator, value) {
        await locator.waitFor();
        await locator.fill(value)
    }
    
      async clickElement(page, locator) {
        await locator.waitFor();
        await locator.click();
      }
    
      static async typeValue(page, locator, value) {
        await locator.waitFor();
        await locator.type(value);
      }
    async waitForButtonEnabled(page, locator) {
        while (await locator.isEnabled({ setTimeout: 10000 })) { }
    }
    async getElementText(page, locator) {
        try {
            await this.waitForDisplayed(this.page,locator)
            return await locator.textContent({ timeout: 10000 });
        }
        catch (error) {
            return "element not found \n" + error
        }
    }
    async waitForDisplayed(page, locator,timeOut=10000) {
        try {
            await locator.waitForSelector({ timeout: timeOut });
            return true
        }
        catch (err) {
            //console.error("element is not displayed after 10000 ms")
            return false
        }

    }
    async waitForElementRemoved(page, locator) {
        try {
            await locator.waitForSelector({ state: 'hidden', timeout: 30000 });
            return true
        }
        catch (err) {
            return "element is still displayed after 30000 ms" + err
        }

    }
    async getDialogMessage(page,locator) {
        locator.on('dialog', async (dialog) => {
            return dialog.message()
        })
    }

    async getInnerText(page, locator, nth = 0) {
        return await locator.innerText()
    }
    async scrollIfNeeded(page, locator) {
        await locator.scrollIntoView()
    }

    async getElementAttribute(page, locator, attribute = 'value', disabled = false) {
        let element_on_page = await locator.waitForSelector()
        if (disabled) {
            // Get the value attribute of the input element using evaluateHandle
            const valueHandle = await element_on_page.evaluateHandle((el) => el.value);
            return await valueHandle.jsonValue();
        } else
            return await element_on_page.getAttribute(attribute);

    }
    
}
module.exports = new ElementHelper()