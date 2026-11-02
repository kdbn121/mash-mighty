---
name: check-tailwind
description: Run a full Tailwind CSS check - build, tests and review, then fix what fails.
---

Run on the current Tailwind CSS project (or $ARGUMENTS):

1. Use skill tailwind-build-fix with `npm run build`.
2. Use skill tailwind-testing to run and fill test gaps.
3. Use agent tailwind-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
