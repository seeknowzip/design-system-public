# Task-first decision example

This is a reasoning example, not a page template. Its purpose is to show when using fewer system components is the more faithful design-system decision.

## Scenario

Create a mobile-first screen where a team representative asks for schedule consultation.

## Task definition

- User: a representative who has a rough preferred date but no confirmed itinerary or price.
- Primary task: submit the minimum information needed for a follow-up.
- Information hierarchy: task title → uncertainty that affects the request → two required inputs → submit action.
- Success: the user understands that availability and price are not confirmed and can submit without reading unrelated promotional content.
- Known constraint: no verified price, participation metric, or final schedule exists.

## Candidate decisions

| Candidate | Decision | Reason |
| --- | --- | --- |
| `MarketingHero` | Exclude | The screen begins with a routine task, not a promise that needs a marketing narrative. |
| `StatRow` | Exclude | There is no sourced number that helps the user complete the request. |
| `ItineraryTimeline` | Exclude | The user is supplying a preferred date, not reading an ordered schedule. |
| `FormField` + `TextField` | Use | Labels, descriptions, and error relationships match submitted and validated values. |
| `SectionMessage` | Use | The unconfirmed condition affects this task region and must remain visible. |
| `Button` | Use | One clear action concludes the task. |

## Composition decision

Classify the screen as product. Use the product rhythm from `composition.md`: 8 between content that reads as one unit, 16 between form groups, and 24 when the task stage changes. A consumer-local max width or page inset may be added for the viewport, but it does not redefine those relationships.

The correct result does not demonstrate every available component. It preserves the user's task and explicitly leaves semantically mismatched components unused.
