---
name: flask-patterns
description: Idiomatic Flask patterns and structure. Use when writing or designing Flask code (flask in requirements).
---

# Flask patterns

Apply when writing new Flask code.

## Do
- application factory
- blueprints per area
- config from environment

## Avoid
- app.run debug in production
- global request state misuse
- no CSRF on forms

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with pytest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
