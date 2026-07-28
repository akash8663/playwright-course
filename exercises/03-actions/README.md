# Module 3 — Actions & Assertions

## Goal
Practice the other core actions beyond fill/click — `check`/`uncheck` — and get comfortable with Playwright's auto-waiting (it retries an action until the element is actually ready, so you shouldn't need manual delays).

## Target site
`https://demo.playwright.dev/todomvc`

## Task
Write a test in `03-actions.spec.ts` (this folder) that:
1. Adds a new todo item (reuse what you built in Module 2, or use `.fill()` + `.press('Enter')`).
2. **Checks** that item's checkbox to mark it complete, using `.check()` (not `.click()` — `.check()` is the semantically correct action for a checkbox and is a no-op if it's already checked).
3. Asserts the checkbox is checked using `expect(locator).toBeChecked()`.
4. Asserts a *second*, different thing with a web-first assertion — e.g. that the item's text now has the `completed` styling class (`toHaveClass`), or that the "1 item left" counter updated (`toHaveText`).

## Acceptance criteria
- Test passes via `npx playwright test exercises/03-actions`.
- Uses `.check()` for the checkbox action (not `.click()`).
- Uses at least two different `expect(locator).toX()` web-first assertions.

## Constraints
- **No `page.waitForTimeout(...)`.** If you feel like you need a manual delay, that's a sign an assertion should come first — Playwright's web-first assertions already retry/wait for you.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
