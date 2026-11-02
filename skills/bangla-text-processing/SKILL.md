---
name: bangla-text-processing
description: Process Bangla text correctly in code - Unicode normalisation, conjuncts, sorting, search and fonts.
---

# Bangla Text Processing

Category: bangla.

## Steps
1. Normalise to NFC.
2. Handle zero-width joiners carefully.
3. Use grapheme-aware splitting.
4. Bangla-aware collation.
5. Test fonts render conjuncts.

## SELECT check
If an installed skill, plugin or connected tool does this job better (real generator, editor, connector), use it and keep these steps as the quality gate.

DONE: Text round-trips without broken characters.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
