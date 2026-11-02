---
name: mongodb-patterns
description: Idiomatic MongoDB patterns and structure. Use when writing or designing MongoDB code (mongoose or mongodb driver).
---

# MongoDB patterns

Apply when writing new MongoDB code.

## Do
- model for access patterns
- indexes for every query filter
- schema validation

## Avoid
- unbounded arrays in documents
- missing indexes
- no transactions where needed

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with app tests with memory server.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
