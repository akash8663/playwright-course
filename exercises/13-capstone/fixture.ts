import { test as base } from "@playwright/test";
import { expect as baseExpect } from "@playwright/test";
import { LoginPage } from "./pages/login-page";
import { ProductPage } from "./pages/product-page";
import { CheckoutPage } from "./pages/checkout-page";

type SauceDemoFixtures = {
    LoginPage: LoginPage;
    LoginPage_storageState: LoginPage;
    ProductPage: ProductPage;
    CheckoutPage: CheckoutPage; 
}

export const test = base.extend<SauceDemoFixtures>({
    LoginPage: async ({ page }, use) => {

        const username = process.env.SAUCEDEMO_USERNAME;
        const password = process.env.SAUCEDEMO_PASSWORD;

        if (!username || !password) {
            throw new Error('Missing SAUCEDEMO_USERNAME or SAUCEDEMO_PASSWORD environment variable');
        };
        
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(username, password);
        await use(loginPage);
    },
    LoginPage_storageState: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.loadStorageState('standard-user.json');
        await use(loginPage);
    },
    ProductPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage);
    },
    CheckoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }

})

export const expect = baseExpect.extend({
  toBeAscending(received: number[]) {
    const pass = received.every((value, i, arr) => i === 0 || arr[i - 1] <= value);
    return {
      pass,
      name: 'toBeAscending',
      expected: 'ascending order',
      actual: received,
      message: () =>
        pass
          ? `Expected [${received}] not to be in ascending order`
          : `Expected [${received}] to be in ascending order`,
    };
  },
});