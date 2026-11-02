---
name: node-express-review
description: Review Node.js + Express code for correctness, security, performance and idiom with severity labels. Use on any Node.js + Express change (express in package.json).
---

# Node.js + Express review

## Check first (common Node.js + Express faults)
- blocking the event loop with sync work
- missing await in handlers
- stack traces sent to clients

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: thin routes, logic in services, central error middleware, validate input with a schema.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
