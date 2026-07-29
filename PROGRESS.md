# Progress

Status per module. Updated by the mentor after each review.

| # | Module | Status | Attempts | Notes |
|---|---|---|---|---|
| 1 | Basics | passed | 1 | Solid first pass — title + heading assertions, web-first `expect`. Coaching note: prefer `getByRole` over tag selectors going forward. |
| 2 | Locators & Selectors | passed | 1 | Correctly triggered and resolved strict-mode ambiguity with role/text locators, no CSS/XPath. Coaching notes: `.first()`/`.nth(0)` are redundant together; avoid actions with no trailing assertion. |
| 3 | Actions & Assertions | passed | 2 | First submission failed lint (unnecessary `await` on locator creation caused `no-unused-locators` false positives) — fixed on resubmit. Good use of a negative assertion to verify checkbox scoping didn't leak between items. Learned `getByRole('listitem')` + string `.filter({hasText})` can replace `page.locator('li'/'label')` entirely. |
| 4 | Navigation & Multiple Pages | passed | 1 | Clean pass-then-click race with `context.waitForEvent('page')`, asserted URL + heading on the new page. Coaching note: initial submission hit a `ReferenceError` from forgetting to destructure `context` in the test's fixture parameters alongside `page` — worth remembering that every fixture (page, context, request, etc.) has to be explicitly requested in `{ }`, it's not auto-injected. |
| 5 | Forms & Input Handling | passed | 1 | Correct `selectOption`/`check`/`uncheck` usage, no stray `await` on locator creation (Module 3 lesson stuck). Coaching notes: mixed CSS ID selectors for dropdowns vs `getByLabel` for checkboxes — prefer role/label consistently; and assert initial state before acting to prove a transition actually happened rather than the control already being there by default. |
| 6 | Network | passed | 2 | First submission missed the "assert the request was actually made" criterion; fixed with `page.waitForRequest` set up before the click (correct race-avoidance ordering, same pattern as Module 4). Coaching note: the trailing `expect(request).toBeTruthy()` is trivially true and flagged by lint's `no-useless-await` — a real request-property assertion (`request.method()`/`request.url()`) would be more meaningful. |
| 7 | Authentication & State | passed | 2 | `.env`/dotenv wiring correct, no hardcoded secrets. Strong test design: asserts blocked-without-auth then works-with-reused-state in one flow, and used the real `context.setStorageState(path)` API (applies state to an existing context, not just at creation) — better than the mentor's own worked example. First submission raced under `fullyParallel: true` (reproduced: state-consuming test ran before state-creating test wrote the file); fixed with `test.describe.configure({ mode: 'serial' })` at the file's top level, verified with 3 fresh reruns (auth file deleted each time). |
| 8 | Test Organization | todo | 0 | |
| 9 | Visual & Accessibility | todo | 0 | |
| 10 | Parallelism & CI | todo | 0 | |
| 11 | Reporting & Integrations (Slack) | todo | 0 | |
| 12 | Advanced | todo | 0 | |
| 13 | Capstone | todo | 0 | |

Status values: `todo`, `in-progress`, `passed`, `failed` (failed = most recent submission failed review, revision expected).
