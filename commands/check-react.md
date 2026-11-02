---
name: check-react
description: Run a full React check - build, tests and review, then fix what fails.
---

Run on the current React project (or $ARGUMENTS):

1. Use skill react-build-fix with `npm run build`.
2. Use skill react-testing to run and fill test gaps.
3. Use agent react-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
