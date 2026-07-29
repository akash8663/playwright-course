import { test, expect } from '@playwright/test';

// Sanity check so the suite stays green before you start. Replace/extend below.
test('sanity', async ({ page }) => {
  expect(page).toBeTruthy();
});

// TODO: implement the module 6 task — see README.md in this folder.
test('network', async ({ page }) => {
  const html = `<!DOCTYPE html>
                <html>
                <body>
                  <button id="load">Load profile</button>
                  <div id="result">not loaded</div>
                  <script>
                    document.getElementById('load').addEventListener('click', async () => {
                      const res = await fetch('https://api.example.test/profile');
                      const data = await res.json();
                      document.getElementById('result').textContent = data.name;
                    });
                  </script>
                </body>
                </html>`;

  await page.setContent(html);
  await page.route('https://api.example.test/profile', (route) => {
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ name: 'John Doe' }),
    });
  });
  const requestPromise = page.waitForRequest('https://api.example.test/profile');
  await page.getByRole('button', { name: 'Load profile' }).click();
  let request = await requestPromise;
  await expect(page.getByText('John Doe')).toBeVisible();
  await expect(request).toBeTruthy();

});