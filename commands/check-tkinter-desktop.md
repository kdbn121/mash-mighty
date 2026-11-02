---
name: check-tkinter-desktop
description: Run a full Python desktop (Tkinter) check - build, tests and review, then fix what fails.
---

Run on the current Python desktop (Tkinter) project (or $ARGUMENTS):

1. Use skill tkinter-desktop-build-fix with `python -m py_compile app.py`.
2. Use skill tkinter-desktop-testing to run and fill test gaps.
3. Use agent tkinter-desktop-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
