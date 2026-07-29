# Module 9 — Visual & Accessibility

## Goal
Two new kinds of check that aren't about functional behavior: visual regression (does the page still *look* right?) and basic accessibility (can the page be used without sight — every control needs an accessible name).

## Target site
`https://demo.playwright.dev/todomvc`

## Task
Write two tests in `09-visual-a11y.spec.ts` (this folder):

1. **Screenshot test** — navigate to TodoMVC and assert `expect(page).toHaveScreenshot()`. The first run has no baseline yet, so it will fail and generate one (Playwright names it per-OS/browser automatically, e.g. `...-chromium-darwin.png`) — run it once to create the baseline, then run again to confirm it now passes against that baseline.
2. **Accessibility test** — using only role-based locators (no CSS), assert that the "What needs to be done?" input has an accessible name (e.g. `expect(page.getByRole('textbox', { name: /what needs to be done/i })).toBeVisible()` — being able to locate it *by* its accessible name is itself proof it has one).

## Acceptance criteria
- Both tests pass via `npx playwright test exercises/09-visual-a11y`.
- The screenshot test has a committed baseline image that it passes against (not just "creates one and never checks it again").
- The accessibility test uses role-based locators only.

## Constraints
- No `page.waitForTimeout(...)`.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
