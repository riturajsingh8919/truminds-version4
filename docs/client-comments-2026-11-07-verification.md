# Client comments verification — November 8, 2026

Source: `/Users/rituraj/Downloads/-TruMinds Comments(07-11-2026).docx`.

All 45 non-empty paragraphs were re-read from the original document. The document contains no tables or embedded drawings. This audit checks the current local project and production build, not the hosted deployment. No application code was changed during this audit.

## Requirement-by-requirement result

| Document paragraphs | Requirement | Current result |
| --- | --- | --- |
| 3–12 | Separate main pages for About Us, Services, Therapeutic Areas, Products, Giving Back and Resources; parent navigation opens each page. | **Passed.** All six canonical routes work. The five capitalized/alternate URLs from the document redirect permanently to their canonical destinations without loops, preserving query strings. Parent links remain independently clickable. |
| 14–17, 19–20 | Compact, consistent service banners, service-name main heading, meaningful concept and relevant background/right-side image. | **Passed for structure and function.** All four service detail pages show the correct bold H1, source concept line and matching uploaded photograph on the right. All use the shared header. The largest measured service/product desktop banner was 583px. Visual preference remains subjective. |
| 18 | Professional gradient overlay for text readability. | **Differs from the original document.** The later header redesign uses dark text on a pale background and a separate, unobscured photo. It has a subtle background gradient, but no overlay over the photograph. This is not a literal pass for the original image-overlay request. |
| 21–24 | No buttons on individual therapeutic pages; informative layout with relevant imagery. | **Passed for editorial page content.** All eight main-content regions contain no buttons, form inputs, filters or promotional pill CTAs. All 95 research-focus terms, overview paragraphs and study considerations remain. Shared site-navigation controls, the required short-form Submit button and Back to Top remain outside the editorial content. |
| 25–29 | Larger, bold service names and larger concepts on service pages and Other Services. | **Passed.** Service H1 text is bold; concept lines are at least 26px. Related-service names are bold and their enlarged source concepts are displayed. Related cards now show the full matching landscape images without hover zoom. |
| 30–34 | Correctly linked compact dropdowns, right-side alignment, desktop/mobile support, no arrow marks. | **Passed.** Services, Therapeutic Areas, Products and Giving Back expose their 4, 8, 10 and 4 detail links respectively. Desktop menus are 320px wide and right-aligned to their parent item. Keyboard, hover, mobile disclosure, routing and dismissal checks pass. Header arrow/caret icons are absent. |
| 35–43 | Larger, semibold navigation with contrast, spacing and clear active-page indicators. | **Passed.** Main navigation is 20px/600, submenu links 18px/600. Active parents and current detail links are marked, with visible color/underline treatments and `aria-current`. |
| 44 | Consistent, professional, readable design without unnecessarily oversized banners/buttons. | **Implemented under the subsequent design revisions.** Shared header and form templates, existing brand colors, IBM Plex Sans and responsive typography are retained. Geometry checks found no clipping/overflow in the checked content. An automated check cannot certify subjective claims such as “premium.” |
| 45 | Short contact form on every page except the homepage and Contact page. | **Passed for layout and UI behavior.** All 37 other content routes render one short Name/Email/Message form with consent and Submit. Homepage and Contact each retain their original full form. Required-field validation, consent, pending state, mocked success and error handling pass. Live email delivery has a separate configuration limitation below. |

## Configuration and verification limits

- The local environment has no `RESEND_API_KEY` or `CONTACT_FROM_EMAIL` configured. Only `.env.example` is present. The existing contact API returns “Online submission is temporarily unavailable” when either required setting is missing. The UI is implemented; local real-email delivery is not ready until those settings are supplied. Hosted environment settings were not inspected, so this does not establish the deployment's email status.
- Form success/error checks intercept requests. No real enquiries or emails were sent.
- Image downloads were replaced with geometry fixtures using the uploaded files' measured dimensions during browser checks. The earlier real Next.js optimizer checks passed for representative uploaded assets, including uppercase filenames. No screenshots were taken.
- The working changes remain local and have not been committed, pushed or deployed in this work sequence.

## Fresh checks

- 39 canonical content routes returned HTTP 200; all five document URL aliases returned HTTP 308 correctly.
- Desktop dropdowns checked at 1920px, 1440px and 1380px; mobile behavior checked at 1280px, 1024px, 768px, 390px and 320px.
- All eight therapeutic pages and four service pages checked at desktop and small mobile widths; all ten product overview texts matched their source data.
- All 95 therapeutic focus terms and source study-consideration text remained intact.
- All 37 short-form placements and both full-form exceptions passed, including intercepted validation/pending/success/error behavior.
- 25 protected homepage/form/data source hashes and the original homepage contact-section return markup matched their initial baselines. The Contact page's header was intentionally changed by later requests; its full form and body content remain preserved.
- Fresh full-project lint passed. The most recent production build passed and was used for this audit. `git diff --check` passed.

The implementation is functionally complete for the document's page, navigation, typography, therapeutic-content and form-layout requirements. The original image-overlay instruction differs from the later design, and local live email delivery still requires configuration. It should therefore not be described as an unqualified, literal 100% completion of every original instruction plus live delivery.

## Subsequent navigation breakpoint request

The user subsequently requested full navigation on tablets, with the hamburger only below 768px. This replaces the earlier 1380px collapse breakpoint described in the historical checks above.

- Full navigation is visible at 768px and above; the hamburger and mobile drawer are limited to widths below 768px.
- Tablets from 768–1023px use a compact two-row header, with the logo above the full navigation row. At 1024px and above, logo and navigation share one row, preserving the 82px desktop header height.
- Main-link text is 17px at 768–799px, 18px at 800–1439px, and 20px at 1440px and above; semibold weight and at least 12px link gaps are retained. Mobile menu typography remains unchanged.
- The first tablet dropdown is aligned to avoid overflowing the viewport. Tablet dropdown heights accommodate the taller header. First touch opens a submenu; a second touch opens its parent page. Submenu links remain directly tappable. Switching across the 767/768px boundary dismisses the previous menu.
- Checks passed at 320, 390, 640, 767, 768, 800, 820, 900, 1023, 1024, 1100, 1280, 1380, 1439, 1440, 1920 and 2560px. Touch interaction passed at 768, 820 and 1024px; keyboard controls and short-height dropdown bounds also passed. Build, targeted lint and diff checks passed. Only header TSX/CSS application files changed; homepage/body sections are untouched. No screenshots or live submissions were made.
