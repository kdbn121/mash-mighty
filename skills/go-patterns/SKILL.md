---
name: go-patterns
description: Idiomatic Go patterns and structure. Use when writing or designing Go code (go.mod).
---

# Go patterns

Apply when writing new Go code.

## Do
- return errors, wrap with context
- small interfaces at the consumer
- context passed first

## Avoid
- ignored errors
- goroutine leaks
- data races on maps

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with go test.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
