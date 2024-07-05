import {Page} from "@playwright/test"
import { HelperBase } from "./helperBase";

export class FormLayoutsPage extends HelperBase{

    // readonly page: Page;

    constructor(page: Page){
        // this.page = page;
        super(page);
    }

    async submitTheGridFormAndSelectOption(email: string, password: string, optionText: string){
        const usingTheGridForm = this.page.locator('nb-card', {hasText: "Using the Grid"});
        await usingTheGridForm.getByRole('textbox', {name: "Email"}).fill(email);
        await usingTheGridForm.getByRole('textbox', {name: "Password"}).fill(password);
        await usingTheGridForm.getByRole('radio', {name: optionText}).check({force: true});
        await usingTheGridForm.getByRole('button', {name: "Sign in"}).click();

    }

    /**
     * This method fill out the Inline form with user details
     * @param name - should be first name
     * @param email - should be correct email
     * @param rememeberMeCheckbox - boolean value 
     */
    async submitTheInlineForm(name: string, email: string, rememeberMeCheckbox: boolean){
        const inlineForm = this.page.locator('nb-card', {hasText: "Inline form"});
        await inlineForm.getByRole('textbox', {name: "Jane Doe"}).fill(name);
        await inlineForm.getByRole('textbox', {name: "Email"}).fill(email);
        if(rememeberMeCheckbox)
            await inlineForm.getByRole('checkbox').check({force: true});
        await inlineForm.getByRole('button').click();

    }

}


