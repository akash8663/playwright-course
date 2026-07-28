# Prerequisites

Checked on 2026-07-27, before any project scaffolding.

| Tool | Required | Found | Status |
|---|---|---|---|
| Node.js | LTS (18/20/22) | initially v25.9.0 (non-LTS); learner switched to Node 22.23.1 via nvm-windows mid-setup | OK — matches `.nvmrc` (22) |
| npm | bundled with Node | 10.9.8 | OK |
| git | any recent | 2.54.0.windows.1 | OK |
| VS Code | any recent | 1.130.0 | OK |
| GitHub account | needed for module 10 (CI) | confirmed by learner | OK |

Note: this machine uses **nvm-windows** (`C:\Users\GameBoy\AppData\Local\nvm`) to manage Node versions. If a future session shows `node`/`npm` as not found, check `nvm list` / `nvm use 22` first, and restart VS Code after switching versions — VS Code and any shells spawned from it only pick up PATH/env changes made by nvm after a restart.

No blockers. Project scaffolding proceeded.

## Second machine — 2026-07-28

Resumed on a Mac (macOS/Darwin), switching from the Windows desktop above.

| Tool | Required | Found | Status |
|---|---|---|---|
| Node.js | 22.x (see `.nvmrc`) | v24.14.0 active by default; installed 22.23.1 via `nvm` and switched with `nvm use 22` | OK |
| npm | bundled with Node | 10.9.8 | OK |
| Dependencies | — | `node_modules` missing on this machine; ran `npm install` | OK |
| Playwright browsers | — | not previously installed on this machine; ran `npx playwright install` (chromium, firefox, webkit) | OK |

Note: this machine uses standard `nvm` (not `nvm-windows`). Run `nvm use 22` (or `nvm use`, reading `.nvmrc`) in any new terminal before working in this project — it does not persist automatically unless added to the shell profile.

Verified clean on this machine: `npx playwright test` (21/21 passed, 3 browsers) and `npx eslint .` (no errors).
