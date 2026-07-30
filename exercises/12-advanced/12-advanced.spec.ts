import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 12 task — see README.md in this folder.
test('Run an API Test', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/todos/1');
  expect (response.status()).toBe(200);
  const data = await response.json();
  expect(data.id).toBe(1);
});