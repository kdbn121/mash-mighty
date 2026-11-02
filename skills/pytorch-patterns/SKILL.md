---
name: pytorch-patterns
description: Idiomatic PyTorch patterns and structure. Use when writing or designing PyTorch code (import torch).
---

# PyTorch patterns

Apply when writing new PyTorch code.

## Do
- set seeds for reproducibility
- model.eval() and no_grad for inference
- check tensor shapes early

## Avoid
- tensors on mixed devices
- forgetting zero_grad
- data leakage between splits

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with pytest.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
