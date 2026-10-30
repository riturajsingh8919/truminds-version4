import type { Metadata } from "next";
import { AboutUsContent } from "@/components/about/AboutUsContent";
import content from "@/data/about-us.json";

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};

export default function AboutUsPage() {
  return <AboutUsContent />;
}
