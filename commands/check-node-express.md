---
name: check-node-express
description: Run a full Node.js + Express check - build, tests and review, then fix what fails.
---

Run on the current Node.js + Express project (or $ARGUMENTS):

1. Use skill node-express-build-fix with `npm test`.
2. Use skill node-express-testing to run and fill test gaps.
3. Use agent node-express-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
