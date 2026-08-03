import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });
// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 7 task — see README.md in this folder.
test('auth', async ({ page }) => {

  const username = process.env.SAUCEDEMO_USERNAME;
  const password = process.env.SAUCEDEMO_PASSWORD;
  console.log(`Logging in with username: ${username} and password: ${password}`);
       
  if (!username || !password) {
    throw new Error('Missing SAUCEDEMO_USERNAME or SAUCEDEMO_PASSWORD environment variable');
  }

  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Products')).toBeVisible();
  await page.context().storageState({ path: 'playwright/.auth/user.json' });

});

test('auth with storage state', async ({ page, context }) => {

  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.getByRole('heading', { name: 'Epic sadface: You can only access \'/inventory.html\' when you are logged in.' })).toBeVisible();
  await context.setStorageState('playwright/.auth/user.json');
  
  await page.goto('https://www.saucedemo.com/inventory.html');
  await expect(page.getByText('Products')).toBeVisible();
});