---
name: fastapi-build-fix
description: Fix FastAPI build, type, lint and runtime errors with minimal changes. Use when a FastAPI build or check fails.
---

# FastAPI build fix

Check command: `python -m pytest`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: blocking calls inside async routes, missing response_model leaks fields, DB sessions not closed.

DONE: `python -m pytest` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
