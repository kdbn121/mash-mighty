---
name: ruby-rails-build-fix
description: Fix Ruby on Rails build, type, lint and runtime errors with minimal changes. Use when a Ruby on Rails build or check fails.
---

# Ruby on Rails build fix

Check command: `bin/rails test`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: callbacks doing too much, N+1 queries, unsafe raw SQL.

DONE: `bin/rails test` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
