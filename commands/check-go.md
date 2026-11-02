---
name: check-go
description: Run a full Go check - build, tests and review, then fix what fails.
---

Run on the current Go project (or $ARGUMENTS):

1. Use skill go-build-fix with `go vet ./... && go test ./...`.
2. Use skill go-testing to run and fill test gaps.
3. Use agent go-reviewer for review.
4. Report MASHWOOD: what failed, what was fixed, what is left.
