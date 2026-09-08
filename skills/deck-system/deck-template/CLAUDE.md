# Deck template — format constraints

Main file: `deck-template.dc.html` — 55 slides at 1920×1080.

This file is the SSOT for **format**: structure, styling mechanics, variables, floors.
For **what to build and in what order** — archetypes, purpose presets, workflow, QA gates — read `../deck-method/readme.md` first.

## 1. This is a Design Component, not an HTML page

```
<x-dc>
  <helmet> … token links, :root variables, deck-stage/image-slot scripts … </helmet>
  <x-import component-from-global-scope="deck-stage" from="./deck-stage.js" width="1920" height="1080">
    <section data-label="01 표지 · 기본" data-speaker-notes="…" style="…">…</section>
    …
  </x-import>
</x-dc>
<script data-dc-script>class Component extends DCLogic { … }</script>
```

Never:
- Remove the `<x-dc>` / `<script data-dc-script>` wrappers or rewrite this as a plain `<html><body>` document
- Add CSS classes, external stylesheets, or `<style>` blocks — the `:root` block inside `<helmet>` is the only exception
- Put `position` or `inset` on a `<section>` — deck-stage owns placement
- Use `{{ expressions }}` — dotted paths only, no `{{ a + b }}` or `{{ fn() }}`
- Put a `<script src>` outside `<helmet>`, or build slides with `React.createElement`

Always:
- Style with inline `style="…"` only, using the variables below
- Add a slide as one `<section data-label="NN name" data-speaker-notes="…">`
- Put speaker notes in `data-speaker-notes`, never in a separate notes block
- Preserve any `data-comment-anchor` attribute you find

## 2. Running it locally

Serve from the **public repository root**, not this template directory:

```bash
python3 -m http.server 8000
# http://localhost:8000/skills/deck-system/deck-template/deck-template.dc.html
```

Opening with `file://` blocks component loading. The template needs `support.js`, `deck-stage.js` and `image-slot.js` alongside it. `../tokens.css` imports the shared foundation in `shared/tokens.css`; logo references resolve to `../../../shared/sample-logo.svg`. Font CSS is fetched from open-font CDNs, so initial preview requires internet access.

Preserve the shared foundation link when copying a deck. Do not copy a private design-system snapshot into the template directory. Images selected in a compatible design host may persist through its state-file API; plain `python3 -m http.server` has no write API. For portable saved decks, use explicit authorized image paths rather than relying on editor-only persistence.

## 3. Type scale (`:root`)

One axis for the whole deck. Never hardcode px on a slide.

| Variable | Default | Role |
|---|---|---|
| `--t-hero` | 192px | The one huge number on a single-figure slide |
| `--t-jumbo` | 120px | Chapter index on dividers, quote glyph, one-line dark statement |
| `--t-display` | 104px | Cover title |
| `--t-headline` | 88px | Key-message headline, image-cover title, unit next to a hero number |
| `--t-stat` | 76px | Metric numbers (4-up, KPI, formula terms) |
| `--t-title` | 64px | Slide title (h2) |
| `--t-stat-sm` | 60px | Secondary metric numbers, donut center, blockquote, operators/arrows |
| `--t-sub` | 44px | Subtitle, large number label |
| `--t-lead` | 38px | Lead sentence, unit next to a stat number |
| `--t-body` | 32px | Body |
| `--t-small` | 27px | Table cells, secondary copy |
| `--t-micro` | 24px | Eyebrow, source, caption — **hard floor** |

Numbers and text share one axis but different roles: a figure is `--t-stat`/`--t-stat-sm`, never `--t-title` sized by eye. Every `font-size` in the template is one of these variables — `grep -c "font-size:[0-9]" deck-template.dc.html` must stay 0.

Layout: `--pad-x:110px` `--pad-t:92px` `--pad-b:76px` `--gap-title:48px` `--gap-item:24px`

**Nothing below 24px, ever.** The floor carries the contrast gate: `--ink-faint` (3.13:1) and `--mark` (3.21:1) fail the 4.5:1 threshold and are legal only because every text node clears WCAG's 24px large-text bar. Drop one element to 23px and both the type gate and the contrast gate fail at once.

So when content overflows, resolve it in this order: spacing and structure → line breaks → **cut content or split the slide**. If the first two do not resolve it, the slide is carrying more than one slide's worth of content. Cutting is the correct answer; a smaller font is not.

## 4. Color — never invent one

```
Text      --ink #171719 / --ink-mid 88% / --ink-soft 72% / --ink-faint 55%
Marks     --mark (numbers, operators, arrows only — never body text)
Brand     --brand #0066FF / --brand-deep #0054D1 / --brand-tint #EAF2FE
Chapters  --ch1 #005EEB · --ch2 #006F82 · --ch3 #5B37ED · --ch4 #006E25 (+ -bg pairs)
Charts    --s1 #0066FF · --s2 #0098B2 · --s3 #5B37ED · --s4 #D17600 · --ctx #8A8D94
Status    --ok-ink · --warn-ink · --bad-ink (+ -bg pairs)
Surfaces  --surf-alt #F7F7F8 · --line · --line-soft · --fill
```

- `--brand` carries **one emphasis per slide**. Every other color labels content; it does not decorate.
- One or two background treatments across the whole deck (white stage + dark/blue dividers).
- Never encode status in color alone — write the word too.
- Charts get direct labels next to the marks; minimize reliance on a separate legend.

Where a deck color equals a design-system semantic token, the `:root` binds it as `var(--semantic-…, #hex)`; the hex fallback must stay equal to the token value. Alpha variants (`--ink-mid/-soft/-faint`, `--mark`, `-bg` pairs) are deliberate presentation-contrast adjustments and stay literal.

Measured contrast values and the pass/fail gate live in `../deck-method/deck-qa.md`.

## 5. Type

- Pretendard for everything (`var(--font-sans)`); Wanted Sans is wordmark-only
- Large text `letter-spacing:-0.032em`, small labels `+0.1em`
- Weights: 700 titles / 600 labels and headings / 500 body
- Korean line breaking uses `word-break:keep-all` (applied globally) plus `text-wrap:pretty` on long sentences
- Break an awkward caption with `<br>` at a phrase boundary rather than `white-space:nowrap`

**`deck-stage.js` carries a local patch (~line 166)** that makes its `:host` font-family defer to `--font-sans` — without it, line breaks and 1080px overflow become machine-dependent. Re-apply it whenever `deck-stage.js` is refreshed from upstream; verify that the computed `font-family` of slide text starts with `Pretendard`, and only the wordmark with `Wanted Sans`.

## 6. Images

Photo positions are `<image-slot id="unique" shape="rect" fit="cover" placeholder="what to put here">`.
Ids must be unique across the deck — a dropped image is stored under its id. Never draw a picture in SVG instead.

## 7. Slide map

Slide groups are read from each `<section data-label>` (grep `data-label=` for the current map). **Delete slides 1–5 and 37–40 from any real document** — they are template instructions, not content.

## 8. Export

- deck-stage owns printing. Never write a `@page` rule or print CSS.
- After editing a slide, confirm `clientHeight === scrollHeight` — no 1080px overflow.
- Run the T1 (type floor) and T2 (contrast) gates in `../deck-method/deck-qa.md` before exporting.

## 9. Sample data

The placeholder numbers form one consistent fictional record (2022–2026 H1: 16 tournaments, 4,200 cumulative visitors, 1,740 in 2026 H1, 48% repeat teams, 28 partner venues, 연 12회 plan, 2027 target 240 teams, contact 담당자 A (fictional)). They are still placeholders — replace every figure from the domain SSOT before shipping; never keep a sample value by oversight.

The public catalog uses Sample Studio and fictional people, places, figures and quotations. Replace them before distributing a real deck.

Export boundary: this HTML runtime supports browser printing to PDF. It does not implement editable PowerPoint `.pptx` export. Creating PPTX requires a separate conversion/authoring tool and independent layout QA; do not rename HTML or PDF files to `.pptx`.
