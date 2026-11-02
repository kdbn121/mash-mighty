---
name: python-build-fix
description: Fix Python build, type, lint and runtime errors with minimal changes. Use when a Python build or check fails.
---

# Python build fix

Check command: `python -m pytest && ruff check .`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: mutable default arguments, bare except clauses, global state in modules.

DONE: `python -m pytest && ruff check .` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
