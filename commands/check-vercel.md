---
name: check-vercel
description: Run a full Vercel deploys check - build, tests and review, then fix what fails.
---

Run on the current Vercel deploys project (or $ARGUMENTS):

1. Use skill vercel-build-fix with `vercel build`.
2. Use skill vercel-testing to run and fill test gaps.
3. Use agent vercel-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
