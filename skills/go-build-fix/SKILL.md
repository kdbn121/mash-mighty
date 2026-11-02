---
name: go-build-fix
description: Fix Go build, type, lint and runtime errors with minimal changes. Use when a Go build or check fails.
---

# Go build fix

Check command: `go vet ./... && go test ./...`

1. Run the check command, capture the exact output.
2. Fix the first real error, not the cascade.
3. Smallest change; no redesign.
4. Re-run until clean.
5. Watch for: ignored errors, goroutine leaks, data races on maps.

DONE: `go vet ./... && go test ./...` passes with no new warnings.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
