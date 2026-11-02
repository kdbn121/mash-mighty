---
name: docker-review
description: Review Docker code for correctness, security, performance and idiom with severity labels. Use on any Docker change (Dockerfile, compose.yaml).
---

# Docker review

## Check first (common Docker faults)
- secrets baked into images
- huge images from build tools
- latest tag drift

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: multi-stage builds, non-root user, pinned base image tags.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
