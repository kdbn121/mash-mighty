---
name: vercel-review
description: Review Vercel deploys code for correctness, security, performance and idiom with severity labels. Use on any Vercel deploys change (vercel.json, .vercel).
---

# Vercel deploys review

## Check first (common Vercel deploys faults)
- missing env vars in production
- large serverless bundles
- uncached heavy pages

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: env vars per environment, preview deploys per branch, edge only where needed.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
