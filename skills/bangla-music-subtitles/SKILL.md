---
name: bangla-music-subtitles
description: Create time-synced Bangla subtitles or karaoke lyrics from a song or audio file, including Bangla script, romanised and English lines.
---

# Bangla Music Subtitles

Category: media.

## Steps
1. Isolate vocals from music if needed for clearer recognition.
2. Transcribe with a speech model that supports Bengali, request word timestamps.
3. Fix Bangla spelling, conjuncts and Unicode normalisation (NFC).
4. Split lines by musical phrase, 1 to 2 lines, max about 42 characters.
5. Export SRT for subtitles or ASS with per-word karaoke timing.
6. Burn in or mux with ffmpeg, check font supports Bangla glyphs.

## SELECT check
If an installed skill, plugin or connected tool does this job better (real generator, editor, connector), use it and keep these steps as the quality gate.

DONE: Every line timed within 200 ms of the vocal, Bangla renders correctly.
Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
