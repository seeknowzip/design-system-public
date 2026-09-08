---
name: content-system
description: Social-media image content system — standardized, token-based visual templates per channel and format, each with a safe-zone overlay for QA. Use whenever producing or reviewing social-media image content (stories, reels covers, carousels, feed images, highlight covers, social thumbnails) or checking channel specs, safe zones, and export sizes. Currently covers Instagram (story and reels cover 1080×1920, carousel 1080×1080, feed 1080×1350 4:5, circular highlight cover); new channels register here as channel folders. Visual values consume the design-system tokens through a canonical link, never a vendored copy. Boundaries — web UI and landing pages → design-system; slide decks → deck-system; the text on the image → writing-system.
user-invocable: true
---

Standardized system for social-media image content. The SSOT is the template file in each channel folder; visual values come from the canonical design system (`tokens.css` → `../../shared/tokens.css`, with the shared browser bundle at `../../shared/local-design.global.js`).

## Working contract

1. **Read the channel folder's README first** — e.g. `instagram/README.md`: format specs, per-format safe-zone values, file layout.
2. **Build content from a copy of the template.** Never edit the canonical `*.dc.html` template — copy it to the output location and fill it in.
3. **Safe-zone QA**: turn on the channel's safe-zone overlay (Instagram: `IGSafeZoneOverlay`, kind story/reels/carousel/feed) to check overlap with the channel UI, then export with the overlay **off**.
4. **If installed, use the optional [writing-system](https://github.com/seeknowzip/writing-system-public) for text on the image. Otherwise edit the copy directly.** Voice is owned by the consuming project — use that project's honorific level, persona, and banned terms.
5. No colors, fonts, or shadows outside the tokens (repository root `SKILL.md` → Judgment contract supplies the shared token rules).

## Boundaries

- Web UI and landing pages → `design-system` / slide decks → `deck-system` / the copy itself → `writing-system`
- A new channel (YouTube thumbnail, blog cover, …) gets its own channel folder and is registered in this file's description.

## Portable copies

Copy the complete channel folder into a working directory under this skill, keeping its depth (for example `skills/content-system/output/`). Keep `tokens.css` one level above and the repository `shared/` folder available. If delivering outside this repository, include the shared assets and update relative URLs; copying only one HTML file loses its runtime and overlay. Serve the repository over HTTP using the root README instructions. Canonical placeholders and sample numbers are fictional, not ready-to-publish claims. Safe zones are template assumptions: check the actual app preview before publishing.
