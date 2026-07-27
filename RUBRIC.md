# Grading Rubric

This is the standard the mentor re-reads and applies on every review — not re-judged from memory each session. A submission is graded **PASS** or **FAIL**. On FAIL, the response names which item(s) below failed and why.

## 1. Automated checks (objective, must be clean)

Run before any manual read:

```
npx playwright test exercises/NN-topic
npx eslint exercises/NN-topic
```

- **Tests pass.** Run at least twice if a flake is suspected — a test that passes once and fails once is a FAIL (see §2, reliability).
- **Lint is clean.** `eslint-plugin-playwright` rules enforced (`eslint.config.js`):
  - `no-wait-for-timeout` — no hardcoded sleeps; use web-first waiting.
  - `no-element-handle` — no `page.$`/`ElementHandle`; use locators.
  - `prefer-web-first-assertions` — `expect(locator).toHaveText(...)`, not `expect(await locator.textContent())`.
  - `no-force-option` — no `{ force: true }` papering over a real locator/timing problem.
  - `expect-expect` — every test has at least one assertion.
  - `no-conditional-in-test` (warn) — flag `if`/`try` branching inside a test; ask the learner to justify it.

## 2. Manual judgment

- **Correctness.** The test actually verifies the stated task, not something trivially true. A test that only checks `page.title()` when the task asked for "todo item was added" is a FAIL even if green.
- **Reliability.** Passes consistently against the assigned stable practice target — not dependent on network timing luck or a brittle sleep.
- **Locator quality.** Prefers role/label/text-based locators over raw CSS/XPath, resilient to minor markup changes. Module 2 explicitly forbids CSS/XPath entirely.
- **Secrets handling.** No hardcoded credentials, tokens, or webhook URLs in any committed file. Auth state and `.env` stay out of git (modules 7, 11).
- **Scope.** Solves the assigned task — no unrelated refactors, no gold-plating beyond what the module asks.

## 3. Module-specific constraints

Some modules add hard constraints beyond the general rubric (e.g. "no CSS locators" in module 2, "must work with the real backend down" in module 6). These are listed per-task in [CURRICULUM.md](CURRICULUM.md) and are graded as automatic FAIL conditions if violated, regardless of whether the test otherwise passes.

## Reporting a result

PASS/FAIL is reported with specific line/reason references, e.g.:
> FAIL — §1 lint: `no-wait-for-timeout` at line 14. §2 locator quality: `page.locator('.btn-primary')` is a brittle CSS selector; use `getByRole('button', { name: ... })` instead.

On PASS, `PROGRESS.md` is updated and the next module is handed out.
