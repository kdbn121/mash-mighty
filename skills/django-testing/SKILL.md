---
name: django-testing
description: Write and fix Django tests with pytest-django. Use when adding tests or raising coverage in Django projects.
---

# Django testing

Tool: pytest-django.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Django faults: N+1 queries in templates, DEBUG=True in production, raw SQL with string formatting.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
