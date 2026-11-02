---
name: mongodb-review
description: Review MongoDB code for correctness, security, performance and idiom with severity labels. Use on any MongoDB change (mongoose or mongodb driver).
---

# MongoDB review

## Check first (common MongoDB faults)
- unbounded arrays in documents
- missing indexes
- no transactions where needed

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: model for access patterns, indexes for every query filter, schema validation.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
