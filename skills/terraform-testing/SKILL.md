---
name: terraform-testing
description: Write and fix Terraform tests with terraform validate + plan. Use when adding tests or raising coverage in Terraform projects.
---

# Terraform testing

Tool: terraform validate + plan.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Terraform faults: state committed to git, unpinned providers, apply without plan review.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
