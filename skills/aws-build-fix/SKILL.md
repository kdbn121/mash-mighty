---
name: aws-build-fix
description: Fix AWS build, type, lint and runtime errors with minimal changes. Use when a AWS build or check fails.
---

# AWS build fix

Check command: `aws sts get-caller-identity`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: public S3 buckets, wildcard IAM policies, no budget alerts.

DONE: `aws sts get-caller-identity` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
