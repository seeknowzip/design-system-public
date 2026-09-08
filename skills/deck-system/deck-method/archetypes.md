# Slide archetypes

Semantic units, not layouts. Each defines a job, one message slot, required evidence slots, and variants. Compose per `presets.md`; never force content into a shell.

**Slide numbers** are `data-label` numbers in `../deck-template/deck-template.dc.html`. Several slides under one archetype are variants — pick the one that fits the content.

Rhythm rule: the same archetype at the same focal position must not run three slides in a row. Meaningful repetition (small multiples) is the exception.

| # | Archetype | Job | Slides | Required slots | Common mistakes |
|---|---|---|---|---|---|
| A1 | **Cover** | Identify the proposal, set the first frame | 01 · 09 · 55 | Display title (claim-flavored), one-sentence descriptor, proposer and contact | Logo and slogan with no descriptor; accent color when the photo is already the focal point |
| A2 | **Divider** | Reset the narrative beat in a long deck | 06 dark · 07 blue · 08 light | Chapter number (a real sequence), section claim or question | Decorative dividers with no beat change; too frequent |
| A3 | **Agenda** | Agree on order and decision points | 10 | Items stating the *question or decision*, not labels | A formal TOC that never returns in the deck |
| A4 | **Proof / hero number** | Prove one claim with one number plus supporting facts | 15 · 16 · 42 | Claim title, hero number (period, denominator, dedup noted), 2–4 facts, evidence image slot, source line | Four identical stat tiles; numbers without period or source; accent on more than the hero |
| A5 | **Data chart** | Prove one relationship | 17 · 18 · 19 · 43 · 44 | Claim title, unit label, direct labels, source line with formula and period | Chart as decoration; missing zero baseline; rainbow series; topic-label title ("현황") |
| A6 | **Comparison** | Make a choice legible on named axes | 21 · 46 | Axis names, two columns, accent on the highlighted column header only | Two identical cards; a rigged all-checks-for-us matrix; more than six axes |
| A7 | **Timeline / roadmap** | Connect time, milestones, and the ask | 22 · 23 · 45 | Period rows, an outcome per phase, "now" accent on the phase being decided | Activity lists without outcomes; fake precision; no link to the ask |
| A8 | **Quote** | Human voice as evidence | 30 · 31 | Quote plus attribution (who, when, context) | Anonymous or undated quotes; quote walls; quotes as mood |
| A9 | **Ask / closing** | State the decision requested, owner, timing, next step | 35 · 36 · 52 | Numbered asks, basis (ordinance, body), next step with timing | "감사합니다" alone; a vague ask; an ask that contradicts earlier numbers |
| A10 | **Beats** | A real sequence — journey, process, itinerary | 24 · 25 · 51 | 3–5 verb-led steps in true order | Numbering things that aren't a sequence |
| A11 | **Executive summary** | Answer-first opening for read decks | 41 | One-sentence recommendation, 2–4 supports, decision/owner/deadline row | Background first, conclusion last; supports without insight |
| A12 | **KPI row** | Board metrics at a glance | 27 · 49 | Fixed KPI definitions, actual vs target, status as a **word** | Definitions that change per meeting; all-green; color-only status |
| A13 | **Bottom-up calc** | Show the math behind a market or budget | 47 · 20 | Factors with source labels, highlighted result, unknowns stated honestly | Top-down TAM only; invented factors; hidden assumptions |
| A14 | **Risk table** | Risks and assumptions with real ownership | 48 | Risk, likelihood and impact, mitigation, owner and trigger | Every risk "low"; mitigation = "모니터링"; no trigger |
| A15 | **Before → after** | Problem and solution in one frame | 11 · 50 | Labeled sides, 2–4 parallel points each, emphasis on "after" | Strawman "before"; a feature list as "after" |
| A16 | **Statement** | Full-bleed single line | 53 · 54 | One display line, optional sub | Using it for a content slide; more than one idea |
| — | **Image slot** | Placeholder for the image workflow | 14 · 33 · 34 | `<image-slot id placeholder="evidence type, orientation, mood">` | Auto-picking images; shipping an empty slot |

## Slides with no archetype

Present in the template, outside A1–A16. Organizational and commercial contexts.

| Slide | Use | Watch |
|---|---|---|
| 12 핵심 메시지 | One-sentence message plus support | Not A16 — 12 is a content slide, 53/54 are statements |
| 13 3-포인트 카드 | Three peer items | **A uniform three-card grid is on the anti-slop list.** Only when the three are genuinely peers |
| 26 제휴 조건 | Commercial terms | Confirmed terms only; mark the unconfirmed as unconfirmed |
| 28 조직도 · 29 팀 소개 | Prove who executes | Investor decks lead with problem-fit, not job titles |
| 32 파트너 목록 | Logos and names | Only signed or agreed partners — a meeting is not a partnership |
| 02–05 · 37–40 | Template usage and method | **Delete from any real document** |

## Backlog

Add only when a real deck needs one: problem-journey, mechanism/flow diagram, appendix evidence bank.
