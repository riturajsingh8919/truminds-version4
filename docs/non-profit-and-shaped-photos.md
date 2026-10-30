# Non-profit page and shaped photos

The homepage About Us and Giving Back visuals share `ConnectedDataImage.tsx`. Their existing prism masks, mirrored layout and source photos are preserved. Photo dimensions now come from the rendered shape instead of viewport height. The smallest cover size plus at most 32px of vertical travel keeps the image close to its native framing. Fixed-scroll positioning is bounded by the image's available overflow, preventing uncovered edges as the section scrolls. Reduced-motion mode uses a centered cover fit without the extra travel. Both SVG masks and the earlier image-shape assets are retained.

`/non-profit` uses `src/components/non-profit/NonProfitPageContent.tsx` and editable page copy in `src/data/non-profit.json`. The new layout provides a full portrait hero photo, overview, the existing People/Partnership/Access values, eight giving-priority cards and a contact action. It retains the site's global enquiry form once. The existing homepage non-profit pill visual remains unchanged.

Page content builds on the previous Non-profit copy and existing approved Giving Back content in `src/data/giving-back.json`. The overview reuses the complete charitable partnerships paragraph, and priority cards reuse the exact initiative titles and opening statements. Cards link to the corresponding eight main Giving Back initiative anchors, where full details remain available. No partner names, grant schemes, impact statistics, scheduled activities or donation amounts have been invented.

Paragraphs, links and controls use 18px medium IBM Plex Sans, and light-surface paragraphs are black. The hero photo uses its native 2:3 ratio with `object-contain` rather than the old cropped pill window.
