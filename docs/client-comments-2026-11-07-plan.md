# Implementation plan for the November 7 client comments

Source: `/Users/rituraj/Downloads/-TruMinds Comments(07-11-2026).docx`. The entire document contains 45 non-empty paragraphs. The OOXML package contains no images, tables, comments, tracked insertions or tracked deletions. Paragraph 44 joins the overall requirement and the Contact Form heading; paragraph 45 supplies the final requirement and is included below.

The user's explicit scope protects every homepage content section. The document requests a shared header change, which will also be visible on the homepage. The existing homepage content, photos, animation, layout, global typography and full contact form are protected. The dedicated contact page and its full form remain unchanged.

## Requirement mapping and implementation

| Source paragraphs | Client requirement | Implementation |
| --- | --- | --- |
| 3–12 | Individual pages for About Us, Services, Therapeutic Areas, Products, Giving Back and Resources; each navigation item opens its own page. | Verify the existing canonical routes and retain them. Add permanent redirects from the document's `/Services`, `/Therapeutic-Areas`, `/Products`, `/Give-Back` and `/Resources` examples to the current lowercase routes. Keep parent navigation anchors independently clickable. |
| 13–20 | Professional, compact service banners; service-name heading; short concept line; relevant background/right image; gradient overlay; consistent design. | Introduce a shared compact inner-page banner. Apply it to the four service detail pages, product detail pages and overview-page headers. Keep images relevant, use a continuous readability gradient, reduce large portrait/card framing and remove oversized hero CTA groups. Preserve the source headings, concepts, descriptions and facts. |
| 21–24 | No buttons on individual therapeutic area pages; clean, informative design; relevant full-background/right image. | Use the compact image banner without actions. Render the complete research-focus groups as static information, removing filter/reset buttons and promotional CTA buttons. Preserve the clinical descriptions, all 95 focus terms, study considerations and ordinary text navigation. Shared header controls, the required short-form submit control and global utilities remain functional; these are separate from the therapeutic page's editorial content. |
| 25–29 | More prominent bold service names and larger concepts on service pages and in Other Services, with spacing and hierarchy. | Use bold service headings with larger readable concept text. Increase related-service card title weight/size and display each existing service concept line alongside its description. Keep body copy at the established 18px. |
| 30–34 | Dropdowns where applicable; correctly linked; smooth desktop/mobile behavior; small menus after the navigation's right side; no arrow marks. | Add compact right-aligned dropdowns for Services, Therapeutic Areas, Products and Giving Back using existing detail routes. Use hover/focus and keyboard support on desktop; explicit View/Hide disclosure text on mobile. Omit arrow/caret marks throughout the header. |
| 35–43 | Larger, bold/semi-bold, higher-contrast navigation; spacing; premium corporate appearance; active-page indicator. | Scope 20px semibold main navigation and 18px submenu text to the header with CSS Modules. Add active underline/color and `aria-current` for parent and detail routes. Preserve the existing header bar height and adjust its desktop breakpoint to prevent crowded navigation. |
| 44 | Consistent, modern, professional, readable pages; avoid unnecessary oversized banners and buttons. | Keep the existing brand palette, IBM Plex Sans, responsive sizing and 18px medium body text. Scope visual changes to the requested banners, navigation, service names and inner-page forms. |
| 45 | “Us short contact form for all pages expect home page and contact page”. | Render a separate compact form on inner pages with Name, Email, Message, consent and Submit. Keep the existing full homepage form and dedicated contact-page form intact. Reuse the existing contact endpoint and preserve error/success behavior. |

## Implementation order

1. Record homepage and dedicated contact-page file hashes before implementation.
2. Add shared compact banner and apply it to the targeted page templates.
3. Remove therapeutic editorial buttons while preserving all clinical content.
4. Add compact inner-page enquiry form with a route-specific branch in the shared contact section.
5. Build accessible header dropdowns, active states and scoped typography; add URL compatibility redirects.
6. Validate every linked route, keyboard and mobile navigation, typography, banner sizing, contact form validation/success/error states and homepage protection hashes. Do not submit live test emails or take website screenshots.

## Acceptance checks

- Homepage component files, global styles, original full form and dedicated contact page retain their pre-change hashes.
- The homepage retains its full form and the dedicated contact page retains exactly one full form.
- Other routes expose exactly one compact enquiry form with three text fields and consent.
- All eight therapeutic detail-page main regions contain no button elements, search controls or promotional pill CTAs; all 95 focus terms remain present.
- Main navigation parent links, all dropdown links, active states, keyboard handling and right-aligned compact menu bounds work on desktop and mobile.
- All six document-listed main page destinations and their URL variants resolve correctly.
- Build, targeted lint, responsive checks and source-content comparisons pass.

## Completed implementation and validation — November 8, 2026

All implementation steps above are complete. Changes are local; no commit, push or deployment was performed.

- `npm run build`: passed, including static generation and the URL compatibility proxy.
- `npm run lint`: passed without warnings or errors.
- `git diff --check`: passed.
- All 39 canonical content routes returned HTTP 200. All five document URL variants returned HTTP 308, preserved query strings and reached their canonical pages without redirect loops.
- All 37 inner routes render exactly one short enquiry form. The homepage and `/contact-us` each retain exactly one original full form.
- All 26 protected source-file SHA-256 hashes match the baseline. The original homepage contact-section return markup also matches exactly. Global styles and every homepage component remain unchanged.
- Desktop navigation passed at 1920px, 1440px and 1380px: correct links, compact 320px right-aligned menus, active parent/detail states, 20px semibold parent text, 18px semibold submenu text and no arrow marks. Arrow keys, Home, End, Escape and direct parent-page navigation passed.
- Mobile navigation passed at 1280px, 1024px, 768px, 390px and 320px, including all four submenu families, child-page navigation, menu dismissal and Escape focus restoration. The outside-dismiss listener uses pointerdown so swapping the mobile menu icon cannot immediately close the opened menu.
- All eight therapeutic detail pages passed at 1440px, 390px and 320px: no editorial buttons or filter controls, all 95 focus terms in source order, exact overview paragraphs and study-consideration text.
- All four service detail pages passed at 1440px, 390px and 320px, including bold service names, enlarged concept lines and all related-service concepts. The three overview pages passed at 1440px, 768px and 320px. All ten product overview texts matched their source data. The largest checked desktop service/product banner was 503px tall.
- Responsive DOM measurements found no page overflow or clipped text in the checked regions. Headless interaction checks reported no JavaScript page errors. Image downloads were stubbed for these functional checks; no website screenshots were taken.
- Short-form required fields, required consent, submission payload, disabled/loading state, success reset and error-value preservation passed with intercepted responses. No live enquiries or emails were sent.

## Follow-up: inner-page header redesign

The user's subsequent request replaces the first banner treatment across all 38 inner pages. The shared hero now uses a continuous pale background, bold navy headings, blue concept text, black 18px medium descriptions, visible photographic panels with asymmetric rounded corners and fine teal outlines, and a separate supporting-detail row. Breadcrumbs, page content, captions and relevant links are retained. Desktop sizes use ordinary responsive Tailwind values; no clamp sizing was introduced. Therapeutic editorial content remains button-free.

The design research included [Linear Clinical Research by Juicebox](https://www.juicebox.com.au/work/linear/), [Catalyst on Awwwards](https://www.awwwards.com/sites/catalyst-2), and [Arya Clinical by Trialsfocus on Dribbble](https://dribbble.com/shots/27371589-Arya-Clinical-Website-Design-for-a-Clinical-Trial-Site-Network). These informed the editorial direction; no reference assets or copy were imported.

The same header system now covers About Us, Services and four details, Therapeutic Areas and eight details, Products and ten details, Giving Back and four details, Contact, Non-profit, Resources, Careers and the three policy pages. Utility pages use a compact text-led variant. Existing approved photos are reused, with focal positions adjusted for the About, Contact and Giving Back portraits.

Final verification: build and lint passed; all 38 headers passed at 1440px, 768px, 390px and 320px. Checks covered heading/paragraph typography, photographic bounds, asset existence, breadcrumb/section links, form presence, all 95 therapeutic focus terms and page overflow. The largest desktop header measured 567px. No JavaScript errors, screenshots or live form submissions occurred. Homepage components, global styles, navigation and form sources match the pre-redesign hashes. Seven extracted body-section source comparisons also match exactly, including the contact addresses and full form. The Contact page's header changed as requested; its body did not. Changes remain local.

## Uploaded header photographs

All 33 files in `public/pageHeader` are now mapped in `src/data/page-header-images.ts`. Their measured dimensions are predominantly 3:2 rather than 16:9. After this was explained, the user selected: “Show the full photo using its natural ratio (recommended)”. This decision supersedes the earlier fixed 16:9 frame requirement.

The shared header now renders the selected file using only `next/image`, with its real intrinsic width/height, full responsive width and automatic height. The shape follows the photograph's natural ratio. The previous inset and fixed aspect ratio are removed, avoiding padding gaps, stretching and zoom cropping. The existing asymmetric rounded shape is retained. Source assets are unchanged, including their original filename casing.

All 33 photographs are used across 35 photographic page headers. The dedicated Non-profit page shares the uploaded Non-profit image with the related Giving Back detail page; Careers uses the uploaded Clinical Staffing image. Policy pages retain their text-only headers. Homepage and body-card image sources remain unchanged.

Build, lint and diff checks passed. All 35 photographic routes passed at 1440px, 768px and 320px, checking exact asset/alt mappings, Next.js Image markup, intrinsic ratios, edge-to-edge frame dimensions and page overflow. Three real optimizer requests also passed, including `Neuroscience.JPG` and `ADaM.jpg`. Original public assets and protected homepage/navigation/form source hashes matched their baselines; existing page body sections also matched. No screenshots or live form submissions were taken.

## Related-service card image correction

The subsequently reported “More ways to work together” section is shared by all four service detail pages. Its cards now reuse the matching uploaded landscape service photographs through Next.js Image, using their native width/height and responsive automatic height. The fixed aspect-ratio crop, focal offsets and hover zoom have been removed. Existing card text, links and border effects remain intact. Desktop, tablet and mobile checks passed on all four pages, including full-image fitting during hover. Build, targeted lint and diff checks passed. Homepage and other source files remain unchanged apart from the shared service-card template and an explanatory comment in the image mapping.
