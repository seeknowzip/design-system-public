# Deck system maintenance

For deck creation, follow `SKILL.md`. Method and format remain separate from the shared design foundation.

- `tokens.css` imports `../../shared/tokens.css`. Preserve this shared link instead of taking a private token snapshot.
- `deck-template/deck-template.dc.html` is a canonical layout catalog; real decks are copies. Slide-number references in `deck-method/` track its 55 sections.
- After template or token changes, render from the public repository root: check assets, computed fonts, overflow, navigation and print output using `deck-template/CLAUDE.md`.
