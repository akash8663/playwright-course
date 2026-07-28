# Curriculum

Full task list, basic → advanced. Status for each module lives in [PROGRESS.md](PROGRESS.md). Grading standard lives in [RUBRIC.md](RUBRIC.md). Unfamiliar terms get added to [GLOSSARY.md](GLOSSARY.md) as we go.

Practice targets (stable, purpose-built, safe to hammer repeatedly):
- `https://demo.playwright.dev/todomvc` — basics, locators, actions, forms
- `https://www.saucedemo.com` — auth/login, forms, capstone e-commerce flow
- `https://practice.expandtesting.com` — network/upload/drag-drop edge cases

Only one exercise folder/spec stub exists at a time — the current task. Each module's folder and stub is created when that module is handed out.

---

## 1. Basics
**Folder:** `exercises/01-basics/`
Install Playwright, understand project anatomy, run a test, use `test()`/`expect()`, headed vs headless, open the trace viewer.
**Acceptance criteria:** a passing `.spec.ts` file against `demo.playwright.dev/todomvc` that navigates to the page and asserts the page title or a visible heading. Must run via `npx playwright test` and pass in at least one browser project.

## 2. Locators & Selectors
**Folder:** `exercises/02-locators/`
Role-based locators (`getByRole`), text/label/testid locators, locator chaining, strictness mode (locator must resolve to exactly one element).
**Acceptance criteria:** a test against TodoMVC that locates elements using only role/label/text-based locators (no raw CSS or XPath), adds at least one todo item, and asserts it appears in the list.
**Constraint:** no CSS selectors, no XPath.

## 3. Actions & Assertions
**Folder:** `exercises/03-actions/`
click/fill/check/select, Playwright's auto-waiting, `expect(locator)` web-first assertions vs manual assertions.
**Acceptance criteria:** a test that fills a form field, checks a checkbox, and uses at least two different `expect(locator).toX()` web-first assertions (not `expect(await locator.textContent())`).
**Constraint:** no `page.waitForTimeout`.

## 4. Navigation & Multiple Pages
**Folder:** `exercises/04-navigation/`
`page.goto`, waiting for navigation, handling popups, multiple tabs/browser contexts.
**Acceptance criteria:** a test that triggers a new tab/popup (or navigates through 2+ pages) and makes an assertion on the second page/tab.

## 5. Forms & Input Handling
**Folder:** `exercises/05-forms/`
Dropdowns/select, checkboxes. (Adjusted from the original brief: `practice.expandtesting.com` splits these controls across separate single-purpose pages with no unified submit/success flow, so this module combines two of them instead of one multi-field form.)
**Acceptance criteria:** two tests against `practice.expandtesting.com` — one selects an option on `/dropdown` and asserts the selected value, one checks then unchecks a checkbox on `/checkboxes` and asserts both states — using web-first assertions.

## 6. Network
**Folder:** `exercises/06-network/`
Waiting for responses (`page.waitForResponse`), intercepting/mocking requests (`page.route`), asserting on API calls made by the page.
**Acceptance criteria:** a test that mocks at least one network response with `page.route` and asserts the UI reflects the mocked data.
**Constraint:** no real network dependency for the mocked assertion — it must pass even if the real backend is down.

## 7. Authentication & State
**Folder:** `exercises/07-auth/`
Storage state reuse, login-once-reuse-session pattern, cookies/localStorage.
**Acceptance criteria:** log in to `saucedemo.com` once, save `storageState` to `playwright/.auth/user.json` (gitignored), and write a second test that reuses that state to reach a logged-in page without re-entering credentials.
**Constraint:** credentials must not be hardcoded in the spec file — use environment variables (`.env`, gitignored).

## 8. Test Organization
**Folder:** `exercises/08-organization/`
Fixtures, `test.beforeEach`/hooks, the Page Object Model, tags/annotations.
**Acceptance criteria:** refactor a prior exercise (learner's choice) into a Page Object class plus a custom fixture that provides it, with at least 2 tests using the fixture.

## 9. Visual & Accessibility
**Folder:** `exercises/09-visual-a11y/`
Screenshot assertions (`toHaveScreenshot`), basic accessibility checks.
**Acceptance criteria:** one test with a passing `toHaveScreenshot` baseline, and one test that checks basic accessibility (e.g. every form input has an accessible name/label) using role-based locators.

## 10. Parallelism & CI
**Folder:** `exercises/10-ci/`
Workers, sharding, retries, running headless in CI, GitHub Actions.
**Acceptance criteria:** a `.github/workflows/playwright.yml` (written by the learner, not scaffolded) that installs dependencies, installs browsers, and runs `npx playwright test` on push; verified by pushing to GitHub and getting a green run.

## 11. Reporting & Integrations — Slack Notifications
**Folder:** `exercises/11-slack-reporting/`
Learner-driven with mentor guidance, not a handed-over recipe: create a Slack Incoming Webhook in your own workspace, store the URL as a secret in `.env` (gitignored, reusing the module-7 pattern), and write a custom Playwright reporter (or a post-run script reading `test-results/results.json`, already configured as a JSON reporter output in `playwright.config.ts`) that posts a pass/fail/duration summary to the Slack channel after a run.
**Acceptance criteria:** running `npx playwright test` posts a message to a real Slack channel with pass count, fail count, and duration. No webhook URL committed anywhere in git history.
**Mentor pointers available on request:** Playwright's custom-reporter API, `fetch`/`https.request` for calling a webhook, where secrets belong.

## 12. Advanced
**Folder:** `exercises/12-advanced/`
Component testing basics, API testing with the `request` fixture, custom fixtures, debugging flaky tests, `codegen`.
**Acceptance criteria:** one test using the `request` fixture to call an API directly (no browser), and a short written note (in the exercise README) on a flaky test you diagnosed and how the trace viewer helped.

## 13. Capstone
**Folder:** `exercises/13-capstone/`
A multi-page flow on `saucedemo.com`: login → browse/filter products → add to cart → checkout, combining Page Object Model, fixtures, network mocking where relevant, running in CI, and firing the module-11 Slack report at the end of the run.
**Acceptance criteria:** the full flow passes reliably across 3 consecutive runs, is organized with POM + fixtures, runs in the GitHub Actions workflow from module 10, and posts its summary to Slack via module 11's reporter.
