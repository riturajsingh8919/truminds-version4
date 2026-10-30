# About Us page content

Source: `TruMinds Clinical Website Jul 29th_7105.docx`, supplied by the client.

The dedicated ABOUT US PAGE section contains one change: add Medical Diagnostics to Markets We Serve (non-empty paragraph 620). The document also supplies a company overview (paragraph 611). Its three sentences appear in full, in order, under Who We Are. The five geographic regions follow the same paragraph; Europe is presented as a region, not counted as a country or office.

The five market categories combine the four organization types in the overview with the requested Medical Diagnostics addition. Their short descriptions are editorial summaries, not additional client-provided paragraphs. The delivery approach uses the existing About Us page introduction plus the CRO delivery model and TruForm description (paragraphs 626–627). The document does not provide separate About Us mission, vision, company timeline or company statistics; none have been invented.

All editable page copy and metadata live in `src/data/about-us.json`. The page resolves service titles and routes against the existing services data. It reuses the approved leadership data, carousel and biography dialog without changing the shared component or homepage.

The hero uses the supplied `/about-main.jpg` in its original square ratio with `object-contain`. Paragraphs, links and controls use the established 18px medium IBM Plex Sans. Light-surface paragraphs are black. New hover feedback respects reduced-motion preferences. The shared layout supplies the contact form and footer once.
