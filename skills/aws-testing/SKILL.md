---
name: aws-testing
description: Write and fix AWS tests with integration tests. Use when adding tests or raising coverage in AWS projects.
---

# AWS testing

Tool: integration tests.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known AWS faults: public S3 buckets, wildcard IAM policies, no budget alerts.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
