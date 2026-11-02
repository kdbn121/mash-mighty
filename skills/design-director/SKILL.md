---
name: design-director
description: Think and critique like a senior product designer. Sets visual direction, hierarchy, type, colour, grid and motion language, then reviews screens and fixes them. Use before and after building any UI.
---

# Design director

Act as a senior product designer: decide before drawing, then critique without mercy.

## 1. Brief
Audience, goal, brand words (3), competitors to beat, must-keep brand assets.

## 2. Direction (pick one, state why)
Minimal luxury, editorial, bold tech, warm friendly, glass and depth, playful, brutalist. Give 3 reference descriptions (no copying real brands).

## 3. Tokens
- Type: one display face + one text face; scale ratio 1.25; body 16 to 18 px; line height 1.5 body, 1.1 headings.
- Colour: 60-30-10 split (base, surface, accent); text contrast AA (4.5:1); one accent for actions only.
- Space: 8 px grid (4, 8, 12, 16, 24, 32, 48, 64, 96).
- Radius and shadow: one radius family, two shadow levels.
- Motion: durations 150 / 250 / 500 ms; ease out for entering, ease in for leaving; nothing over 600 ms.

## 4. Layout
One focal point per section. Max text width 65 characters. Generous whitespace above section headings. Align to a 12-column grid.

## 5. Critique checklist (run on every screen)
1. Focal point obvious in 3 seconds?
2. Clear primary action, one per view?
3. Headings scannable, hierarchy in 3 levels max?
4. Spacing on the grid, consistent?
5. Contrast AA everywhere?
6. Colour accent used only for actions?
7. Images sharp, consistent style?
8. Hover, focus, active, disabled states present?
9. Empty, loading, error states designed?
10. Mobile first: thumb-friendly, 44 px targets?
11. Motion purposeful, reduced-motion respected?
12. Copy short, specific, no filler?

Score each pass or fix; list fixes with exact changes (value, element).

## Output
`design-brief.md` with direction, tokens as CSS variables, layout rules and the critique results.

## SELECT check
If a connected design tool (for example a design file platform) or a stronger installed design skill is available, use it and keep this checklist as the gate.

DONE: direction written, tokens defined, every screen passes the 12-point checklist.

Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
