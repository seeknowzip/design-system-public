---
name: local-design-system
description: Design system — a verified local foundation (tokens, typography, spacing, components, icons) used as the single source of truth, with optional brand and domain extension packages layered on top. Use for any web or app UI, landing page, prototype, design-token, spacing, typography, or component selection, implementation, or review work. Work task-first — fix the judgment criteria, find real candidates in the local code and docs, then decide reuse, compose, or extend; never force an existing component to fit. Boundaries — slide decks → deck-system; social-media image content → content-system; customer-facing copy → writing-system; this skill supplies only the visual foundation.
---

# Design System

Treat this repository's source and docs as an independent foundation SSOT. Do not reinvent decisions that already exist in `packages/wds`, `packages/wds-theme`, `packages/wds-icon`, or `docs/data`. Brand- and domain-specific decisions live only in extension packages and their docs; a project without an extension uses the neutral foundation alone.

## Working order

1. Read `FOUNDATION.md` for ownership, provenance, and decision precedence.
2. Before looking for components, fix the judgment criteria for this task in 3–5 lines:
   - target user and context of use
   - the primary task to complete, or the one message to deliver
   - information hierarchy — what must be seen first, then next
   - success condition
   - confirmed constraints and what is still unknown
     If an unknown would change the hierarchy or the success condition, confirm it first instead of filling it in.
3. Classify the surface as `product`, `marketing`, `admin/data`, `deck`, or `social-content`. For `deck` and `social-content`, the dedicated skill (deck-system / content-system) leads; this skill supplies only the visual-foundation evidence.
4. Read `guidance/composition.md` and its matching template for page-level work. If the consuming project has a brand/domain extension, read its brand doc. For page-level work also read its composition doc and the matching template. Brand rules (mark colors, brand color usage, voice) are defined there, not here.
5. Find the real candidates — do not guess from memory:
   - components: `packages/wds/src/components/`
   - props: the candidate's `types.ts`
   - implementation, states, spacing: `index.tsx`, `style.ts`
   - usage guidance: `docs/data/components/**/design.mdx` and the platform docs
   - verified behavior: `index.test.tsx` and extension tests
   - tokens: `packages/wds-theme/src/theme/`
   - icons: `packages/wds-icon/src/`
6. For each candidate, check that its documented purpose, current data/state, required interaction, and density match the criteria from step 2. Drop candidates that only look similar or would require bending the information structure, and leave a one-sentence reason.
7. Resolve only semantically matching candidates, in this order:
   1. use a foundation component with its props as-is
   2. compose several foundation primitives
   3. use an existing extension component when the pattern is brand/domain-specific
   4. only then create a new extension — and first state in one sentence why the existing candidates do not fit semantically
8. After implementing, run the package build and lint plus accessibility, responsive, and dark-mode checks.

## Judgment contract

- Never pick a component because it looks similar. Its documented purpose and the current information structure must match.
- The component list is a menu, not a checklist. "No suitable candidate" is a valid outcome.
- Never alter the foundation for one project's need. Only repeatable, general fixes go into the foundation, with evidence and tests; brand and domain changes are owned by the extension.
- Color: use `theme.semantic.*` first; atomic colors only in the limited expressions the local docs allow.
- Preserve internal spacing of existing components (`style.ts`). Pick new page-layout spacing from the scale in `packages/wds-theme/src/theme/spacing/index.ts` and repeat the chosen rhythm across one screen.
- Typography uses `Typography` variants — no ad-hoc font-size approximations.
- New components follow the foundation structure (`index.tsx`, `types.ts`, `style.ts`, export, test when needed).
- The implementation report states briefly: the judgment criteria, the local evidence used, the rejected candidates and why compose/extend was chosen, and any new extension added.

## Path map

- `FOUNDATION.md` — independent SSOT boundary, provenance, internal identifier policy
- `packages/wds*` — local foundation and components
- `docs/data` — local design and platform usage docs
- `guidance/composition.md` and `guidance/templates/` - local page composition guidance
- `packages/local-design` - optional generic composition helpers
