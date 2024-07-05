import { Page } from '@playwright/test'
import { NavigationPage } from './navigationPage';
import { FormLayoutsPage } from './formLayoutsPage';
import { DatePickerPage } from './datePickerPage';

export class PageManager{

    private readonly page: Page;
    private readonly navigationPage: NavigationPage;
    private readonly formLayouts: FormLayoutsPage;
    private readonly datePicker: DatePickerPage;


    constructor(page: Page){
        this.page = page;
        this.navigationPage = new NavigationPage(this.page);
        this.formLayouts = new FormLayoutsPage(this.page);
        this.datePicker = new DatePickerPage(this.page);
    }

    navigateTo(){
        return this.navigationPage;
    }

    onFormLayoutsPage(){
        return this.formLayouts;
    }

    onDatePickerPage(){
        return this.datePicker;
    }
}