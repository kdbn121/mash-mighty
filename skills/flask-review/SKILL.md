---
name: flask-review
description: Review Flask code for correctness, security, performance and idiom with severity labels. Use on any Flask change (flask in requirements).
---

# Flask review

## Check first (common Flask faults)
- app.run debug in production
- global request state misuse
- no CSRF on forms

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: application factory, blueprints per area, config from environment.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
