import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 3 task — see README.md in this folder.
test('Verify e2e happy path', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  const todoBox = page.getByPlaceholder('What needs to be done?');
  await todoBox.fill('Pay bills');
  await todoBox.press('Enter');
  await todoBox.fill('Collect rents');
  await todoBox.press('Enter');
  const todoItem1 = page.getByRole('listitem').filter({ hasText: 'Pay bills' }).getByRole('checkbox');

  await todoItem1.check();
  await expect(todoItem1).toBeChecked();

  const todoItem2 = page.getByRole('listitem').filter({ hasText: 'Collect rents' }).getByRole('checkbox');
  await expect(todoItem2).not.toBeChecked();
});