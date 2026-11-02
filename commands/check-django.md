---
name: check-django
description: Run a full Django check - build, tests and review, then fix what fails.
---

Run on the current Django project (or $ARGUMENTS):

1. Use skill django-build-fix with `python manage.py check --deploy`.
2. Use skill django-testing to run and fill test gaps.
3. Use agent django-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
