---
name: terraform-review
description: Review Terraform code for correctness, security, performance and idiom with severity labels. Use on any Terraform change (*.tf files).
---

# Terraform review

## Check first (common Terraform faults)
- state committed to git
- unpinned providers
- apply without plan review

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: remote state with locking, modules for reuse, variables typed and validated.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
