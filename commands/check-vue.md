---
name: check-vue
description: Run a full Vue check - build, tests and review, then fix what fails.
---

Run on the current Vue project (or $ARGUMENTS):

1. Use skill vue-build-fix with `npm run build`.
2. Use skill vue-testing to run and fill test gaps.
3. Use agent vue-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
