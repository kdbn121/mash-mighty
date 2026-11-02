---
name: supabase-patterns
description: Idiomatic Supabase patterns and structure. Use when writing or designing Supabase code (supabase/ folder or client).
---

# Supabase patterns

Apply when writing new Supabase code.

## Do
- row level security on every table
- server-side service key only
- typed client from generated types

## Avoid
- RLS disabled
- service key in browser
- unindexed policy columns

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with app tests.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
