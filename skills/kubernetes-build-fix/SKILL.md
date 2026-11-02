---
name: kubernetes-build-fix
description: Fix Kubernetes build, type, lint and runtime errors with minimal changes. Use when a Kubernetes build or check fails.
---

# Kubernetes build fix

Check command: `kubectl apply --dry-run=server -f .`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: no resource limits, running as root, single replica for critical apps.

DONE: `kubectl apply --dry-run=server -f .` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
