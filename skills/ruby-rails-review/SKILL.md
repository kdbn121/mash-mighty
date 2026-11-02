---
name: ruby-rails-review
description: Review Ruby on Rails code for correctness, security, performance and idiom with severity labels. Use on any Ruby on Rails change (Gemfile with rails).
---

# Ruby on Rails review

## Check first (common Ruby on Rails faults)
- callbacks doing too much
- N+1 queries
- unsafe raw SQL

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: convention over configuration, service objects for complex flows, strong parameters.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
