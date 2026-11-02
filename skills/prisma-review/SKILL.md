---
name: prisma-review
description: Review Prisma ORM code for correctness, security, performance and idiom with severity labels. Use on any Prisma ORM change (prisma/schema.prisma).
---

# Prisma ORM review

## Check first (common Prisma ORM faults)
- new client per request
- N+1 via loops
- destructive migrations unreviewed

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: one PrismaClient instance, select only needed fields, migrations reviewed before deploy.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
