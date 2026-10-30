# Therapeutic area pages

The eight existing `/therapeutic-areas/[slug]` routes share `src/components/therapeutic/TherapeuticDetailPage.tsx`. The layout gives each specialty a clinical portrait hero, complete source overview, searchable focus explorer, study considerations, delivery-model links, eight-area navigation gallery and enquiry path to the existing contact form.

## Content sources

`src/data/therapeutic-catalog.json` preserves the homepage card titles, order, descriptions, images and focal positions. `src/data/therapeutic-areas.json` contains the inner-page copy and focus lists. Typed loading helpers are in `src/lib/therapeutic-pages.ts`.

The supplied document is `TruMinds Clinical Website Jul 29th_7105.docx`:

| Area | Overview paragraph | Focus paragraphs | Focus items |
| --- | --- | --- | --- |
| Oncology & Hematology | 25 | 27–42 | 16 |
| Cardiovascular | 44 | 46–58 | 13 |
| Neuroscience | 60 | 62–73 | 12 |
| Immunology | 75 | 77–88 | 12 |
| Infectious Diseases | 90 | 92–103 | 12 |
| Rare Diseases | 236 | 238–246 | 9 |
| Endocrinology | 105 | 107–118 | 12 |
| Ophthalmology | 175 | 177–185 | 9 |

All eight overviews and all 95 focus items preserve the document's wording. Focus terms are organized into editorial topic groups to support browsing and filtering; these are not diagnostic classifications, treatment advice or separate disease pages. The existing study consideration copy is retained. Other therapeutic specialties mentioned in the source document are outside the requested eight-area scope.

## Editing and interaction

Keep slugs, focus group IDs and focus terms unique within their area. Keep the complete source focus list when editing categories. `source` and `sourceParagraphs` fields provide editorial provenance and are not shown on the website.

The focus explorer supports case-insensitive search, group filters, clear and reset controls, result announcements and an empty state. It submits no personal data. The initial server-rendered page contains the complete focus list. All paragraph and control text uses 18px medium IBM Plex Sans, with homepage heading sizes, brand colours and button styling. Hero photos retain their portrait proportions.

This work changes the inner pages. The homepage cards, their links and existing hover behavior are preserved.
