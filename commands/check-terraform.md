---
name: check-terraform
description: Run a full Terraform check - build, tests and review, then fix what fails.
---

Run on the current Terraform project (or $ARGUMENTS):

1. Use skill terraform-build-fix with `terraform plan`.
2. Use skill terraform-testing to run and fill test gaps.
3. Use agent terraform-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
