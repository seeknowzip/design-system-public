# Composition contract

The local foundation defines parts; this document governs how the local project assembles them. It is a decision guide, not a page template.

## First classify the surface

| Surface | Primary goal | Type ceiling | Density | Reference baseline |
| --- | --- | --- | --- | --- |
| Product | Complete a task | `title1` | Compact and repeatable | `templates/product-ui.md` |
| Marketing | Understand and act | `display1` once | Open, with deliberate contrast | `templates/landing-page.md` |
| Admin/data | Scan, compare, and decide | `title2` | Dense and stable | `templates/admin-data.md` |

Do not put a marketing hero inside routine product UI. Do not make an admin screen dramatic by adding display type or decorative surfaces.

## Rhythm and spacing

Foundation components own their internal geometry. Never normalize their padding to a preferred grid.

Use spacing roles by relationship, not by element type:

- **compact**: two pieces read as one unit, such as a label and its supporting value.
- **group**: related controls or items belong to one block but remain separately scannable.
- **section**: the user's question, task stage, or information mode changes.

The defaults below are the local project composition decisions. Every value exists in `packages/wds-theme/src/theme/spacing/index.ts`.

| Surface | Compact | Group | Section | Responsive use |
| --- | ---: | ---: | ---: | --- |
| Product | 8 | 16 | 24 | Use 32 only between distinct task stages on a wide layout. |
| Marketing | 12 | 24 | 48 / 64 | Use 48 on narrow layouts and 64 on wide layouts. Reserve 80 for a deliberate major narrative break, not every section. |
| Admin/data | 6 | 12 | 24 | Preserve density across widths; wrap or reflow controls before increasing gaps. |

For layout outside components:

1. Read `packages/wds-theme/src/theme/spacing/index.ts`.
2. Start with the row for the classified surface.
3. Repeat its compact, group, and section values instead of selecting a new value at every junction.
4. Treat `0.5`, `1`, and `2` as stroke/optical values, not layout spacing.
5. Responsive changes should reduce hierarchy gradually; do not collapse every gap to the same mobile value.

Change a default only when content, component geometry, or a tested viewport requires it. Pick the replacement from the same scale and record which relationship changed; visual preference alone is not a reason.

This deliberately replaces the old blanket “4의 배수” rule. The foundation contains exact component values such as 6, 10, and 14; those are system decisions, not exceptions to hide.

## Visual hierarchy

- Give each screen one dominant message or task.
- On marketing surfaces, use the largest type once. Establish contrast with foundation Typography variants, not custom sizes.
- Let real photography provide texture and place context. Do not compensate for missing content with gradients, glows, or arbitrary decoration.
- Change surface tone only when it marks a meaningful content transition.
- Use semantic colors for meaning and interaction. Accent colors are not a section-painting palette.

## Template use

Read the relevant file under `guidance/templates/` before assembling a multi-section page. Extract:

1. the information hierarchy,
2. the repeated spacing rhythm,
3. the location of media and primary action,
4. the reason for each surface change.

Do not copy its section order when the content does not support that order.
