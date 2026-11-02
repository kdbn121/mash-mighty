---
name: tkinter-desktop-build-fix
description: Fix Python desktop (Tkinter) build, type, lint and runtime errors with minimal changes. Use when a Python desktop (Tkinter) build or check fails.
---

# Python desktop (Tkinter) build fix

Check command: `python -m py_compile app.py`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: freezing UI with blocking calls, touching widgets from worker threads, hard-coded Windows paths.

DONE: `python -m py_compile app.py` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
