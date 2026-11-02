---
name: check-pytorch
description: Run a full PyTorch check - build, tests and review, then fix what fails.
---

Run on the current PyTorch project (or $ARGUMENTS):

1. Use skill pytorch-build-fix with `python train.py --dry-run`.
2. Use skill pytorch-testing to run and fill test gaps.
3. Use agent pytorch-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
