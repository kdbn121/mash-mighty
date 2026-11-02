---
name: php-laravel-review
description: Review PHP / Laravel code for correctness, security, performance and idiom with severity labels. Use on any PHP / Laravel change (artisan, composer.json).
---

# PHP / Laravel review

## Check first (common PHP / Laravel faults)
- mass assignment holes
- N+1 queries
- logic in blade views

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: form requests for validation, Eloquent relations with eager loading, jobs for slow work.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
