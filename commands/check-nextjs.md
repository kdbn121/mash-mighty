---
name: check-nextjs
description: Run a full Next.js check - build, tests and review, then fix what fails.
---

Run on the current Next.js project (or $ARGUMENTS):

1. Use skill nextjs-build-fix with `npm run build`.
2. Use skill nextjs-testing to run and fill test gaps.
3. Use agent nextjs-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
