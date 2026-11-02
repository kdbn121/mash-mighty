---
name: mash-mighty
description: MASH-mighty Triad pipeline for any task or project. MASHWOOD output always runs first, then FORGE engineering playbooks, then SELECT compares every available skill and uses the best one. Use on every prompt and when the user types /mash-mighty.
---

# MASH-mighty

The MASH-mighty Triad. Created by Khaled Bhuiyan (MASH). MIT License.

Three stages, fixed order, every prompt:

```
MASHWOOD    ->  always first, never skipped
FORGE   ->  pick the right engineering playbook
SELECT  ->  compare FORGE with every other available skill, best one wins
```

## Stage 1: MASHWOOD (mandatory, always first)

Load `references/mashwood-mode.md` and apply it before anything else, to every reply, for every user and project.

- Default level: BARE (shortest). User can say "mashwood tight", "mashwood standard" or "mashwood bare".
- Turn off only when the user says "mashwood off" or "normal mode".
- MASHWOOD shortens words, never facts. Every result, error, path, number, command and risk stays.
- Safety first: security warnings, irreversible actions and ordered steps are written in plain full sentences, then MASHWOOD resumes.

## Stage 2: FORGE (MASH-mighty toolkit)

1. Name the intent in a few words (fix errors, review, secure, build feature, fix bug, refactor, test, ship, video, subtitles, website, research, write, market, present).
2. Detect the stack from files (package.json, pyproject.toml, go.mod, Cargo.toml, pubspec.yaml, *.csproj, *.tex and so on).
3. Pick from the MASH-mighty toolkit, listed in `references/catalog.md`:
   - 327 skills: 180 stack skills (`STACK-patterns`, `STACK-review`, `STACK-testing`, `STACK-build-fix` for 45 stacks) and 145 task skills (media and video, web, engineering, AI, research, business, content, Bangla, documents, operations, teaching).
   - 77 agents: 45 stack reviewers plus 32 role specialists.
   - 118 commands: `check-STACK` and `start-TASK`.
4. With no toolkit installed, use the playbooks in `references/forge-playbooks.md`.
5. Note any other installed skill library or plugin that offers a specialised component for the same intent. These become candidates for Stage 3.

## Stage 3: SELECT (cross-check, best one wins)

List every skill, plugin, agent, connector and output type available in this session, plus the FORGE playbook. Score each for this exact task:

| Criterion | Question |
|---|---|
| Fit | Built for this exact stack or job? Specific beats general. |
| Access | Connected to the real tool or data the task needs? |
| Fresh | Newest version when two overlap? |
| Depth | Covers the whole task, or part of it? |
| Low cost | Fewest components that fully cover the task? |

Decide:
- Another skill clearly scores higher: make it primary. Keep the FORGE checklist as a quality gate on its output.
- FORGE scores higher or ties: run the FORGE playbook.
- Each covers a different part: combine them, primary first.
- MASHWOOD stays on top in every case.

## Run and report

1. Follow the winning skill or playbook exactly.
2. Missing input (code, files, data): ask for it in one line.
3. First line of every reply is the Triad trace:
   `Triad: MASHWOOD bare > FORGE review > SELECT react-review skill`
4. Then the MASHWOOD answer.

## Project profiles (optional)

If `references/project-profiles.md` exists and the work matches a profile, apply its rules. Copy `references/project-profiles-template.md` to start one.
