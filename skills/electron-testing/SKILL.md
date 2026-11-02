---
name: electron-testing
description: Write and fix Electron desktop tests with Playwright for Electron. Use when adding tests or raising coverage in Electron desktop projects.
---

# Electron desktop testing

Tool: Playwright for Electron.

1. List behaviours, edge cases and failure cases.
2. One test per behaviour, arrange, act, assert.
3. Mock only external boundaries (network, clock, filesystem).
4. Cover the known Electron desktop faults: nodeIntegration in renderer, remote content loaded with privileges, unsigned installers.
5. Run tests; target 80% coverage on changed code.

DONE: tests pass and fail when the behaviour breaks.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
