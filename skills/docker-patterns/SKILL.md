---
name: docker-patterns
description: Idiomatic Docker patterns and structure. Use when writing or designing Docker code (Dockerfile, compose.yaml).
---

# Docker patterns

Apply when writing new Docker code.

## Do
- multi-stage builds
- non-root user
- pinned base image tags

## Avoid
- secrets baked into images
- huge images from build tools
- latest tag drift

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with container smoke test.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
