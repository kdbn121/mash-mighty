---
name: django-build-fix
description: Fix Django build, type, lint and runtime errors with minimal changes. Use when a Django build or check fails.
---

# Django build fix

Check command: `python manage.py check --deploy`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: N+1 queries in templates, DEBUG=True in production, raw SQL with string formatting.

DONE: `python manage.py check --deploy` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
