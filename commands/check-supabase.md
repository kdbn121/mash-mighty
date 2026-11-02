---
name: check-supabase
description: Run a full Supabase check - build, tests and review, then fix what fails.
---

Run on the current Supabase project (or $ARGUMENTS):

1. Use skill supabase-build-fix with `supabase db lint`.
2. Use skill supabase-testing to run and fill test gaps.
3. Use agent supabase-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
