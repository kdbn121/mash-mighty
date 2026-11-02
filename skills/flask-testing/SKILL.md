---
name: flask-testing
description: Write and fix Flask tests with pytest. Use when adding tests or raising coverage in Flask projects.
---

# Flask testing

Tool: pytest.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Flask faults: app.run debug in production, global request state misuse, no CSRF on forms.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
