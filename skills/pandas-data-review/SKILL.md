---
name: pandas-data-review
description: Review pandas data work code for correctness, security, performance and idiom with severity labels. Use on any pandas data work change (import pandas).
---

# pandas data work review

## Check first (common pandas data work faults)
- chained assignment warnings ignored
- silent NaN propagation
- row loops with iterrows

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: vectorised operations, explicit dtypes, method chaining with clear names.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
