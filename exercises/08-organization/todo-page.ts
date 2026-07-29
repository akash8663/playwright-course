import { expect, Locator, Page } from "@playwright/test";

export class TodoPage{
    readonly page: Page;
    readonly todoBox: Locator;
    readonly todoItem1: Locator;
    readonly todoItem2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.todoBox = page.getByPlaceholder('What needs to be done?')
        this.todoItem1 = page.getByRole('listitem').filter({ hasText: 'Pay bills' }).getByRole('checkbox');
        this.todoItem2 = page.getByRole('listitem').filter({ hasText: 'Collect rents' }).getByRole('checkbox');
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async addTodoItem(item: string) {
        await this.todoBox.fill(item);
        await this.todoBox.press('Enter');
    }

    async checkTodoItem(item: string) {
        const todoItem = this.page.getByRole('listitem').filter({ hasText: item }).getByRole('checkbox');
        await todoItem.check();
        await expect(todoItem).toBeChecked();
    }

    async verifyTodoItemChecked(item: string) {
        const todoItem = this.page.getByRole('listitem').filter({ hasText: item }).getByRole('checkbox');
        await expect(todoItem).toBeChecked();
    }

    async verifyTodoItemNotChecked(item: string) {
        const todoItem = this.page.getByRole('listitem').filter({ hasText: item }).getByRole('checkbox');
        await expect(todoItem).not.toBeChecked();
    }

}