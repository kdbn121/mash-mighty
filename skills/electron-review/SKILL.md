---
name: electron-review
description: Review Electron desktop code for correctness, security, performance and idiom with severity labels. Use on any Electron desktop change (electron in package.json).
---

# Electron desktop review

## Check first (common Electron desktop faults)
- nodeIntegration in renderer
- remote content loaded with privileges
- unsigned installers

## Then
1. Correctness and edge cases.
2. Security: input validation, auth, secrets, injection.
3. Error handling: nothing swallowed.
4. Performance hot spots.
5. Idiom: contextIsolation on, preload bridge with narrow API, auto-update signed.

Report each finding as HIGH / MEDIUM / LOW with file, line and fix.

DONE: every HIGH has a concrete fix.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
