import type { Metadata } from "next";
import { PolicyPage } from "@/components/layout/PolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | TruMinds Clinical",
  description: "Information about privacy when contacting TruMinds Clinical through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      heading="Privacy Policy"
      intro="This page explains the basic information involved when you use this website to contact TruMinds Clinical. Client and clinical research data are handled under separate arrangements."
      sections={[
        {
          heading: "Information you choose to share",
          paragraphs: [
            "When you contact us, you may share your name, organization, email address, phone number and details about your enquiry. Please do not include patient records or sensitive health information in a general website enquiry.",
          ],
        },
        {
          heading: "How the enquiry form works",
          paragraphs: [
            "The Get Started flow on this website prepares a message in your email application. The message is sent only if you choose to send it. The website itself does not store a submitted copy of that form.",
          ],
        },
        {
          heading: "How we use enquiries",
          paragraphs: [
            "We use information you send to respond to your request and discuss the services you asked about. Your email provider and our email services may process messages as part of delivering and managing that correspondence.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You can contact us to ask about information you have sent, request a correction, or ask for deletion where applicable. Include enough detail to help us identify the relevant correspondence.",
          ],
        },
      ]}
    />
  );
}
