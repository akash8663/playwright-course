import { test, expect } from './fixture';
import { CheckoutPage } from './pages/checkout-page';

test.describe.configure({ mode: 'serial' });
// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

test('Verify user can login to the App', async ({ LoginPage, ProductPage, CheckoutPage }) => {

  expect(await LoginPage.isLoggedIn()).toBeTruthy();
  await LoginPage.saveStorageState();

  await ProductPage.sortProducts('Price (low to high)');
  expect(await ProductPage.getProductPrices()).toBeAscending();

  await ProductPage.addProductToCart('Sauce Labs Backpack');
  expect(await ProductPage.getCartItemCount()).toBe('1');
  
  await ProductPage.goToCheckout();
  expect(await CheckoutPage.isLoaded()).toBeTruthy();

  await CheckoutPage.fillCheckoutInformation('John', 'Doe', '12345');
  await CheckoutPage.continueCheckout();
  expect(await CheckoutPage.checkoutOverviewTitle.isVisible()).toBeTruthy();
  
});

