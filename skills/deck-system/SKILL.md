---
name: deck-system
description: Slide-deck system — the canonical method and typesetting for building presentation decks (pitch, proposal, report, teaching, internal review). Use whenever the task is creating, revising, or QA-ing slides or a deck. Carries the slide archetypes, purpose presets, the brief → title strip → grayscale proof → typeset → image → rendered-QA workflow with two human gates, and the 1920×1080 DC template (type scale, color budget, minimum type size, export rules). Visual values consume the design-system tokens through a bridge link, never a copied snapshot. Boundaries — web pages, UI, and landing pages → design-system; social-media image content → content-system; customer-facing copy inside slides → writing-system.
user-invocable: true
---
Entry point for slide-deck method in `deck-method/` and typesetting in `deck-template/`. This skill ships with the shared design foundation in the same public repository. `tokens.css` imports `../../shared/tokens.css`; keep that shared dependency when installing the skill.

## Working contract (do not skip)

1. **Read `deck-method/readme.md` first** — the 4-layer structure (constraints, archetypes, workflow, gates), the order brief → title strip → grayscale proof → typeset → image assignment → rendered QA, and the two human gates (strip approval, contact-sheet review).
2. **Read `deck-template/CLAUDE.md` before typesetting** — DC format contract, type scale (`--t-*`), color budget, minimum type size, the local `deck-stage.js` patch.
3. Archetypes and presets: `deck-method/archetypes.md`, `presets.md`. QA gates: `deck-method/deck-qa.md`.
4. Customer-facing copy inside slides follows the writing-system skill; voice is owned by the consuming project.

## Instantiation — protect the canonical files

Build a real deck by copying the canonical `deck-template/deck-template.dc.html` to the output location — **never edit the canonical file**:

- Copy alongside it: `support.js`, `deck-stage.js` (keep the local patch — verification in deck-template/CLAUDE.md §5), `image-slot.js`.
- Keep the copy's `<helmet>` token link and image paths pointing at this checkout, adjusting relative paths for the output location. Reuse `shared/sample-logo.svg` or supply the user's authorized brand assets. Copying the template is expected; duplicating the shared design foundation is not.
- The template's usage slides (see deck-template/CLAUDE.md for their range) are deleted from a real deck.
- Local preview is served from the public repository root (two levels above this skill) (`file://` does not work — deck-template/CLAUDE.md §2).

## Quick map

- `deck-method/readme.md` — method SSOT (L1–L4, workflow, slide-spec form)
- `deck-method/archetypes.md` — slide archetypes
- `deck-method/presets.md` — purpose presets
- `deck-method/deck-qa.md` — checklist, layout gates, quantitative gates, anti-slop gate
- `deck-template/CLAUDE.md` — typesetting format contract (load additionally when typesetting)
- `deck-template/deck-template.dc.html` — canonical template (1920×1080)
