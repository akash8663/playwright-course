# Glossary

Plain-language dictionary, one sentence per term. Grows whenever you ask "explain that simply" or "what does X mean?" — see [README.md](README.md).

**Test runner** — the program that finds your test files, runs them, and reports which passed or failed; in this project that's the `playwright test` command.

**Locator** — a saved description of "how to find an element on the page" (like "the button labeled Submit") that Playwright re-checks fresh every time you use it, instead of grabbing the element once and hoping it doesn't change.

**Fixture** — a reusable piece of setup (like "a logged-in page" or "a page object") that Playwright hands to your test automatically, so you don't repeat the same setup code in every test.

**Assertion** — a check that says "this should be true" (e.g. "this text should be visible") and fails the test loudly if it isn't.

**Headless** — running the browser without actually showing a window on screen; faster, and what CI machines use since nobody's watching. "Headed" is the opposite — you see the real browser window.

**Auto-waiting** — Playwright automatically pausing an action (like a click) until the element is actually ready (visible, enabled, stable), instead of you having to add manual delays.

**Trace viewer** — a tool that replays a test run step-by-step, screenshots and all, so you can see exactly what the browser did and where it went wrong.
