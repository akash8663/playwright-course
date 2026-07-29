import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 5 task — see README.md in this folder.
test('Verify dropdown handling', async({page}) =>{
  await page.goto('https://practice.expandtesting.com/dropdown');
  await page.locator('#dropdown').selectOption({ label: 'Option 1' });
  await expect(page.locator('#dropdown')).toHaveValue('1');

  await page.locator('#country').selectOption({ value: 'BD' });
  await expect(page.locator('#country')).toHaveValue('BD');
  
})

test('Verify checkbox handling', async({page}) =>{
  await page.goto('https://practice.expandtesting.com/checkboxes');
  await page.getByLabel('Checkbox 1').check();
  await expect(page.getByLabel('Checkbox 1')).toBeChecked();

  
  await page.getByLabel('Checkbox 2').uncheck();
  await expect(page.getByLabel('Checkbox 2')).not.toBeChecked();
});