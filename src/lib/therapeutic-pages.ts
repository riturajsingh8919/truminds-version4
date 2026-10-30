import content from "@/data/therapeutic-areas.json";
import { therapeuticAreas, type TherapeuticArea } from "@/lib/therapeutic-areas";
import { getServiceBySlug } from "@/lib/services";

export type TherapeuticFocusGroup = {
  id: string;
  title: string;
  icon: string;
  items: string[];
  sourceParagraphs: number[];
};

type TherapeuticContent = {
  slug: string;
  icon: string;
  imageAlt: string;
  hero: { eyebrow: string; headline: string; description: string };
  overview: { eyebrow: string; title: string; highlight: string; paragraphs: string[] };
  focus: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    groups: TherapeuticFocusGroup[];
  };
  delivery: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    items: { icon: string; title: string; text: string }[];
  };
  cta: { title: string; description: string; label: string; href: string };
  source: { headingParagraph: number; overviewParagraph: number; focusParagraphs: number[] };
};

export type TherapeuticPage = TherapeuticArea & { content: TherapeuticContent };
export const therapeuticPageCopy = content.ui;
export const therapeuticPages: TherapeuticPage[] = content.areas.map((area) => {
  const summary = therapeuticAreas.find((item) => item.slug === area.slug);
  if (!summary) throw new Error(`Missing therapeutic area catalog entry: ${area.slug}`);
  return { ...summary, content: area };
});

export const therapeuticDeliveryModels = content.deliveryModels.map((slug) => {
  const service = getServiceBySlug(slug);
  if (!service) throw new Error(`Missing therapeutic delivery service: ${slug}`);
  return service;
});

export function getTherapeuticPage(slug: string) {
  return therapeuticPages.find((area) => area.slug === slug);
}
