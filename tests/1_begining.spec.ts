import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto("http://localhost:4200/")
    await page.getByText('Forms').click();
})

test.describe('suite 1', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Forms').click();
    })

    test('the fist test', async ({page}) => {
        await page.getByText('Form layouts').click();
    })
    
    test('the second test', async ({page}) => {
        await page.getByText('Datepicker').click();
    })
})

test.describe('suite 2', () => {
    test.beforeEach(async({page}) => {
        await page.getByText('Modal & Overlays').click();
    })

    test('the fist test in the second suite', async ({page}) => {
        await page.getByText('Dialog').click();
    })
    
    test('the second test in the second suite', async ({page}) => {
        await page.getByText('Window').click();
    })
})

