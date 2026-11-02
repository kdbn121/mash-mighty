---
name: fastapi-patterns
description: Idiomatic FastAPI patterns and structure. Use when writing or designing FastAPI code (fastapi in requirements).
---

# FastAPI patterns

Apply when writing new FastAPI code.

## Do
- Pydantic models for every body
- dependencies for auth and DB
- async only with async libraries

## Avoid
- blocking calls inside async routes
- missing response_model leaks fields
- DB sessions not closed

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with pytest + httpx.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
