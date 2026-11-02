---
name: check-kubernetes
description: Run a full Kubernetes check - build, tests and review, then fix what fails.
---

Run on the current Kubernetes project (or $ARGUMENTS):

1. Use skill kubernetes-build-fix with `kubectl apply --dry-run=server -f .`.
2. Use skill kubernetes-testing to run and fill test gaps.
3. Use agent kubernetes-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
