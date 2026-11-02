---
name: prisma-build-fix
description: Fix Prisma ORM build, type, lint and runtime errors with minimal changes. Use when a Prisma ORM build or check fails.
---

# Prisma ORM build fix

Check command: `npx prisma validate`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: new client per request, N+1 via loops, destructive migrations unreviewed.

DONE: `npx prisma validate` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
