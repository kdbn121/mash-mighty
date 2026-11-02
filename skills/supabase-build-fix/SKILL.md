---
name: supabase-build-fix
description: Fix Supabase build, type, lint and runtime errors with minimal changes. Use when a Supabase build or check fails.
---

# Supabase build fix

Check command: `supabase db lint`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: RLS disabled, service key in browser, unindexed policy columns.

DONE: `supabase db lint` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
