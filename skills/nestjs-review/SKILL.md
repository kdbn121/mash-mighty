---
name: nestjs-review
description: Review NestJS code for correctness, security, performance and idiom with severity labels. Use on any NestJS change (@nestjs/core in package.json).
---

# NestJS review

## Check first (common NestJS faults)
- circular module imports
- business logic in controllers
- missing global validation pipe

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: modules per feature, DTOs with validation pipes, guards for auth.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
