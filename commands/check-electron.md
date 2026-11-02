---
name: check-electron
description: Run a full Electron desktop check - build, tests and review, then fix what fails.
---

Run on the current Electron desktop project (or $ARGUMENTS):

1. Use skill electron-build-fix with `npm run make`.
2. Use skill electron-testing to run and fill test gaps.
3. Use agent electron-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
