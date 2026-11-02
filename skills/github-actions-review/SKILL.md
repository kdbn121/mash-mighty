---
name: github-actions-review
description: Review GitHub Actions CI code for correctness, security, performance and idiom with severity labels. Use on any GitHub Actions CI change (.github/workflows/*.yml).
---

# GitHub Actions CI review

## Check first (common GitHub Actions CI faults)
- secrets printed in logs
- pull_request_target misuse
- no timeout on jobs

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: pin actions to versions, cache dependencies, least-privilege permissions.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
