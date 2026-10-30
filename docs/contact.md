# Contact page

`/contact-us` uses the existing navy, teal and blue theme, IBM Plex Sans and 18px medium paragraph, link and form text. Its hero gives direct email and phone access. The office directory follows the hero, with all five existing addresses, country flags, the existing animated presence map and Google Maps search links built from each full address. Addresses use a compact two-column grid on wider screens, with the final location spanning the row. The full-width enquiry form comes after the office directory.

## Shared content and behavior

`src/data/contact.json` holds the contact email, phone and five office records, copied without changing the addresses from the global presence section and footer. Both the homepage presence map and contact page use these office records. `src/data/contact-page.json` holds editable page copy and metadata. Country flags were extracted unchanged into `src/components/common/CountryFlag.tsx`.

`src/components/contact/ContactForm.tsx` reuses the existing form fields, required consent and submission handler. It posts the same payload to `/api/contact`, disables submission while waiting, clears fields after success and preserves entered values on failure. The original root contact section reuses this form. It omits itself on `/contact-us` using Next.js `usePathname`, so this page contains one form and other pages retain their contact section after client navigation.

The header and footer Contact Us destinations point to `/contact-us`. Existing in-page enquiry anchors remain valid. The contact page itself preserves `#contact` for its form and adds `#our-offices` for the office directory.

## Delivery configuration

The existing email API and its configuration are unchanged. Real delivery uses the existing `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` and optional `CONTACT_TO_EMAIL`. UI submission checks should intercept requests to simulate success and failure without sending test emails. These checks verify the form flow, not live delivery.
