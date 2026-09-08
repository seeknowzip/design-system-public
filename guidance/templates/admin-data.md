# Admin and data baseline

Use this when the user's job is to scan records, compare states, and take an operational action. Start by naming the decision the screen must support; a table is not the default merely because the data is repeated.

## Information hierarchy

1. Current scope and the decision or question this view answers
2. Search and filters that materially change the result set
3. Result count, active filter summary, or critical status
4. The records in the structure that best supports comparison
5. Pagination or continuation controls
6. Empty, loading, error, permission, and destructive-action feedback

## Composition recipe

- Use `TopNavigation` or a product-local header for current context, never `MarketingHero`.
- Use `SearchField`, `FilterButton`, `Select`, or date controls only for criteria the user can explain and clear. Keep the active state visible.
- Use `Table` when values must be compared across consistent columns. Use `List` or `Card` when each item has a different information shape or the narrow layout would destroy column comparison.
- Put `Pagination` in the `Table` pagination slot when the result set is paged. Do not show pagination for a complete short list.
- Use `SectionMessage` for scoped operational feedback and `FallbackView` for a whole-region empty or failed state.
- Make a row interactive only when the whole row has one clear destination. Otherwise expose explicit actions in cells.

Use the admin/data compact, group, and section roles from `guidance/composition.md`. Keep filters one group gap from the result summary and one section gap from a change in task stage. Reflow filters before making the data region visually loose.

Do not add summary cards, charts, or status colors unless they answer the named decision with sourced data.
