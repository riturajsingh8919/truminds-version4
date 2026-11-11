# November 11 client requirements

Source: `/Users/rituraj/Library/Mobile Documents/com~apple~Pages/Documents/Website Development Requirements.pages`. Read the complete main text from the Pages archive and inspected its embedded preview. The source numbering skips 2; no requirement has been inferred for that missing number.

## Scope

- Add Resources dropdown entries for Insights, Case Studies, White Papers, News and Events. Following user clarification, build the category content from existing site copy/capabilities and call content from JSON. Preserve the original Resources articles and their anchors.
- Add an FSP Services submenu with all ten specified capabilities. Link into the existing FSP capability content rather than inventing completed projects or unsupported service claims.
- Per the user's follow-up, align each desktop/tablet dropdown to its own parent link's right edge. On narrow viewports, shift it only enough to stay on screen. On mobile, keep each submenu aligned with its parent row. Preserve full navigation from 768px and the hamburger below 768px.
- Improve loading without changing existing homepage visuals or content: reduce automatic route prefetching, avoid rendering inactive capability panels and split route-specific contact form code.
- Present About Us reach locations as a single horizontal line with country flags and names. Preserve Europe as a region with a region icon rather than mislabeling it as a country.
- Enhance the shared therapeutic atlas on all eight detail pages with larger, colorful professional icons, clearer grouping and accessible interaction. Preserve all clinical terms and existing text.

## Verification

Check all new destinations, FSP hash selection, nested keyboard/touch navigation, consistent menu-edge alignment and viewport containment, exact 767/768px switching, horizontal country row, all eight atlas renderings, preserved existing content, and before/after loading payloads. Do not take website screenshots or submit real enquiries. No push or deployment is requested.

The production build and lint passed. Headless checks covered 53 content routes, all 10 FSP links, the five desktop dropdowns from 768px through 1920px, and mobile and tablet touch navigation. They also verified the original homepage sources and assets, Resources articles, contact forms, and all 95 therapeutic focus terms. No screenshots or live submissions were used.

In local production measurements with media stubbed, the desktop homepage made 3 automatic route prefetch requests instead of 17 (145 KB instead of 445 KB in decoded response bodies). The FSP page served 160 KB of HTML instead of 243 KB at both tested widths, 390px and 1440px. These measurements compare payloads; they do not represent live load times.
