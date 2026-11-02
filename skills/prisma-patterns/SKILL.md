---
name: prisma-patterns
description: Idiomatic Prisma ORM patterns and structure. Use when writing or designing Prisma ORM code (prisma/schema.prisma).
---

# Prisma ORM patterns

Apply when writing new Prisma ORM code.

## Do
- one PrismaClient instance
- select only needed fields
- migrations reviewed before deploy

## Avoid
- new client per request
- N+1 via loops
- destructive migrations unreviewed

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Vitest with test DB.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
