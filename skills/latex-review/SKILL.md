---
name: latex-review
description: Review LaTeX academic writing code for correctness, security, performance and idiom with severity labels. Use on any LaTeX academic writing change (.tex and .bib files).
---

# LaTeX academic writing review

## Check first (common LaTeX academic writing faults)
- undefined references
- overfull boxes
- inconsistent citation keys

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: one sentence per line for diffs, biblatex or natbib consistently, figures as vector graphics.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
