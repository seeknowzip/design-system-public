# Trip itinerary baseline

Use when schedule order is the core information, not merely a list of places.

## Information hierarchy

1. Trip identity, date, and the scope of the schedule
2. Day groups in chronological order
3. Stops with time, title, factual metadata, and optional status
4. Sourced travel or transition information
5. Booking, payment responsibility, and exceptions near the affected stop or action
6. One next action after the schedule is understood

## Composition recipe

- Use `ItineraryTimeline` only for the ordered day-and-stop structure. It draws each stop as a numbered marker and time on a vertical rail with the stop card beside them; set `kind` (`game` · `place` · `stay` · `food`) so the marker color tells the stop type apart, `index` when the product numbers stops itself, and `day.footer` for content that belongs under a day's stops.
- `title` may be a fully composed stop body (name, badges, note, alternatives) when the product owns richer stop content; the card stretches to it.
- Keep a stop non-interactive when it only communicates schedule information. Supply `onSelectStop` only when every interactive stop has a clear destination or detail action.
- Use ordinary foundation `Card`, `List`, `SectionMessage`, `Button`, and form components for place details, conditions, actions, and inquiry. Do not force them into timeline rows.
- Put a condition next to the stop or action it changes instead of collecting every caveat at the bottom.

Use the product rhythm within a day and the product section gap between day groups. A marketing page that contains this itinerary may use the marketing section gap around the whole itinerary section, while the timeline itself keeps product density.

Use `ItineraryTimeline` for the ordered structure and ordinary foundation components for actions, forms, notices, and place cards.
