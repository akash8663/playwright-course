# Module 11 — Reporting & Integrations: Slack Notifications

## This module is intentionally less guided
Every other module has given you a fairly complete brief with a worked example. This one doesn't — you're meant to research and figure out the mechanism yourself, the way you'd have to on a real job when asked to "wire up Slack notifications for the test suite." I'll answer specific questions and unblock you if you're stuck, but I'm not handing you a recipe upfront.

## Goal
Whenever `npx playwright test` finishes, a message should land in a real Slack channel (in your own workspace) with a pass/fail/duration summary.

## What you'll need to figure out
- How to create a Slack **Incoming Webhook** for a channel in your own Slack workspace (Slack's own setup docs, not mine).
- Where the webhook URL should live (you already know this pattern from Module 7 — same rule applies, it's a secret).
- How Playwright lets you hook into "the run just finished" — there's a documented mechanism for writing your own reporter (`playwright.config.ts`'s `reporter` array already has an entry pattern you've seen: `['html']`, `['json', {...}]` — a custom one is the same shape, pointing at your own file instead of a built-in name).
- How to make an HTTP POST request from Node.js (no new library needed for this — something built into Node can do it).
- What data a Playwright reporter has access to about a finished run (pass count, fail count, duration) — the reporter API documents what gets passed to its lifecycle methods.

## Mentor pointers available on request
Ask if you want a nudge on any of:
- Playwright's custom reporter API (what interface/methods to implement).
- Making an HTTP request with `fetch` (built into Node 22, no install needed) or `https.request`.
- Where webhook secrets belong (same answer as Module 7).

## Acceptance criteria
- Running `npx playwright test` posts a real message to a real Slack channel with pass count, fail count, and duration.
- No webhook URL committed anywhere — check `git log -p` for it, not just the current working tree, since a secret committed once and later removed is still in history.

## Constraints
- No hardcoded webhook URL in any committed file, ever (including past commits).

## When you're done
Tell the mentor you're ready for review — I'll want to see the reporter code and confirm the webhook URL never touched git history.
