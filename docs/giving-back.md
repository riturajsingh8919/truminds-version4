# Giving Back pages

The main `/giving-back` page and four `/giving-back/[slug]` pages use the homepage theme, 18px medium IBM Plex Sans, readable heading sizes and black paragraph text on light surfaces. The existing contact form and footer remain supplied by the root layout.

## Source and scope

Source: the supplied `TruMinds Clinical Website Jul 29th_7105.docx`, non-empty paragraphs 462–560. The main page preserves the four full Giving Back paragraphs (464–467), closing statement (468), all eight initiative descriptions, all 52 scope items and all closing statements. Qualifiers such as "Whenever possible" and "Our support may include" are retained.

The four existing navigation categories are Non-profit Research Organizations, Employee Volunteer Programs, Community Outreach and Mentorship Programs. The document does not provide four dedicated descriptions for these categories. Their introductions and topic groupings are editorial summaries grounded in the wider Giving Back statement and the supplied initiatives. No named charity partners, research grants, scheduled volunteering events, mentorship enrollment requirements, donation totals or impact statistics have been added. The initiatives illustrate shared priorities, not separate verified projects under each category.

## Shared implementation

- `src/data/giving-back-catalog.json`: four titles, slugs, short descriptions and existing image references, also used by the header submenu.
- `src/data/giving-back.json`: main-page copy, four inner-page records, exact initiative copy and source paragraph references.
- `src/lib/giving-back.ts`: typed content loading, page lookup and initiative resolution.
- `src/components/giving-back/GivingBackDetailPage.tsx`: one shared inner-page layout. Different records supply its content and initiative selections.
- `GivingBackInitiatives.tsx`: server-rendered native disclosures. Each group allows one open initiative, supports native keyboard use and renders all source content in the HTML without additional client JavaScript.

Header submenu links and the four existing homepage card destinations now open their dedicated pages. The homepage design is unchanged. Original `/giving-back#...` targets remain valid on the main page's area cards. The separate `/non-profit` page is preserved.

Photos reuse existing local assets, including the supplied `/giving-back.jpg`. Hero photos use `object-contain` so the full image remains visible. Decorative and hover motion respects reduced-motion preferences.
