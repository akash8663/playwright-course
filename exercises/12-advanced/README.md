# Module 12 — Advanced

## Goal
Test an API directly, with no browser involved at all — useful when you want to verify backend behavior without paying the cost of launching a browser, or when setting up test data via API calls before a UI test runs.

## Task — Part A: API testing with the `request` fixture
Write a test in `12-advanced.spec.ts` (this folder) that:
1. Uses Playwright's built-in `request` fixture (not `page`) to send a `GET` to `https://jsonplaceholder.typicode.com/posts/1`.
2. Asserts the response status is `200` (`expect(response.ok()).toBeTruthy()` or `expect(response.status()).toBe(200)`).
3. Parses the JSON body (`await response.json()`) and asserts on at least one field (e.g. `id` equals `1`).

No `page`, no `page.goto` — this test never opens a browser tab.

## Task — Part B: a flaky test, reflected on
You've actually already lived through a real flaky/intermittent test this course — Module 7's storage-state race under `fullyParallel: true` (it passed most of the time, failed when the state-consuming test happened to run before the state-creating one). Write a short paragraph in this README (below, under "My flaky test note") covering:
- What made it flaky (nondeterministic worker scheduling, not the test logic itself).
- How you confirmed the real cause (what reproduction step or evidence proved it, rather than just guessing).
- What you'd check first if a *new* unfamiliar flaky test showed up — specifically, how the trace viewer (`npx playwright show-trace <path>`, or the `trace: 'on-first-retry'` config already in `playwright.config.ts`) helps diagnose one you haven't seen before.

## My flaky test note
This particular test case was flaky because this test case is dependent on another test case. Because of this dependency, this test case needs to be run in serial after the first test case.

When I started debugging into it, I read the error message, and it was saying that this storagestate file was missing. That what pointed me out that the first test case, which is supposed to store that file, was not executed.

When the flaky test comes up, the first thing I would be checking is to run that particular test case in isolation and try to reproduce it. With the trace viewer, I will be able to see it in the Playwright console, which will be helpful to identify the root cause. 

## Acceptance criteria
- API test passes via `npx playwright test exercises/12-advanced`, uses `request` not `page`.
- Written flaky-test reflection present in this README.

## Constraints
- No `page.waitForTimeout(...)`.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
