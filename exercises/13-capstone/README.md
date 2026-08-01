# Module 13 — Capstone

## No new concepts, no worked example
Every technique this needs, you've already used at least once across Modules 1–11. This module is about combining them into one coherent flow — the same kind of thing a real test suite for a real e-commerce site looks like. Draw on your own past exercises rather than waiting for a new pattern from me.

## Goal
A single, reliable end-to-end flow on `https://www.saucedemo.com`: **log in → browse/filter products → add to cart → checkout**, built the way a production test suite would be — organized, not a pile of raw `page` calls.

## Task
1. **Log in** — reuse your Module 7 approach (env-var credentials; storage state reuse is fair game here too, your call whether login belongs in a fixture).
2. **Browse and filter** — SauceDemo's product list has a sort dropdown (Module 5's `selectOption` territory). Pick at least one filter/sort action and verify it changed the displayed order or content.
3. **Add to cart** — add at least one product, verify the cart badge count updates.
4. **Checkout** — go through checkout to completion (fill the checkout info form, finish the order), and assert the order-complete confirmation is shown.
5. **Organize it** — Page Object(s) + custom fixture(s), same pattern as Module 8, covering this whole flow (not one raw `page` call per step in the test body).
6. **Network mocking, if it fits** — if any part of this flow makes a real request you could meaningfully mock (Module 6 territory), do it; if SauceDemo's flow doesn't really have a natural fit for this, that's fine, say so rather than forcing it in.
7. **Run in CI** — this should run as part of the existing GitHub Actions workflow from Module 10, with any needed secrets configured there.
8. **Slack report** — your Module 11 reporter should already fire for this automatically, since it's registered globally in `playwright.config.ts`. Confirm it does, don't rebuild it.

## Acceptance criteria
- The full flow passes reliably across **3 consecutive runs** (no flakiness — you know how to check this from Modules 7 and 10).
- Organized with Page Object Model + fixtures, not inline `page` calls throughout.
- Runs green in the Module 10 GitHub Actions workflow.
- Module 11's Slack reporter posts a summary for this run (already automatic — just confirm).

## Constraints
- No `page.waitForTimeout(...)`.
- No hardcoded credentials (same rule as Module 7).

## When you're done
Tell the mentor you're ready for review. This is the last one — I'll go through the whole flow carefully.
