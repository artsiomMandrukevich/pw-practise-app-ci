import {test} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager';
// import { NavigationPage } from '../page-objects/navigationPage'
// import {FormLayoutsPage} from '../page-objects/formLayoutsPage'
// import { DatePickerPage } from '../page-objects/datePickerPage';
import {faker} from '@faker-js/faker'

test.beforeEach(async({page}) => {
    await page.goto("http://localhost:4200/");
})

test('test navigate to form page', async({page}) => {
    const pm = new PageManager(page);
    await pm.navigateTo().formLayoutsPage();
    await pm.navigateTo().datePickerPage();
    await pm.navigateTo().smartTabPage();
    await pm.navigateTo().toastrPage();
    await pm.navigateTo().tooltipPage();
})

test('parametrized method', async({page}) => {
    const pm = new PageManager(page);
    // const navigateTo = new NavigationPage(page);
    // const formPage = new FormLayoutsPage(page);
    // const datePickerPage = new DatePickerPage(page);

    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pm.navigateTo().formLayoutsPage();
    await pm.onFormLayoutsPage().submitTheGridFormAndSelectOption("test", "testtest", "Option 2")
    await pm.onFormLayoutsPage().submitTheInlineForm(randomFullName, randomEmail, false)
    // await pm.navigateTo().datePickerPage();
    // await pm.onDatePickerPage().selectCommonDatePickerDateFromToday(3);
    // await pm.onDatePickerPage().selectDatePickerWithRangeFromToday(1, 15);
})


