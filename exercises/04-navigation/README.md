# Module 4 — Navigation & Multiple Pages

## Goal
Handle the case where an action opens a *new* tab/window instead of navigating the current one — a `Page` object only represents one tab, so you need to explicitly capture the new one.

## Target site
`https://practice.expandtesting.com/windows`

## Task
Write a test in `04-navigation.spec.ts` (this folder) that:
1. Navigates to the target site.
2. Clicks the link that opens a new browser window/tab.
3. Captures the **new** page/tab as its own `Page` object (you'll need `context.waitForEvent('page')` or `page.waitForEvent('popup')` started *before* the click, since the click is what triggers the new page).
4. Makes an assertion on the **new** page — e.g. its URL or heading text — proving you're actually looking at the second tab, not the first.

## Acceptance criteria
- Test passes via `npx playwright test exercises/04-navigation`.
- Correctly waits for and captures the new page/tab (not a fixed delay).
- Asserts something on the new page specifically.

## Constraints
- No `page.waitForTimeout(...)`.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
