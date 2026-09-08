# Local Design System

The root `SKILL.md` owns web/app UI work. Content and slides use `skills/content-system/SKILL.md` and `skills/deck-system/SKILL.md`; their production and QA contracts remain independent. Read `FOUNDATION.md` for attribution and extension boundaries.

Keep project-specific brands and domain decisions in consumer-owned extensions. The neutral foundation lives in `packages/wds*`; reusable additions live in `packages/local-design` and `guidance/`. Templates consume `shared/` through relative paths; keep those links valid in deliverable copies and preserve canonical templates.

`pnpm build` builds packages and `shared/local-design.global.js`; `pnpm preview` serves the repository root. Test with `pnpm test:unit` and `pnpm lint`, then verify changed templates at their actual export dimensions. Package names under `@wanteddev/*` are private workspace identifiers, not registry publication targets. Third-party runtime and font terms are scoped in `THIRD_PARTY_NOTICES.md`, not overridden by the root license.
