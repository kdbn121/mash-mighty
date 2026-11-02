---
name: tkinter-desktop-review
description: Review Python desktop (Tkinter) code for correctness, security, performance and idiom with severity labels. Use on any Python desktop (Tkinter) change (import tkinter).
---

# Python desktop (Tkinter) review

## Check first (common Python desktop (Tkinter) faults)
- freezing UI with blocking calls
- touching widgets from worker threads
- hard-coded Windows paths

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: UI on main thread only, long work in threads with queue updates, separate UI from logic.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
