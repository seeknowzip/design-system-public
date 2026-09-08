# Landing page baseline

Use this only for a page whose job is explanation and conversion.

## Information hierarchy

1. One promise for one audience
2. The minimum explanation needed to understand that promise
3. Evidence or operating facts that reduce the biggest doubt
4. Outcomes, process, or itinerary needed to judge fit
5. Conditions, limitations, and responsibility near the decision point
6. One next action

## Composition recipe

- Use `TopNavigation` with at most one primary action before the main content.
- Use `MarketingHero` for the promise, supporting explanation, action, and real media. Do not use it when the page starts with a routine task.
- Use `StatRow` only for sourced, decision-relevant numbers. If no such numbers exist, use prose, a `List`, or ordinary `Card` composition instead.
- Express benefits as user outcomes with `Typography`, `List`, `Card`, or imagery; do not turn the section into a component gallery.
- Use `ItineraryTimeline` only when chronological order is core information. Use ordinary steps or a list for a short non-scheduled process.
- Use `Accordion` for secondary questions and `SectionMessage` for an important condition that must remain visible.
- Use a `Button` for the closing action; use `ActionArea` only when a mobile action must stay available while scrolling.

Use the marketing compact and group gaps inside a content mode. Use the marketing section gap only when the audience's question changes. On narrow layouts start with the 48 section value; on wide layouts use 64. Reserve 80 for one major narrative break with enough real content to support it.

Use a single display-scale headline. Alternate surface tone only when the information mode changes. A missing fact stays missing; never fill a visually empty section with invented metrics or testimonials.
