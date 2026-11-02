---
name: terraform-build-fix
description: Fix Terraform build, type, lint and runtime errors with minimal changes. Use when a Terraform build or check fails.
---

# Terraform build fix

Check command: `terraform plan`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: state committed to git, unpinned providers, apply without plan review.

DONE: `terraform plan` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
