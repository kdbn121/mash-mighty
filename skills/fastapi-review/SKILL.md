---
name: fastapi-review
description: Review FastAPI code for correctness, security, performance and idiom with severity labels. Use on any FastAPI change (fastapi in requirements).
---

# FastAPI review

## Check first (common FastAPI faults)
- blocking calls inside async routes
- missing response_model leaks fields
- DB sessions not closed

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: Pydantic models for every body, dependencies for auth and DB, async only with async libraries.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
