---
name: vercel-testing
description: Write and fix Vercel deploys tests with preview smoke test. Use when adding tests or raising coverage in Vercel deploys projects.
---

# Vercel deploys testing

Tool: preview smoke test.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Vercel deploys faults: missing env vars in production, large serverless bundles, uncached heavy pages.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
