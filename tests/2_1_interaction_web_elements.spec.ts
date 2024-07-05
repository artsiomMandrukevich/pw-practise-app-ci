import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto("http://localhost:4200/");
    await page.getByText('Forms').click();
    await page.getByText('Form layouts').click();
})

    test('locator syntax rules', async ({page}) => {
        // by Tag name
        page.locator('input');

        // by Id
        await page.locator('#inputEmail').click();

        // by Class
        page.locator('.shape-rectangle');

        // by attribute
        page.locator('[placeHolder="Email"]');

        // by Class value (full)
        page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]');
        
        // combine different selectors
        page.locator('input[placeHolder="Email"][nbinput]');

        // by xpath
        page.locator('//input[@placeHolder="Email"]');

        // by partial text match
        page.locator(':text("Using")');

        // by exact text match
        page.locator(':text-is("Using the Grid")');
    })
    

    test('user facing locators', async({page}) => {
        await page.getByRole('textbox', {name: "Email"}).first().click();
        await page.getByRole('button', {name: "Sign in"}).first().click();

        await page.getByLabel('Email').first().click();

        await page.getByPlaceholder("Jane Doe").click;

        await page.getByText("Using the Grid").click;

        await page.getByTitle("IoT Dashboard").click;

        // await page.getByTestId('').click();//data-testid=testId
    })


    test('locating child elements', async({page}) => {
        await page.locator('nb-card nb-radio :text-is("Option 1")').click();
        await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click();

        await page.locator('nb-card').getByRole('button', {name:"Sign in"}).first().click();

        // select by index
        await page.locator('nb-card').nth(3).getByRole('button').click();
    })

    test('locating parent elements', async({page}) => {
        await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).first().click();
        await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox', {name: "Email"}).first().click();

        await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).first().click();
        await page.locator('nb-card').filter({has: page.locator('.status-danger')}).getByRole('textbox', {name: "Password"}).first().click();

        await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: "Sign in"})
            .getByRole('textbox', {name: "Email"}).first().click();

        await page.locator
    })

    test('autowaiting', async({page}) => {
        
    })


    test('reusing locators', async({page}) => {
        const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
        const emailField = basicForm.getByRole('textbox', {name: "Email"}).first();

        await emailField.fill('test@test.com');
        await basicForm.getByRole('textbox', {name: "Password"}).first().fill('Welcome123');
        await basicForm.locator('nb-checkbox').click();
        await basicForm.getByRole('button').click();

        await expect(emailField).toHaveValue('test@test.com');
    })

    test('extracting values', async({page}) => {
        //single test value
        const basicForm = page.locator('nb-card').filter({hasText: "Basic form"});
        const buttonText = await basicForm.locator('button').textContent();
        expect (buttonText).toEqual('Submit');

        //all text values
        const allRadioButtonsLabels = await page.locator('nb-radio').allTextContents();
        expect(allRadioButtonsLabels).toContain('Option 1');
    
        //input value
        const emailField = basicForm.getByRole('textbox', {name: "Email"});
        await emailField.fill('test@test.com');
        const emailValue = await emailField.inputValue()
        expect(emailValue).toEqual('test@test.com')

        //get element's attribute
        const placeHolderValue = await emailField.getAttribute('placeholder');
        expect(placeHolderValue).toEqual('Email');
    })

    test('assetions', async({page}) => {
        const basicFormButton = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button');

        // general assertion
        const value = 5;
        expect(value).toEqual(5);

        const text = await basicFormButton.textContent();
        expect(text).toEqual('Submit');

        // locator assertion
        await expect(basicFormButton).toHaveText('Submit');

        // soft assertion (allow us to continue test even though assertion fails)
        await expect.soft(basicFormButton).toHaveText('Submit');
        await basicFormButton.click();
    })
