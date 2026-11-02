---
name: check-javascript
description: Run a full JavaScript check - build, tests and review, then fix what fails.
---

Run on the current JavaScript project (or $ARGUMENTS):

1. Use skill javascript-build-fix with `npx eslint .`.
2. Use skill javascript-testing to run and fill test gaps.
3. Use agent javascript-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
