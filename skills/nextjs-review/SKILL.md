---
name: nextjs-review
description: Review Next.js code for correctness, security, performance and idiom with severity labels. Use on any Next.js change (next.config.*, app/ or pages/).
---

# Next.js review

## Check first (common Next.js faults)
- client-only code in server components
- hydration mismatch from Date or random
- secrets exposed via NEXT_PUBLIC_

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: server components by default, fetch on the server, cache deliberately, route handlers for APIs.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
