import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async isLoggedIn() {
        return await this.page.getByText('Products').isVisible();
    }

    async saveStorageState() { 
        await this.page.context().storageState({ path: 'storageState/.auth/standard-user.json' });
    }

    async loadStorageState(fileName: string) {
        await this.page.context().setStorageState(`storageState/.auth/${fileName}`);
    }
}
