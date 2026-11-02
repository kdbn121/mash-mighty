---
name: tkinter-desktop-testing
description: Write and fix Python desktop (Tkinter) tests with pytest for logic. Use when adding tests or raising coverage in Python desktop (Tkinter) projects.
---

# Python desktop (Tkinter) testing

Tool: pytest for logic.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Python desktop (Tkinter) faults: freezing UI with blocking calls, touching widgets from worker threads, hard-coded Windows paths.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
