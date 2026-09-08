# Deck method

How to build a deck. Pairs with the typesetting layer in `../deck-template/`.

**Core thesis: AI slop is not a style problem but a missing-constraints-and-process problem.** Hence four layers:

| Layer | What | Where |
|---|---|---|
| L1 | Invariant constraints — tokens, type roles, grid, accent budget | `../deck-template/CLAUDE.md` |
| L2 | Variable composition — archetypes and variants | `archetypes.md` |
| L3 | Workflow — brief → title strip → grayscale proof → typeset → image assignment → rendered QA | below |
| L4 | Gates — checklists, anti-slop cluster gate, human gates | `deck-qa.md` |

Purpose presets (story grammars) live in `presets.md`.

Format mechanics — DC structure, inline-style-only, the 24px floor, variable names — are owned by `../deck-template/CLAUDE.md` and are not repeated here. Archetypes tell you *which* slide to reach for; they are not instructions to duplicate a slide wholesale.

## Judgment constraints (L1)

- **Color budget, two tiers. Color encodes meaning; it never decorates.**
  - *Tier 1 — emphasis*: `--brand` plays **one role per slide** — the key datum, the CTA, *or* the structural emphasis. Not a blue word in every headline. The brand mark stays black or white.
  - *Tier 2 — identity*: quiet, systematic color layered on top of the emphasis moment, as long as it labels content and doesn't compete for focus — chapter identity (`--ch1–4`), **directly labeled** chart series (`--s1–4`), status chips (`--ok/warn/bad-ink`, word cue kept), branded surface tints.
  - Banned outright: gradients, rainbow charts, glassmorphism, colored glows, color-only status.
- **Claim titles.** Every content slide's title is a verifiable claim, not a topic label — "실적" ✗ → "다섯 해 동안 1,500명이 농구를 하러 샘플시에 왔습니다" ✓. Reading only the titles must reconstruct the argument.
- **Numbers carry period, unit, denominator, and source.** Estimates are marked as estimates.
- **No fixed slide template.** Presets are grammars — which archetypes, in what order, at what density — not pixel layouts. Same archetype and same focal position three slides running is a review flag.

## Workflow (L3)

1. **Brief.** Before any visual work: purpose (preset), audience, decision requested, density (present/hybrid/read), time and length limit, evidence on hand. The brief names the **content source chain** (the domain SSOT documents), and every build **re-reads those files at build time** — never from memory of an earlier read. Check `git log` on them for changes since the strip was approved.
2. **Title strip.** All action titles first. Titles alone must read as one argument. **Human gate ①: 사용자 approves the strip.**
3. **Grayscale proof.** Two or three massing directions, no color or photos. Compare, pick one.
4. **Typeset.** Approved spec and template layouts only. No new ornament invented mid-build.
5. **Image assignment.** Drafts ship empty `<image-slot>`s. Never auto-pick a photo. **사용자 decides which image goes where; 에이전트 applies.** Real photographs beat stock or generated imagery, and every placed image gets an honest caption (what, when, where). **If 사용자 skips a slot, recompose the slide** — switch to a no-image variant or another evidence form (quote, number, table). Never ship an empty slot; never fill it with a stock metaphor.
6. **Rendered QA.** Screenshot every slide. Review the contact sheet for rhythm and full-size renders for detail, diff the PDF, run `deck-qa.md`. **Human gate ②: 사용자 reviews the contact sheet.**

## Slide spec — write this before typesetting anything

```
archetype: A4
job:        신뢰 형성 (실적 증명)
claim:      다섯 해 동안 1,500명이 농구를 하러 샘플시에 왔습니다
evidence:   factsheet §2 (누적 1,500명 · 재참가 절반), 트로피 사진
visual:     hero number + 3 facts + evidence image (slot)
accent:     hero number (once)
source:     proposal/00-factsheet.md
slide:      15 or 42
```

## Files

- `archetypes.md` — A1–A16: job, required slots, variants, common mistakes, mapped slide numbers
- `presets.md` — five purpose presets
- `deck-qa.md` — checklists, layout gates P1–P9, quantitative gates T1·T2, anti-slop cluster gate, twelve pass/fail gates
