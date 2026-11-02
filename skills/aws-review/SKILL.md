---
name: aws-review
description: Review AWS code for correctness, security, performance and idiom with severity labels. Use on any AWS change (aws config, CDK or SAM).
---

# AWS review

## Check first (common AWS faults)
- public S3 buckets
- wildcard IAM policies
- no budget alerts

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: least-privilege IAM, infrastructure as code, alarms on key metrics.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
