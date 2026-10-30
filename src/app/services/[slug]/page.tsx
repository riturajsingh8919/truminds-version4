import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { getServiceBySlug, getServiceCapabilities, services } from "@/lib/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | Services | TruMinds Clinical`,
    description: service.detail.heroDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} capabilities={getServiceCapabilities(service)} />;
}
