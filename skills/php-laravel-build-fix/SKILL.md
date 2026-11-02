---
name: php-laravel-build-fix
description: Fix PHP / Laravel build, type, lint and runtime errors with minimal changes. Use when a PHP / Laravel build or check fails.
---

# PHP / Laravel build fix

Check command: `php artisan test`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: mass assignment holes, N+1 queries, logic in blade views.

DONE: `php artisan test` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
