# Module 5 — Forms & Input Handling

## Goal
Practice two more form-control types: dropdown/`<select>` menus and checkboxes. (Note: the original curriculum brief asked for one combined multi-field form, but `practice.expandtesting.com` splits these controls across separate pages with no unified submit flow — see CURRICULUM.md's note on this module. This version combines two pages instead.)

## Target sites
- `https://practice.expandtesting.com/dropdown`
- `https://practice.expandtesting.com/checkboxes`

## Task
Write two tests in `05-forms.spec.ts` (this folder):

1. **Dropdown test** — go to `/dropdown`, select an option using `selectOption`, and assert the selected value with a web-first assertion (`toHaveValue`).
2. **Checkbox test** — go to `/checkboxes`, check a checkbox with `.check()` and assert `toBeChecked()`, then uncheck it with `.uncheck()` and assert `not.toBeChecked()` — exercising both states.

## Acceptance criteria
- Both tests pass via `npx playwright test exercises/05-forms`.
- Dropdown test uses `selectOption` (not manually clicking option elements).
- Checkbox test asserts both the checked and unchecked state, each with `expect(locator).toX()`.

## Constraints
- No `page.waitForTimeout(...)`.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
