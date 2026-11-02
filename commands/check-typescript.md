---
name: check-typescript
description: Run a full TypeScript check - build, tests and review, then fix what fails.
---

Run on the current TypeScript project (or $ARGUMENTS):

1. Use skill typescript-build-fix with `npx tsc --noEmit`.
2. Use skill typescript-testing to run and fill test gaps.
3. Use agent typescript-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
