---
name: aws-patterns
description: Idiomatic AWS patterns and structure. Use when writing or designing AWS code (aws config, CDK or SAM).
---

# AWS patterns

Apply when writing new AWS code.

## Do
- least-privilege IAM
- infrastructure as code
- alarms on key metrics

## Avoid
- public S3 buckets
- wildcard IAM policies
- no budget alerts

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with integration tests.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
