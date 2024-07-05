// https://playwright.dev/docs/actionability

import {test, expect} from '@playwright/test'

test.beforeEach(async({page}, testInfo) => {
    await page.goto(process.env.URL);
    await page.getByText('Button Triggering AJAX Request').click();
    // testInfo.setTimeout(testInfo.timeout + 2000);
})

test('autowaiting', async ({page}) => {
    // autowating
    const successButton = page.locator('.bg-success');
    
    // example autowaiting
    // await successButton.click();
    // const successText = successButton.textContent();
    // expect(successText).toEqual('Data loaded with AJAX get request.');

    // wait for example
    // await successButton.waitFor({state: "attached"});
    // const successText = await successButton.allTextContents(); // allTextContents doesn't have autowating
    // expect(successText).toContain('Data loaded with AJAX get request.');

    // timeout in the option
    // await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000});

})

test('alternative waits', async ({page}) => {
    const successButton = page.locator('.bg-success');
    
    // wait for element
    // await page.waitForSelector('.bg-success');

    // wait for particular response
    await page.waitForResponse('http://uitestingplayground.com/ajaxdata');

    // wait for network calls to be completed ('NOT RECOMMENDED')
    // await page.waitForLoadState('networkidle');

    const successText = await successButton.allTextContents(); // allTextContents doesn't have autowating
    expect(successText).toContain('Data loaded with AJAX get request.');
})


test('timeouts', async ({page}) => {
    test.setTimeout(10000);
    // const successButton = page.locator('.bg-success');
    // // await successButton.click({timeout: 16000});
    // await successButton.click();
        
})
