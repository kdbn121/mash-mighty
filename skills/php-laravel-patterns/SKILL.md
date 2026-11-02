---
name: php-laravel-patterns
description: Idiomatic PHP / Laravel patterns and structure. Use when writing or designing PHP / Laravel code (artisan, composer.json).
---

# PHP / Laravel patterns

Apply when writing new PHP / Laravel code.

## Do
- form requests for validation
- Eloquent relations with eager loading
- jobs for slow work

## Avoid
- mass assignment holes
- N+1 queries
- logic in blade views

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with PHPUnit or Pest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
