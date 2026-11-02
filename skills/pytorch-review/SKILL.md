---
name: pytorch-review
description: Review PyTorch code for correctness, security, performance and idiom with severity labels. Use on any PyTorch change (import torch).
---

# PyTorch review

## Check first (common PyTorch faults)
- tensors on mixed devices
- forgetting zero_grad
- data leakage between splits

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: set seeds for reproducibility, model.eval() and no_grad for inference, check tensor shapes early.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
