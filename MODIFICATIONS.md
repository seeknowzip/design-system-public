# Public snapshot changes

Prepared on 2026-09-08 from the current local workspace, without its Git history.

- Preserved Montage-derived neutral source, tests, usage docs, and MIT copyright notice.
- Preserved the local task-first skill and product/marketing/admin composition guidance.
- Generalized five local helpers as private `@local/design`: Gradient, Icon, StatRow, MarketingHero, and ItineraryTimeline. Removed the brand font override from MarketingHero; it uses foundation typography.
- Excluded private brand assets and symbols, customer materials, personal logs, original docs application, MCP source, visual screenshots, and local tooling state. Separate content/deck repositories are not included.
- Simplified the workspace build to dependency-ordered pnpm scripts. All packages are private; preserved `@wanteddev/*` names are not registry publication targets.
- Replaced internal adoption pointers with generic Korean onboarding and explicit scope boundaries.

This snapshot is not identical to current upstream. Local checks do not establish superior design outcomes or validate a consumer application's accessibility and visual behavior.
