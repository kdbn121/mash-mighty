---
name: check-nestjs
description: Run a full NestJS check - build, tests and review, then fix what fails.
---

Run on the current NestJS project (or $ARGUMENTS):

1. Use skill nestjs-build-fix with `npm run build`.
2. Use skill nestjs-testing to run and fill test gaps.
3. Use agent nestjs-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
