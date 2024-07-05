import {test, expect} from '@playwright/test'


test('input fields', async({page}, testInfo) => {

    // npx playwright test --project=mobile --headed

    await page.goto("http://localhost:4200/pages/iot-dashboard", {waitUntil: "networkidle"});
    if(testInfo.project.name == 'mobile') {
        await page.locator('a[class="sidebar-toggle"]').click();
    }
    await page.getByText('Forms').click();
    await page.getByText('Form layouts').click();
    if(testInfo.project.name == 'mobile') {
        await page.locator('a[class="sidebar-toggle"]').click();
    }
    const usingTheGridEmailInput = page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"})
    await usingTheGridEmailInput.fill('test@test.com');
    await usingTheGridEmailInput.clear();
    await usingTheGridEmailInput.pressSequentially('test2@test.com');


})