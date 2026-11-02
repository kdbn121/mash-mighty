---
name: nestjs-patterns
description: Idiomatic NestJS patterns and structure. Use when writing or designing NestJS code (@nestjs/core in package.json).
---

# NestJS patterns

Apply when writing new NestJS code.

## Do
- modules per feature
- DTOs with validation pipes
- guards for auth

## Avoid
- circular module imports
- business logic in controllers
- missing global validation pipe

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Jest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
