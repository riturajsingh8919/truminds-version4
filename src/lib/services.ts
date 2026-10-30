import content from "@/data/services.json";

export type ServiceFeature = {
  icon: string;
  title: string;
  text: string;
};

export type ServiceCapability = {
  id: string;
  title: string;
  icon: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  summary: string;
  paragraphs: string[];
  scopeTitle: string;
  items: string[];
  href?: string;
  linkLabel?: string;
  sourceParagraphs?: number[];
};

export type Service = {
  slug: string;
  title: string;
  description: string;
  hoverDescription: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  detail: {
    eyebrow: string;
    headline: string;
    heroDescription: string;
    facts: { label: string; value: string }[];
    overview: {
      eyebrow: string;
      title: string;
      highlight: string;
      paragraphs: string[];
      highlights: ServiceFeature[];
    };
    capabilities: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
      group: string;
    };
    partnership: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
      items: ServiceFeature[];
    };
    cta: {
      title: string;
      description: string;
      label: string;
      href: string;
    };
  };
};

export const services: Service[] = content.services;
export const servicePageCopy = content.ui;
const capabilities: ServiceCapability[] = content.capabilities;
const capabilityGroups: Record<string, string[]> = content.capabilityGroups;

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceCapabilities(service: Service) {
  const ids = capabilityGroups[service.detail.capabilities.group];
  if (!ids) throw new Error(`Missing capability group for ${service.slug}`);

  return ids.map((id) => {
    const capability = capabilities.find((item) => item.id === id);
    if (!capability) throw new Error(`Missing service capability: ${id}`);
    return capability;
  });
}
