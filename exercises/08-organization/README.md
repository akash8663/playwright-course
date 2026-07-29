# Module 8 — Test Organization

## Goal
Move from one-off scripts to organized, reusable test code: the Page Object Model (encapsulating a page's locators/actions in a class) and custom fixtures (Playwright handing your test a ready-to-use object instead of you constructing it inline every time).

## Task
Pick **one** prior exercise (your choice — Module 2's TodoMVC test, Module 5's forms, Module 7's auth flow, whichever you think benefits most) and refactor it in this folder:

1. Write a **Page Object class** for the target page: its locators as properties/getters, and its actions (e.g. `addTodo(text)`, `login(user, pass)`) as methods.
2. Write a **custom fixture** (extending `test` via `test.extend`) that constructs the Page Object and hands it to your tests — so tests receive it as a fixture parameter, the same way they already receive `page`.
3. Write **at least 2 tests** in `08-organization.spec.ts` that use the fixture instead of raw `page` calls.

## Acceptance criteria
- A Page Object class exists (in this folder, e.g. `pages/SomePage.ts` or inline — your call on file layout).
- A custom fixture provides an instance of that class to tests.
- At least 2 tests in `08-organization.spec.ts` use the fixture and pass via `npx playwright test exercises/08-organization`.

## Constraints
- No `page.waitForTimeout(...)`.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
