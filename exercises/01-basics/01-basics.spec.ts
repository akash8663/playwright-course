import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 1 task — see README.md in this folder.
test('Verify title and header of the page', async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  await expect(page).toHaveTitle("React • TodoMVC");
  await expect(page.locator("h1")).toHaveText("todos");
});