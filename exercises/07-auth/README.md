# Module 7 — Authentication & State

## Goal
Log in once, save the authenticated session, and reuse it — instead of re-entering credentials and clicking through a login form in every single test that needs to be logged in.

## Target site
`https://www.saucedemo.com` — public test credentials are shown right on its login page (`standard_user` / `secret_sauce`), so they're fine to use, but you'll still handle them like real secrets for the exercise (see below).

## Part A — credentials via environment variables
1. Create a file named `.env` in the project root (already gitignored — check `.gitignore`) with:
   ```
   SAUCEDEMO_USERNAME=standard_user
   SAUCEDEMO_PASSWORD=secret_sauce
   ```
2. Install a way to load it: `npm install --save-dev dotenv`.
3. In `playwright.config.ts`, there are already commented-out lines at the top for this — uncomment them (the `import dotenv` and `dotenv.config(...)` lines).
4. In your spec file, read the values with `process.env.SAUCEDEMO_USERNAME` / `process.env.SAUCEDEMO_PASSWORD`. **No credential string literals in the `.spec.ts` file.**

## Part B — save and reuse storage state
1. Log in on `saucedemo.com` using the env-var credentials, and confirm you land on the inventory page.
2. Save the authenticated session with `await page.context().storageState({ path: 'playwright/.auth/user.json' })` (already gitignored).
3. Prove the saved state actually works: open a **new** browser context using that saved file (`browser.newContext({ storageState: 'playwright/.auth/user.json' })`), open a new page in it, navigate straight to the inventory URL, and assert you're logged in — without filling the login form again.

## A real gotcha worth knowing about
This project's `playwright.config.ts` has `fullyParallel: true`, which means Playwright is free to run tests **in any order, in different worker processes**. If you write this as two separate `test(...)` blocks — one that saves the file, one that reads it — there's a race: the second test might run before the first one has created the file, and you'd get an intermittent, hard-to-reproduce failure.

Two ways to avoid it, your choice:
- **Simplest:** do it all in **one** `test()` — log in, save state, open a second context from that state, assert — no cross-test ordering to worry about.
- **If you want two separate tests:** wrap them in `test.describe.serial('auth', () => { ... })`, which forces Playwright to run them in order, in the same worker, regardless of `fullyParallel`.

## Acceptance criteria
- No hardcoded credentials anywhere in `07-auth.spec.ts` — env vars only.
- `.env` is not committed (verify with `git status` — it shouldn't appear).
- Storage state is saved to `playwright/.auth/user.json` and successfully reused to reach a logged-in page without re-submitting the login form.

## Constraints
- No `page.waitForTimeout(...)`.
- No hardcoded secrets/credentials in the spec file.

## When you're done
Tell the mentor you're ready for review. If you get stuck, ask for a hint before asking for the answer.
