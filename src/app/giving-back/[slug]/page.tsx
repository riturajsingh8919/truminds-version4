import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GivingBackDetailPage } from "@/components/giving-back/GivingBackDetailPage";
import { getGivingBackPage, givingBackPages } from "@/lib/giving-back";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return givingBackPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getGivingBackPage(slug);
  if (!page) return {};
  return { title: `${page.title} | Giving Back | TruMinds Clinical`, description: page.heroDescription };
}

export default async function GivingBackAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getGivingBackPage(slug);
  if (!page) notFound();
  return <GivingBackDetailPage page={page} />;
}
