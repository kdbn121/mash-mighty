---
name: electron-patterns
description: Idiomatic Electron desktop patterns and structure. Use when writing or designing Electron desktop code (electron in package.json).
---

# Electron desktop patterns

Apply when writing new Electron desktop code.

## Do
- contextIsolation on
- preload bridge with narrow API
- auto-update signed

## Avoid
- nodeIntegration in renderer
- remote content loaded with privileges
- unsigned installers

## Steps
1. Match the existing project structure and naming.
2. Apply the Do list; check the Avoid list before finishing.
3. Keep functions small and named for intent.
4. Add or update tests with Playwright for Electron.

DONE: code follows the Do list and none of the Avoid list.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
