---
name: github-actions-build-fix
description: Fix GitHub Actions CI build, type, lint and runtime errors with minimal changes. Use when a GitHub Actions CI build or check fails.
---

# GitHub Actions CI build fix

Check command: `actionlint`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: secrets printed in logs, pull_request_target misuse, no timeout on jobs.

DONE: `actionlint` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
