---
name: pytorch-build-fix
description: Fix PyTorch build, type, lint and runtime errors with minimal changes. Use when a PyTorch build or check fails.
---

# PyTorch build fix

Check command: `python train.py --dry-run`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: tensors on mixed devices, forgetting zero_grad, data leakage between splits.

DONE: `python train.py --dry-run` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
