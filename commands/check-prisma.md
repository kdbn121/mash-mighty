---
name: check-prisma
description: Run a full Prisma ORM check - build, tests and review, then fix what fails.
---

Run on the current Prisma ORM project (or $ARGUMENTS):

1. Use skill prisma-build-fix with `npx prisma validate`.
2. Use skill prisma-testing to run and fill test gaps.
3. Use agent prisma-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
