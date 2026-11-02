---
name: github-actions-patterns
description: Idiomatic GitHub Actions CI patterns and structure. Use when writing or designing GitHub Actions CI code (.github/workflows/*.yml).
---

# GitHub Actions CI patterns

Apply when writing new GitHub Actions CI code.

## Do
- pin actions to versions
- cache dependencies
- least-privilege permissions

## Avoid
- secrets printed in logs
- pull_request_target misuse
- no timeout on jobs

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with act or test runs.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
