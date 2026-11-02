---
name: ruby-rails-patterns
description: Idiomatic Ruby on Rails patterns and structure. Use when writing or designing Ruby on Rails code (Gemfile with rails).
---

# Ruby on Rails patterns

Apply when writing new Ruby on Rails code.

## Do
- convention over configuration
- service objects for complex flows
- strong parameters

## Avoid
- callbacks doing too much
- N+1 queries
- unsafe raw SQL

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with RSpec or Minitest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
