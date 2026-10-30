# Service page content

All four `/services/[slug]` pages use `src/components/services/ServiceDetailPage.tsx`. Their copy, images, service navigation, capability catalog and enquiry calls to action come from `src/data/services.json`, through the typed helpers in `src/lib/services.ts`. The homepage service card names, descriptions and images are preserved in that same JSON file.

## Source coverage

The supplied source is `TruMinds Clinical Website Jul 29th_7105.docx`.

- Full-service CRO: source paragraphs 625–627 provide the overview. Complete Clinical Operations, Pharmacovigilance & Drug Safety, Medical Affairs, and Quality Assurance & Compliance descriptions and lists are retained from paragraphs 633–746. Clinical Operations follows Clinical Project Management, and drug safety is included with pharmacovigilance.
- FSP services: the overview uses the FSP + CRO delivery model in paragraphs 753–754. It shares the CRO capability catalog, as requested in paragraph 755.
- Clinical staffing: paragraph 757 requests the CRO capability catalog but provides no replacement staffing introduction. The existing introduction is retained, and the shared clinical capability catalog is available.
- TruMinds AI: the overview and platform capabilities use the TruForm copy in paragraphs 332–389. This page presents platform tools rather than repeating the clinical service list. The document includes ePRO; its scope is displayed without inventing an unimplemented product detail URL.

Clinical Project Management, Clinical Data Management, Biostatistics, Statistical Programming and Regulatory Affairs are existing functions named in the document. Their short capability descriptions are editorial summaries grounded in those functions and the existing site copy. No new performance statistics, certifications or delivery guarantees have been added.

## Editing

Update `services[].detail` for each page's sections. Shared clinical scope is stored once under `capabilities`, and `capabilityGroups` defines the order of each catalog. Keep capability IDs unique, point every group reference to an existing capability, and use paths to existing files inside `public` for images. `sourceParagraphs` and `source.coverage` provide editorial provenance and are not shown on the website.

All paragraph and control text uses 18px IBM Plex Sans at medium weight. Responsive headings follow the homepage scale. The capability browser supports keyboard navigation on desktop and a labelled native selector on mobile. The existing site contact form is the destination of each page's enquiry buttons.
