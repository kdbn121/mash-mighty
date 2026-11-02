---
name: django-patterns
description: Idiomatic Django patterns and structure. Use when writing or designing Django code (manage.py, settings.py).
---

# Django patterns

Apply when writing new Django code.

## Do
- fat models, thin views
- select_related/prefetch_related
- forms or serializers validate input

## Avoid
- N+1 queries in templates
- DEBUG=True in production
- raw SQL with string formatting

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with pytest-django.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
