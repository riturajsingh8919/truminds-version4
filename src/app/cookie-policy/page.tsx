import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | TruMinds Clinical",
  description: "Basic information about cookies on the TruMinds Clinical website.",
};

export default function CookiePolicyPage() {
  return (
    <PolicyPage
      heading="Cookie Policy"
      intro="This page describes the website's current use of cookies and how you can manage them in your browser."
      sections={[
        {
          heading: "Current website use",
          paragraphs: [
            "The current website application does not intentionally set analytics, advertising or preference cookies. Its main pages and contact flow work without creating an account.",
          ],
        },
        {
          heading: "Technical services",
          paragraphs: [
            "Like most websites, hosting and security services may process technical request information needed to deliver and protect the site. If you follow a link to another website, that site's own cookie practices apply.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can inspect, block or remove cookies through your browser settings. If optional website cookies are introduced in the future, this page will be updated to explain their purpose and available choices.",
          ],
        },
      ]}
    />
  );
}
