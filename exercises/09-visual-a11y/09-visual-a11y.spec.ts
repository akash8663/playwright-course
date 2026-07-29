import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 9 task — see README.md in this folder.
test('Visual verification of the page', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page).toHaveScreenshot('todo.png');
});

test('Accessibility verification of the page', async ({page}) => {
  await page.goto('https://demo.playwright.dev/todomvc');
  await expect(page.getByRole('textbox', { name: /what needs to be done/i })).toBeVisible();
});