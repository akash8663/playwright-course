import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 4 task — see README.md in this folder.
test('Verify navigation to a new tab', async ({ page, context }) => {
  await page.goto('https://practice.expandtesting.com/windows');

  const pagePromise = context.waitForEvent('page');
  await page.getByRole('link', { name: 'Click Here' }).click();
  const newPage = await pagePromise;
  await expect(newPage).toHaveURL('https://practice.expandtesting.com/windows/new');
  await expect(newPage.getByRole('heading', { name: 'Example of a new window page for Automation Testing Practice' })).toBeVisible();

});