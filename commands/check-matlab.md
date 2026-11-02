---
name: check-matlab
description: Run a full MATLAB / Simulink check - build, tests and review, then fix what fails.
---

Run on the current MATLAB / Simulink project (or $ARGUMENTS):

1. Use skill matlab-build-fix with `runtests`.
2. Use skill matlab-testing to run and fill test gaps.
3. Use agent matlab-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
