---
name: flask-build-fix
description: Fix Flask build, type, lint and runtime errors with minimal changes. Use when a Flask build or check fails.
---

# Flask build fix

Check command: `python -m pytest`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: app.run debug in production, global request state misuse, no CSRF on forms.

DONE: `python -m pytest` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
