---
name: search-console-questions
description: Mine Google Search Console for the real questions people type that already show your site, then turn them into a ranked content plan. Use for SEO content ideas, FAQ pages and ranking growth.
---

# Search Console question mining

Idea: stop guessing what people search. Search Console already lists the exact queries your site appears for. Filter them down to questions, then write the answers.

## Steps

1. **Connect.** Add and verify the site in Google Search Console (Domain property is best). New sites need a few weeks of data.
2. **Open Performance.** Performance > Search results. Set date range to the last 3 months. Tick Impressions, Clicks, CTR and Position.
3. **Filter to questions.** Add filter > Query > Custom (regex) > Matches regex, paste one pattern below, Apply. Search Console uses RE2 regex syntax.
4. **Export.** Export > Google Sheets or CSV.
5. **Cluster.** Group queries that share one answer into a topic. One topic = one page or one section.
6. **Prioritise.** Score each topic:
   - Position 5 to 20 ("striking distance") first. Small gains move these onto page one.
   - High impressions + low CTR = title and answer not matching the question.
   - Questions with zero clicks and high impressions = missing content.
7. **Map.** Existing page covers it partly: add the question as an H2 with a 40 to 60 word direct answer under it, then detail. Nothing covers it: plan a new page.
8. **Write answer-first.** Question as heading, direct answer in the first two sentences, then steps, examples, visuals. Add internal links from related pages. FAQ structured data is optional (Google shows FAQ rich results only for some site types).
9. **Recheck in 4 to 6 weeks.** Compare position, clicks and CTR for the same queries. Repeat monthly.

## Regex library (paste into Custom regex)

| Purpose | Pattern |
|---|---|
| English questions | `(?i)^(who|what|when|where|why|how|which|whose|is|are|was|were|can|could|do|does|did|should|would|will|has|have)\b|\?` |
| Bangla questions | `(কি|কী|কেন|কিভাবে|কীভাবে|কোথায়|কখন|কে|কোন|কত)` |
| Comparisons | `(?i)\b(vs|versus|or|alternative|alternatives|compare|comparison|difference)\b` |
| Buying intent | `(?i)\b(best|top|cheap|cheapest|price|prices|cost|near me|review|reviews|deal)\b` |
| Long-tail (6+ words) | `^(\S+\s){5,}\S+$` |
| Exclude brand | use Doesn't match regex with `(?i)yourbrand|your brand` |

Ask the user for language and brand name, then tailor the pattern. Test it on 5 sample queries before giving it.

## Output

A table: Topic | Example questions | Impressions | Avg position | CTR | Action (update page X / new page) | Priority 1 to 3. Then draft the top 3 pieces if asked.

## SELECT check

If a connected Search Console, analytics or SEO tool is available, pull the data directly instead of asking for an export. Keep these steps as the quality gate.

DONE: ranked content plan built from real queries, top 3 actions clear.

Output: MASHWOOD mode (see the mash-mighty skill). First line is the Triad trace.
