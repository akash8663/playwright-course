import { test as base } from "@playwright/test";
import { FormPage } from "./form-page";
import { TodoPage } from "./todo-page";

type MyFixtures = {
    formPage: FormPage;
    todoPage: TodoPage;
}

export const test = base.extend<MyFixtures>({
    formPage: async ({ page }, use) => { 
        const formPage = new FormPage(page); 
        await formPage.gotoDropdownPage();
        await use(formPage);
    },
    todoPage: async ({ page }, use) => {
        const todoPage = new TodoPage(page);
        await todoPage.goto();
        await use(todoPage);
    }

})

export { expect } from '@playwright/test';