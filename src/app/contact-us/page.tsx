import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import copy from "@/data/contact-page.json";

export const metadata: Metadata = copy.metadata;

export default function ContactUsPage() {
  return <ContactPageContent />;
}
