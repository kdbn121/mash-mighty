---
name: kubernetes-review
description: Review Kubernetes code for correctness, security, performance and idiom with severity labels. Use on any Kubernetes change (k8s yaml, Helm charts).
---

# Kubernetes review

## Check first (common Kubernetes faults)
- no resource limits
- running as root
- single replica for critical apps

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: requests and limits set, liveness and readiness probes, config in ConfigMaps and Secrets.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
