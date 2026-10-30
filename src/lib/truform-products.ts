import content from "@/data/truform-products.json";
import { aiServices, type AiService } from "@/lib/truminds-ai";

export type ProductFeature = {
  id: string;
  icon: string;
  title: string;
  summary: string;
  items: string[];
};

export type ProductWorkflowStage = {
  id: string;
  icon: string;
  title: string;
  description: string;
  inputs: string[];
  action: string;
  outputs: string[];
};

type ProductDetail = {
  slug: string;
  name: string;
  fullName: string;
  category: string;
  icon: string;
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    tags: string[];
  };
  overview: {
    eyebrow: string;
    title: string;
    highlight: string;
    paragraphs: string[];
    pillars: { icon: string; label: string }[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    items: ProductFeature[];
  };
  workflow: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    steps: ProductWorkflowStage[];
  };
  connections: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    items: { slug: string; context: string }[];
  };
  cta: { title: string; description: string; label: string; href: string };
  source: { headingParagraph: number; paragraphs: number[] };
};

export type TruFormProduct = AiService & { detail: ProductDetail };
export const productPageCopy = content.ui;
export const truformProducts: TruFormProduct[] = content.products.map((detail) => {
  const summary = aiServices.find((item) => item.slug === detail.slug);
  if (!summary) throw new Error(`Missing TruForm catalog entry: ${detail.slug}`);
  return { ...summary, detail };
});

export function getTruFormProduct(slug: string) {
  return truformProducts.find((product) => product.slug === slug);
}

export function getConnectedProducts(product: TruFormProduct) {
  return product.detail.connections.items.map((item) => {
    const connected = getTruFormProduct(item.slug);
    if (!connected) throw new Error(`Missing connected TruForm product: ${item.slug}`);
    return { product: connected, context: item.context };
  });
}
