import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 2 task — see README.md in this folder.
test('Verify the textbox', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  
  await page.getByPlaceholder('What needs to be done?')
  .fill('gotta call the doctor to make an appointment'); 
  await page.keyboard.press('Enter');

  await page.getByPlaceholder('What needs to be done?')
  .fill('gotta call the doctor to make an appointment'); 
  await page.keyboard.press('Enter');
  
  await expect(page.getByText('gotta call the doctor to make an appointment').first()).toBeVisible();
  await page.getByText('gotta call the doctor to make an appointment').nth(0).click();
} )