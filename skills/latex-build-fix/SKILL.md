---
name: latex-build-fix
description: Fix LaTeX academic writing build, type, lint and runtime errors with minimal changes. Use when a LaTeX academic writing build or check fails.
---

# LaTeX academic writing build fix

Check command: `latexmk -pdf main.tex`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: undefined references, overfull boxes, inconsistent citation keys.

DONE: `latexmk -pdf main.tex` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
