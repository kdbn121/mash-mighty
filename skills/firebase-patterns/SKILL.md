---
name: firebase-patterns
description: Idiomatic Firebase patterns and structure. Use when writing or designing Firebase code (firebase.json).
---

# Firebase patterns

Apply when writing new Firebase code.

## Do
- security rules tested
- least-privilege rules
- batched writes

## Avoid
- open read/write rules
- unbounded queries cost
- admin SDK in client

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Firebase emulator tests.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
