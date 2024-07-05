import {test} from '../test-options'
import {faker} from '@faker-js/faker'

test('parametrized method 2', async({pageManager}) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.number.int(1000)}@test.com`

    await pageManager.onFormLayoutsPage().submitTheGridFormAndSelectOption("test", "testtest", "Option 2")
    await pageManager.onFormLayoutsPage().submitTheInlineForm(randomFullName, randomEmail, false)
})


