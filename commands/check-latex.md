---
name: check-latex
description: Run a full LaTeX academic writing check - build, tests and review, then fix what fails.
---

Run on the current LaTeX academic writing project (or $ARGUMENTS):

1. Use skill latex-build-fix with `latexmk -pdf main.tex`.
2. Use skill latex-testing to run and fill test gaps.
3. Use agent latex-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
