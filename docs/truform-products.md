# TruForm product pages

The ten requested `/truminds-ai/[slug]` pages use one shared layout in `src/components/products/ProductDetailPage.tsx`. Editable copy lives in `src/data/truform-products.json`; the compact catalog in `src/data/truform-catalog.json` supplies names, images, numbering and short descriptions to both the product pages and the homepage carousel.

The catalog retains the existing homepage order, numbering, image paths and descriptions. The inner-page product navigation follows the requested order: EDC, SDTM, ADaM, TLF, DocuVault, eConsent, Adjudication, RBQM, CTMS and RTSM. It adds no ePRO route.

## Source content

The source is `TruMinds Clinical Website Jul 29th_7105.docx`. Each overview preserves the complete expanded description from the later product section of the document:

| Product | Source paragraph range |
| --- | --- |
| EDC | 397–400 |
| SDTM | 403–406 |
| ADaM | 409–412 |
| TLF | 415–418 |
| DocuVault | 421–425 |
| eConsent | 428–431 |
| Adjudication | 434–437 |
| RBQM | 440–443 |
| CTMS | 446–449 |
| RTSM | 452–454 |

Capability summaries and workflow stages are editorial groupings of functions described in the document's product sections. Workflow diagrams illustrate the described process; they are not software screenshots, mandatory operating procedures or performance guarantees. Related-product cards support navigation through the ecosystem and do not imply an integration unless the source explicitly describes one. Editorial instructions and competitor positioning notes in the document are not published as site copy.

## Editing and interaction

Each product has a hero, source overview, four expandable capability panels, three workflow stages, three related tools and an enquiry call to action. Capability panels use native accessible disclosures; the workflow supports keyboard arrows, Home and End. All body text and controls use 18px medium IBM Plex Sans with the homepage's responsive heading scale, colours and button style.

Keep product slugs unique and all related-product references pointed at existing catalog entries. Use files within `public` for image paths. The existing site contact form is the destination for enquiry buttons; no separate form, demo application or external scheduling dependency is added.
