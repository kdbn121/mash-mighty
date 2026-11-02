---
name: node-express-patterns
description: Idiomatic Node.js + Express patterns and structure. Use when writing or designing Node.js + Express code (express in package.json).
---

# Node.js + Express patterns

Apply when writing new Node.js + Express code.

## Do
- thin routes, logic in services
- central error middleware
- validate input with a schema

## Avoid
- blocking the event loop with sync work
- missing await in handlers
- stack traces sent to clients

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest/Jest + Supertest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
