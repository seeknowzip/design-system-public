# Deck QA — gates and checklists

Run against **rendered output** (screenshots and PDF), never against source. Automated review finds measurable defects; **사용자 owns taste and the final pass/fail.** Two human gates: the title strip before typesetting, the contact sheet before export.

Reference resolution is **1920×1080 authored px**. Every px figure below is in that space.

## Per slide — all must be yes

- [ ] The title is a verifiable claim or question, not a topic label
- [ ] Every element on the slide supports that one claim — otherwise cut it or move it
- [ ] A slide spec exists (`archetype / job / claim / evidence / visual / accent / source / slide`)
- [ ] Only `--t-*` type roles are used — zero ad-hoc font sizes
- [ ] Margins, title baseline, and vertical rhythm sit on the `--pad-*` / `--gap-*` grid
- [ ] One focal point — `--brand` appears in exactly one role, or none
- [ ] Numbers and ornament encode real meaning; numbering implies a real sequence
- [ ] Images are evidence with honest captions (what, when, where) — no placeholders, no stock metaphors
- [ ] Chart truth gate: claim title, unit, period, source, zero-baseline bars, direct labels, no dual axis, context series in `--ctx` gray
- [ ] Korean line breaks reviewed by eye — `word-break:keep-all` is on, but check for orphaned 조사 and proper nouns
- [ ] No overflow or clipping in the 16:9 render **and** in the PDF (`clientHeight === scrollHeight`)
- [ ] Contrast passes T2 below

**Sourcing.** Cite only what the audience can verify — institutions, media, statute, URLs. Internal file paths and internal confirmation dates never render on a slide; put them in an HTML comment if maintenance needs them. When the evidence is internal first-party operating data, do not leave the source line empty and do not print a path — render the verifiable first-party label **「샘플 운영 기록 기준」**, with a period where useful ("샘플 운영 기록 기준 · 2022–2026"). If the source line ends up empty, delete the line and re-check P3a. *Exception*: internal-audience decks may legitimately show owner and deadline provenance.

## Per deck — contact sheet and title strip

- [ ] The title strip alone reads as one argument and ends in the ask
- [ ] No three-in-a-row of the same archetype at the same focal position, unless the repetition is meaningful
- [ ] Tokens, type, and image treatment are consistent while composition varies with content
- [ ] Density matches the declared mode; hybrid and read decks are self-contained
- [ ] Facts cross-checked against the domain SSOT — **the same number never differs between slides**
- [ ] Banned phrasings absent (factsheet phrasing guide, product voice rules)
- [ ] The closing states decision requested, owner, timing, and next step
- [ ] Template instruction slides (02–05, 37–40) are deleted

## Layout gates P1–P9

Nine principles: line breaking, prose decomposition, space distribution, information class, spacing hierarchy, measure, redundancy, neighbor alignment, structural elements.

**Inspect at full-size per-slide renders, not the contact sheet** — mid-phrase breaks and tight clearances are invisible at thumbnail scale.

**Never shrink type to make something fit.** The 24px floor carries the contrast gate (see T2), so a smaller font breaks two gates at once. Resolve overflow in this order: spacing and structure → line breaks → **cut content or split the slide**. If the first two do not resolve it, the slide is carrying more than one slide's worth of content, and cutting is the correct answer — not a smaller font.

- [ ] **P1 · Break at meaning.** Zero mid-phrase automatic line breaks in display text, quotes, and captions. Fit the caption to one line or break it deliberately at a phrase boundary.
- [ ] **P2 · Decompose prose; hierarchy follows meaning.** Zero cells carrying two or more facts as a run-on. A middot list is prose too — "A · B · C · D" with three or more facts breaks this rule. Decompose into a bold lead plus a supporting sub-line. *Exceptions*: chart direct labels ("400명 · 2회 × 회당 200명") and homogeneous example lists ("서울·대전·진주") are each a single fact. Before decomposing, ask whether the items are lead-and-support or peers — peers get identical treatment, because false hierarchy is as much a defect as none.
- [ ] **P3a · Vertical distribution.** The void between the lowest content and the source line stays under 25% of stage height (270px). Otherwise center the content zone or increase row padding.
- [ ] **P3b · Neighbor height balance.** Adjacent columns and panels don't differ awkwardly in height.
- [ ] **P3c · Big-number clearance.** Explicit space between a hero number and its caption — descenders must not touch.
- [ ] **P4 · Separate information classes.** When a slide mixes classes (target data vs current status vs source), separate them with a category break — extra spacing plus an eyebrow label, tint, or divider — so they don't read as one block.
- [ ] **P5 · Spacing hierarchy.** Spacing encodes relational distance: title↔content (`--gap-title` 48px) ≥ between blocks ≥ within a block (`--gap-item` 24px). If rows breathe, the title-to-first-item gap grows proportionally. If the title looks stuck to the first row at full size, it fails.
- [ ] **P6 · Measure.** Body prose stays within ~40–50 Korean characters (~22–26em) regardless of column width. Grid division is not text width — constrain with `max-width` and let the column run empty on the right. Does not apply to table cells or chart labels.
- [ ] **P7 · No redundancy.** Never emphasize the same number twice on one slide. Split the roles: **title = interpretation (so-what), body = the evidence**. When there's a hero number, the title carries no number.
- [ ] **P8 · Neighbor alignment.** First-line baselines align across adjacent columns. Small body text beside a large number needs top alignment plus line-height correction, or its cap height sags.
- [ ] **P9 · Structure follows role.** Rules, numbers, labels, and dividers each need a defined role, and placement follows it. A rule above a content block is a *title-zone / data-zone boundary marker*: give it breathing room on both sides (title→rule ≈ rule→first row). Gapped on one side only, it reads as a drifting top-border and fails.

**Fixing P3a — four traps that cost a round each.** Every one of these looks correct in the markup and only shows up in a render.

- **Row padding is not a monotonic win.** Raising it to fill a void overshoots into overflow sooner than the arithmetic suggests, and in print output the last row vanishes *silently* — no scrollbar, no clipping cue, just a missing row. Step in small increments and re-render after each. Never pick the value by calculation alone.
- **`center-anchor` loses to an inline style.** `margin-top:auto` has no effect if the same element carries `style="margin-top:…"`. Check the inline attribute before concluding the class is broken.
- **`align-items:center` disables column-internal alignment.** It shrinks grid items to content height, so `justify-content` inside a column has no free space to distribute. Center is right when the columns are of similar height; when one is much shorter, stretch the grid and align inside it instead.
- **Quote archetypes strand the right half.** A quote block's default measure is tuned for a narrow column; on a wide stage it leaves the right side empty while the void reads as a layout error. Widen the measure for the quote variant — never enlarge the type to fill it.

**A layout value that was not confirmed in a render is not a decision.** Screenshot or PDF after each change; two of the four traps above produce markup that reads as correct.

**Process:** anything a revision creates or changes gets re-checked against all nine before the round closes.

**Authority order in a revision round: 사용자-approved copy > factsheet > reviewer suggestion.** When a reviewer's point conflicts with approved copy, keep the copy and resolve it in the annotation layer — source line, caption, factsheet entry. Replacing approved copy requires 사용자's explicit decision. Before changing any sentence, `diff` it against the last approved version.

## Quantitative gates T1 · T2

Machine-measured from computed values, not eyeballed.

### T1 · Type floor

| Target | Floor |
|---|---|
| Body tier (`--t-body`, `--t-lead`, body primitives) | **≥ 27px** |
| Metadata (labels, sources, captions, chart direct labels) | **≥ 24px** |

Nothing below 24px, ever. Read every text-bearing element's computed `font-size`; zero violations passes.

```js
[...document.querySelectorAll('section *')]
  .filter(el => [...el.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()))
  .map(el => [el, parseFloat(getComputedStyle(el).fontSize)])
  .filter(([, fs]) => fs < 24)
```

### T2 · Contrast

Every meaningful text node clears **4.5:1** against its canvas. Large text — ≥24px regular or ≥18.7px bold — clears **3:1**.

Measured 2026-07-29 by alpha-compositing each `:root` token over white and over `--brand-tint`:

| Token | on `#FFFFFF` | on `--brand-tint` | Verdict |
|---|---|---|---|
| `--ink` | 17.90 | 15.88 | ✓ any size |
| `--ink-mid` | 9.14 | 8.32 | ✓ any size |
| `--ink-soft` | 4.97 | 4.66 | ✓ any size — the body and caption default |
| `--ink-faint` | **3.13** | 3.01 | △ **large text only** |
| `--mark` | **3.21** | 3.08 | △ **decorative marks only** — numbers, operators, arrows |
| `--ch1` / `--ch2` / `--ch3` / `--ch4` | 5.53 / 5.84 / 6.53 / 6.45 | 4.90 / 5.18 / 5.80 / 5.72 | ✓ |
| `--brand` · `--s1` | 4.83 | **4.29** | ✓ on white / △ large text only on tint |
| `--brand-deep` · `--tint-ink` | 6.59 / 5.53 | 5.84 / 4.90 | ✓ — **use these for small text on tint** |
| `--s2` / `--s4` / `--ctx` | **3.42 / 3.33 / 3.32** | 3.04 / 2.96 / 2.95 | △ **chart marks only** — labels take `--ink-soft` |
| `--ok-ink` / `--warn-ink` / `--bad-ink` | 6.45 / 5.51 / 7.23 | 5.72 / 4.89 / 6.42 | ✓ |

**The two gates are coupled — this is the easiest thing to miss.** `--ink-faint` and `--mark` fail 4.5:1. They are legal only because every text node clears WCAG's 24px large-text bar. Shrink one element below 24px and T1 and T2 fail together. That is why P1–P9 forbid resizing type.

Fails when: any meaningful text is under the floor · `--ink-faint` or `--mark` appears under 24px · `--s2`/`--s4`/`--ctx` is used as a text color · `--brand` carries small text on a tint background. Text over photographs is measured after the scrim is applied.

*Caveat*: these verdicts are authored-px. Scaled onto a 1280 display, 24px renders at 16 physical px. Evaluating at authored size is the usual convention, but for a small-screen venue, promote `--ink-faint` usages to `--ink-soft`.

## Anti-slop cluster gate

Individual motifs are not banned. **Two or more default tells clustering on one slide fails the gate:**

gradient decoration · everything centered · uniform three-card grid · glass/glow/shadow stack · emoji bullets · stock-metaphor imagery · decorative fake chart · ornament without semantics · em-dash asides used repeatedly (resolve "sentence — aside" into two sentences, parentheses, or a comma; quote attribution "— name" and numeric en-dash ranges are exempt)

## Twelve pass/fail gates

1. **Purpose** — audience, decision, and ask in one sentence?
2. **Story** — does the title-only view read as one argument?
3. **Single point** — exactly one core message per slide?
4. **Glance** — present slides understood in three seconds?
5. **Legibility** — readable from the farthest seat and the smallest shared screen? (quantitative: **T1**)
6. **Evidence** — does every key claim have data, an example, a case, or logic?
7. **Integrity** — units, periods, sources, assumptions explicit?
8. **Hierarchy** — squint test: does the intended thing read first?
9. **Accessibility** — contrast, non-color cues, reading order, alt text? (quantitative: **T2**)
10. **Purpose fit** — does it match the preset's success criteria?
11. **Action** — decision, next step, owner, and timing at the end?
12. **Environment** — rehearsed on the actual screen, offline, PDF and print checked?

**Any failure means fixing structure before polishing visuals.**
