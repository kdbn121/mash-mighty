---
name: pandas-data-build-fix
description: Fix pandas data work build, type, lint and runtime errors with minimal changes. Use when a pandas data work build or check fails.
---

# pandas data work build fix

Check command: `python -m pytest`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: chained assignment warnings ignored, silent NaN propagation, row loops with iterrows.

DONE: `python -m pytest` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
