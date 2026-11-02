---
name: django-review
description: Review Django code for correctness, security, performance and idiom with severity labels. Use on any Django change (manage.py, settings.py).
---

# Django review

## Check first (common Django faults)
- N+1 queries in templates
- DEBUG=True in production
- raw SQL with string formatting

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: fat models, thin views, select_related/prefetch_related, forms or serializers validate input.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
