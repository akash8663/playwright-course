# Module 6 — Network

## Goal
Intercept a network request before it reaches a real server and fulfill it yourself with fake data — the core technique for testing UI behavior without depending on a real (and possibly flaky, rate-limited, or down) backend.

## Why no real target site this time
Every site on the stable practice-target list (TodoMVC, SauceDemo, expandtesting) either has no real backend API calls to intercept, or I can't verify their exact request/response shape without live-browsing them — and guessing would risk handing you a broken exercise. So this module uses a tiny self-contained page instead, built with `page.setContent()`, which loads arbitrary HTML directly into the browser without needing a real URL. This also makes the "must work even if the real backend is down" constraint literally true: there is no real backend at all.

## The fixture
Use this exact HTML via `page.setContent(...)` at the top of your test — it's the app under test, not something you need to write yourself:

```html
<!DOCTYPE html>
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
</html>
```

When the button is clicked, it calls `fetch('https://api.example.test/profile')` — a domain that doesn't actually exist. Without a mock, that fetch would fail. Your job is to make it succeed with fake data.

## Task
Write a test in `06-network.spec.ts` (this folder) that:
1. Loads the fixture above via `page.setContent(...)`.
2. **Before** clicking the button, registers a route handler with `page.route('https://api.example.test/profile', ...)` that calls `route.fulfill({ json: { name: 'Mock User' } })` (or the equivalent `contentType`/`body` form).
3. Clicks the "Load profile" button.
4. Asserts `#result` now shows `'Mock User'` using a web-first assertion.
5. Additionally, prove the app actually made the call — track that your route handler ran (e.g. a counter variable incremented inside it, checked with `expect(...)` after the click) or use `page.waitForRequest(...)` to confirm the request was fired.

## Acceptance criteria
- Test passes via `npx playwright test exercises/06-network`.
- Uses `page.route(...)` to intercept and `route.fulfill(...)` to mock the response — no real network call to `api.example.test` (which doesn't exist) ever needs to succeed.
- Asserts both the rendered UI content AND that the request was actually made.

## Constraints
- No `page.waitForTimeout(...)`.
- The test must not depend on any real external server responding — it should pass with your network disconnected.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
