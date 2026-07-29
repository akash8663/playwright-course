# Playwright Mentor Track

A guided course from Playwright basics to advanced, run as a mentor/proctor relationship: Claude hands out one task at a time, you write all the code, and Claude reviews and grades it before unlocking the next task. Claude does not write exercise solutions in this project.

## How it works

1. **Concept first.** Before each task, the mentor gives a short plain-language explanation of the concept plus a worked example on a *different* site than the exercise target — you see the pattern without being handed the answer.
2. **Task.** The mentor presents the task from [CURRICULUM.md](CURRICULUM.md): goal, target site, acceptance criteria, and any constraints.
3. **You write the code** in the current module's `exercises/NN-topic/*.spec.ts` file.
4. **Hints, not answers.** Stuck? Ask for a hint — you'll get a nudge (a concept name, a doc pointer, a leading question), not code. From module 3 onward, if a test fails intermittently, the first hint is "open the trace viewer and diagnose it yourself" before the mentor explains the cause.
5. **Review.** When you say you're done, the mentor runs your test and lint, and grades against [RUBRIC.md](RUBRIC.md).
6. **PASS or FAIL**, with specific reasons. FAIL → revise and resubmit. PASS → [PROGRESS.md](PROGRESS.md) is updated, the changes are committed and pushed to GitHub, and the next module is handed out.

**At any point**, say "explain that simply" or "what does X mean?" and the mentor stops and re-explains in plain language, no jargon — this is always available, not a sign of falling behind. New terms get added to [GLOSSARY.md](GLOSSARY.md) as a running personal dictionary.

## Project layout

- `CURRICULUM.md` — the full module list and task briefs.
- `RUBRIC.md` — the grading standard (lint rules + manual checks), re-applied every review.
- `PROGRESS.md` — where you are.
- `GLOSSARY.md` — plain-language definitions, grows as you go.
- `PREREQUISITES.md` — environment check record (Node, git, VS Code, GitHub).
- `exercises/NN-topic/` — one folder per module; `README.md` brief always present, the `.spec.ts` stub only exists for the module currently in progress.

## Running things

```
npx playwright test                    # run everything
npx playwright test exercises/01-basics # run one module
npx playwright test --ui                # interactive UI mode
npx playwright show-report              # open the last HTML report
npx eslint .                            # lint check
```

## Environment

- Node 22 (see `.nvmrc`). This machine uses **nvm-windows** — if `node`/`npm` go missing mid-session after switching versions, restart VS Code (it only picks up PATH changes on launch).
- Secrets (Slack webhook URL in module 11, saved auth state in module 7) never get committed — see `.gitignore`.
