# Content system maintenance

Follow `SKILL.md` for production work. Templates are the SSOT; update channel documentation when their formats or safe-zone geometry changes.

- Consume the shared tokens through `tokens.css` and components through `../../../shared/local-design.global.js` from a channel folder. Keep `LOCALDS` component props compatible with the shared source; do not reintroduce export snapshots or machine-specific symlinks.
- Treat new design exports as merge input: compare current component props, dimensions, overlay logic and relative imports before replacing an artifact.
- Build deliverables from copies. Keep the canonical template's placeholder content separate from real customer copy and assets.
