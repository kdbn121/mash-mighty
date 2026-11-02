---
name: check-php-laravel
description: Run a full PHP / Laravel check - build, tests and review, then fix what fails.
---

Run on the current PHP / Laravel project (or $ARGUMENTS):

1. Use skill php-laravel-build-fix with `php artisan test`.
2. Use skill php-laravel-testing to run and fill test gaps.
3. Use agent php-laravel-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
