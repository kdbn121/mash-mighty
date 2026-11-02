---
name: python-patterns
description: Idiomatic Python patterns and structure. Use when writing or designing Python code (pyproject.toml, requirements.txt, .py).
---

# Python patterns

Apply when writing new Python code.

## Do
- type hints everywhere
- dataclasses or pydantic for data
- context managers for resources

## Avoid
- mutable default arguments
- bare except clauses
- global state in modules

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with pytest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
