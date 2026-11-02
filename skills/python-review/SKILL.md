---
name: python-review
description: Review Python code for correctness, security, performance and idiom with severity labels. Use on any Python change (pyproject.toml, requirements.txt, .py).
---

# Python review

## Check first (common Python faults)
- mutable default arguments
- bare except clauses
- global state in modules

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: type hints everywhere, dataclasses or pydantic for data, context managers for resources.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
