# Product UI baseline

Start from the user's primary task, then choose the smallest foundation pattern that completes it.

## Information hierarchy

1. Current context and the task the user is completing
2. Information or controls required for the next decision
3. Consequences, validation, and exceptional conditions
4. The primary action where the task concludes
5. Empty, loading, error, disabled, and success states at the scope they affect

## Composition recipe

- Use `TopNavigation`, `Tab`, or `SegmentedControl` only when the user must change context, not as decoration.
- Use `Form` with the matching input components when values are submitted or validated. Preserve labels, descriptions, and error relationships supplied by the foundation.
- Use `List` for scan-and-select tasks, `Card` for bounded grouped content, and `Table` only when column comparison is required.
- Use `SectionMessage` for a condition affecting one task region and `FallbackView` when the whole task region cannot proceed.
- Place the primary `Button` after the information needed to commit. Use `ActionArea` only for a pinned mobile action that would otherwise be lost during the task.

Use the product compact gap inside a decision unit, the group gap between fields or related items, and the section gap when the task stage changes. Use 32 only to separate distinct stages on a wide layout; do not loosen routine product UI to make it feel more designed.

Keep product density compact. Do not import MarketingHero or display-scale typography to make a routine screen feel more designed.
