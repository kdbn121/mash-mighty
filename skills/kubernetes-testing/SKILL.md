---
name: kubernetes-testing
description: Write and fix Kubernetes tests with kubeconform + smoke test. Use when adding tests or raising coverage in Kubernetes projects.
---

# Kubernetes testing

Tool: kubeconform + smoke test.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Kubernetes faults: no resource limits, running as root, single replica for critical apps.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
