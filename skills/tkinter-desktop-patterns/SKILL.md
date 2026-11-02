---
name: tkinter-desktop-patterns
description: Idiomatic Python desktop (Tkinter) patterns and structure. Use when writing or designing Python desktop (Tkinter) code (import tkinter).
---

# Python desktop (Tkinter) patterns

Apply when writing new Python desktop (Tkinter) code.

## Do
- UI on main thread only
- long work in threads with queue updates
- separate UI from logic

## Avoid
- freezing UI with blocking calls
- touching widgets from worker threads
- hard-coded Windows paths

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with pytest for logic.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
