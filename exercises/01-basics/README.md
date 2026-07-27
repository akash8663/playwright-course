# Module 1 — Basics

## Goal
Get a Playwright test running end-to-end: install, project anatomy, `test()`/`expect()`, headed vs headless, and the trace viewer.

## Target site
`https://demo.playwright.dev/todomvc`

## Task
Write a test in `01-basics.spec.ts` (this folder) that:
1. Navigates to the target site.
2. Asserts something about the page — the page title, or that a specific heading/element is visible.

Run it with:
```
npx playwright test exercises/01-basics
```
Then open the HTML report (`npx playwright show-report`) and, separately, force a failure on purpose (e.g. assert the wrong text) just to see what a failing report and trace look like — then fix it back. This is about building the habit of reading a trace before asking for help.

## Acceptance criteria
- Test passes via `npx playwright test exercises/01-basics`.
- Runs in at least one browser project (chromium/firefox/webkit).
- Uses `test()` and `expect()` from `@playwright/test` — not raw Playwright API without the test runner.

## Constraints
None beyond the above — this module is about getting the loop working.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
