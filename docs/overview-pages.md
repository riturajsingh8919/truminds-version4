# Routed overview pages

The main routes `/services`, `/therapeutic-areas` and `/products` provide entry points to the existing detail pages. All three use a shared overview hero that follows the existing inner-page patterns: breadcrumb, page title, supporting headline, image, enquiry action and section navigation. Services and Therapeutic Areas use the existing navy and teal palette; Products uses the pale background already present on product detail pages. New styling is scoped to new components and uses the existing shell and type scale, including 18px medium body and link text. Hero photos use `object-contain`.

## Content

- Services resolves all four delivery models and nine clinical capabilities from `src/lib/services.ts` and its existing JSON data.
- Therapeutic Areas resolves all eight specialties, images, descriptions and example focus terms from `src/lib/therapeutic-pages.ts`.
- Products resolves all ten existing TruForm detail records from `src/lib/truform-products.ts`. Three editorial browsing groups organize the products by capture/participation, operations/oversight and standards/reporting. These groups are navigation aids, not new capabilities or technical workflow requirements.

Page introductions, metadata, section headings, product group membership and CTA text are editable in `src/data/overview-pages.json`. Existing detail records and homepage carousel ordering remain the source for individual service, area and product content. No new products or service claims have been added.

## Navigation scope

Desktop and mobile header destinations now open the overview routes. Existing footer destinations for Therapeutic Areas and TruForm Platform lead to their new pages. Detail-page breadcrumbs and collection-return links route back to these overview pages. Existing detail route URLs, page bodies, interactions, homepage sections and shared global styling are preserved.

Each new page uses the existing global contact section once. Existing homepage anchor URLs remain valid.
