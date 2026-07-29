# Module 10 — Parallelism & CI

## Goal
Run the whole test suite automatically, in a clean environment, every time code is pushed — not just on your own machine. This is also where "workers" and "parallelism" (concepts you've been implicitly relying on all course — `fullyParallel: true`, multiple browser projects running at once) become something you configure deliberately for a CI environment, which has different constraints than your laptop.

## No spec file this time
This module doesn't produce a `.spec.ts` — the deliverable is a CI **workflow config file**, which lives at `.github/workflows/playwright.yml` in the project root (GitHub Actions' required location), not in `exercises/10-ci/`.

## Task
Write `.github/workflows/playwright.yml` yourself (not copied from Playwright's own scaffolding — that was deliberately stripped out when this project was set up) that:
1. Triggers on push (and ideally pull requests too).
2. Checks out the repo, sets up Node (match `.nvmrc` — Node 22).
3. Installs dependencies (`npm ci`, not `npm install` — faster and reproducible in CI since it uses the lockfile exactly).
4. Installs Playwright's browsers (`npx playwright install --with-deps`).
5. Runs `npx playwright test`.
6. Uploads the HTML report as a build artifact on failure, so you can download and inspect it without re-running locally (`actions/upload-artifact`).

Some things to research yourself as part of this (that's the point of a CI module — reading a platform's docs, not just an API):
- The exact YAML syntax for a GitHub Actions workflow (`on:`, `jobs:`, `steps:`).
- How `actions/setup-node` reads a `.nvmrc` automatically (there's an option for it).
- Whether your Module 7 `.env` secrets need special handling in CI (hint: GitHub Actions has its own "Secrets" feature for exactly this — a `.env` file won't exist on the CI runner since it's gitignored).

## Acceptance criteria
- `.github/workflows/playwright.yml` exists, committed and pushed.
- Pushing to GitHub triggers a run, visible in the repo's "Actions" tab.
- The run is **green** — meaning your Module 7 auth test needs its secrets available in CI too (via GitHub's repo Secrets settings, referenced in the workflow as `${{ secrets.SAUCEDEMO_USERNAME }}` etc.) — this is the practical test of whether Part A's "no hardcoded credentials" habit from Module 7 was actually followed through.

## Constraints
- No copying Playwright's own default-generated workflow file verbatim — write it from the steps above and what you learn from the docs.

## When you're done
Tell the mentor you're ready for review — I'll check the Actions tab on GitHub directly.
