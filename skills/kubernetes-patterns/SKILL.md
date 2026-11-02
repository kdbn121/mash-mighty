---
name: kubernetes-patterns
description: Idiomatic Kubernetes patterns and structure. Use when writing or designing Kubernetes code (k8s yaml, Helm charts).
---

# Kubernetes patterns

Apply when writing new Kubernetes code.

## Do
- requests and limits set
- liveness and readiness probes
- config in ConfigMaps and Secrets

## Avoid
- no resource limits
- running as root
- single replica for critical apps

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with kubeconform + smoke test.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
