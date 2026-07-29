import { Locator, Page } from "@playwright/test";

export class FormPage{
    readonly page: Page;
    readonly basicDropdown: Locator;
    readonly countryDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.basicDropdown = page.locator('#dropdown');
        this.countryDropdown = page.locator('#country');
    }

    async gotoDropdownPage() {
        await this.page.goto('https://practice.expandtesting.com/dropdown');
    }

}