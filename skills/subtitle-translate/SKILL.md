---
name: subtitle-translate
description: Translate subtitle files between languages while keeping timing and line limits.
---

# Subtitle Translate

Category: media.

## Steps
1. Parse SRT or VTT.
2. Translate meaning, not word by word, keep names.
3. Respect about 42 characters per line and reading speed.
4. Keep timestamps unchanged.
5. Validate the file format.

## SELECT check
If an installed skill, plugin or connected tool does this job better (real generator, editor, connector), use it and keep these steps as the quality gate.

DONE: Timing unchanged, lines readable, file valid.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
