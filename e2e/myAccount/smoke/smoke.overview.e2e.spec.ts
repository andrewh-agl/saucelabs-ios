import { browser, $, ExpectedConditions } from 'protractor';

describe('smoke test - overview', () => {
    describe('appium test', () => {
        it('should load the page', async () => {
            browser.ignoreSynchronization = false;
            await browser.get('https://quarterly-test.myaccount.agl.com.au/d/paymentassistance');
        });

        it('should resolve to the correct url', async () => {
            await expect(browser.getCurrentUrl()).toBe('https://quarterly-test.myaccount.agl.com.au/bills/paymentassistance');
        });

        it('should find correct heading text', async () => {
            const el = $('.payment-assistance-welcome .maui-heading__main');
            await browser.driver.wait(ExpectedConditions.visibilityOf(el), 20000);;
            await expect(el.isDisplayed()).toBe(true);
            await expect(el.getText()).toBe('Welcome to payment assistance');
        });
    });
});
