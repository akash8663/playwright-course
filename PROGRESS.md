# Progress

Status per module. Updated by the mentor after each review.

| # | Module | Status | Attempts | Notes |
|---|---|---|---|---|
| 1 | Basics | passed | 1 | Solid first pass — title + heading assertions, web-first `expect`. Coaching note: prefer `getByRole` over tag selectors going forward. |
| 2 | Locators & Selectors | passed | 1 | Correctly triggered and resolved strict-mode ambiguity with role/text locators, no CSS/XPath. Coaching notes: `.first()`/`.nth(0)` are redundant together; avoid actions with no trailing assertion. |
| 3 | Actions & Assertions | passed | 2 | First submission failed lint (unnecessary `await` on locator creation caused `no-unused-locators` false positives) — fixed on resubmit. Good use of a negative assertion to verify checkbox scoping didn't leak between items. Learned `getByRole('listitem')` + string `.filter({hasText})` can replace `page.locator('li'/'label')` entirely. |
| 4 | Navigation & Multiple Pages | passed | 1 | Clean pass-then-click race with `context.waitForEvent('page')`, asserted URL + heading on the new page. Coaching note: initial submission hit a `ReferenceError` from forgetting to destructure `context` in the test's fixture parameters alongside `page` — worth remembering that every fixture (page, context, request, etc.) has to be explicitly requested in `{ }`, it's not auto-injected. |
| 5 | Forms & Input Handling | todo | 0 | |
| 6 | Network | todo | 0 | |
| 7 | Authentication & State | todo | 0 | |
| 8 | Test Organization | todo | 0 | |
| 9 | Visual & Accessibility | todo | 0 | |
| 10 | Parallelism & CI | todo | 0 | |
| 11 | Reporting & Integrations (Slack) | todo | 0 | |
| 12 | Advanced | todo | 0 | |
| 13 | Capstone | todo | 0 | |

Status values: `todo`, `in-progress`, `passed`, `failed` (failed = most recent submission failed review, revision expected).
