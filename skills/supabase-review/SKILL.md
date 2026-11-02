---
name: supabase-review
description: Review Supabase code for correctness, security, performance and idiom with severity labels. Use on any Supabase change (supabase/ folder or client).
---

# Supabase review

## Check first (common Supabase faults)
- RLS disabled
- service key in browser
- unindexed policy columns

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: row level security on every table, server-side service key only, typed client from generated types.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
