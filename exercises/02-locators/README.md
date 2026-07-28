# Module 2 — Locators & Selectors

## Goal
Learn to find elements the resilient way: by role, label, or visible text — not by CSS classes or tag names, which break the moment a stylesheet or markup structure changes.

## Target site
`https://demo.playwright.dev/todomvc`

## Task
Write a test in `02-locators.spec.ts` (this folder) that, against TodoMVC:
1. Locates the "What needs to be done?" input using a role/label/placeholder-based locator (`getByPlaceholder`, `getByRole`, or `getByLabel`).
2. Types a todo item and presses Enter to add it.
3. Locates the newly added item in the list using a role/text-based locator (e.g. `getByText`, or `getByRole('listitem')` combined with a filter) and asserts it's visible.

Try triggering **strict mode**: write a locator that could match more than one element (e.g. `page.getByRole('listitem')` when there are 2+ todos) and call `.click()` on it directly without narrowing. Playwright will throw an error telling you it's ambiguous — read that error once, then fix it with `.filter()` or `.first()`/`.nth()` as appropriate. This is the "strictness mode" concept.

## Acceptance criteria
- Test passes via `npx playwright test exercises/02-locators`.
- Adds a todo item and asserts it appears in the list.
- Uses only role/label/text/placeholder-based locators.

## Constraints
- **No CSS selectors** (`page.locator('.class-name')`, `page.locator('ul > li')`, etc.).
- **No XPath** (`page.locator('//div[...]')`).

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
