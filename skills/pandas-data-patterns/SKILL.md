---
name: pandas-data-patterns
description: Idiomatic pandas data work patterns and structure. Use when writing or designing pandas data work code (import pandas).
---

# pandas data work patterns

Apply when writing new pandas data work code.

## Do
- vectorised operations
- explicit dtypes
- method chaining with clear names

## Avoid
- chained assignment warnings ignored
- silent NaN propagation
- row loops with iterrows

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with pytest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
