# Local Design System

This repository is also the `local-design-system` skill. Read `SKILL.md` for design work and `FOUNDATION.md` for attribution and extension boundaries.

Keep project-specific brand and domain decisions in a consumer-owned extension. The neutral foundation lives in `packages/wds*`; reusable local additions live in `packages/local-design` and `guidance/`.

Build and test with `pnpm build`, `pnpm test:unit`, and `pnpm lint`. Package names under `@wanteddev/*` are private workspace identifiers, not publication targets.
