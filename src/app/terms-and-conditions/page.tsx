import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";

export const metadata: Metadata = {
  title: "Terms & Conditions | TruMinds Clinical",
  description: "Basic terms for using the TruMinds Clinical website.",
};

export default function TermsAndConditionsPage() {
  return (
    <PolicyPage
      heading="Terms & Conditions"
      intro="These basic terms describe the use of this public website. Any clinical research or professional services are governed by separate agreements."
      sections={[
        {
          heading: "Website information",
          paragraphs: [
            "Content on this website is provided to introduce TruMinds Clinical, its areas of expertise and ways to get in touch. It is general information and is not medical, clinical or regulatory advice for a specific situation.",
          ],
        },
        {
          heading: "Service enquiries",
          paragraphs: [
            "Submitting an enquiry does not create a client relationship or commit either party to a service. Scope, deliverables and other commercial terms are agreed separately in writing.",
          ],
        },
        {
          heading: "Website content",
          paragraphs: [
            "The text, design, images and branding on this website belong to TruMinds Clinical or their respective owners. Please contact us before reusing them outside ordinary personal reference or linking to this site.",
          ],
        },
        {
          heading: "External websites and updates",
          paragraphs: [
            "Links to other websites are provided for convenience, and those sites have their own terms and policies. We may update this website and these terms as the site evolves.",
          ],
        },
      ]}
    />
  );
}
