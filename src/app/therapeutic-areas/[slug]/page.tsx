import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TherapeuticDetailPage } from "@/components/therapeutic/TherapeuticDetailPage";
import { getTherapeuticPage, therapeuticPages } from "@/lib/therapeutic-pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return therapeuticPages.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getTherapeuticPage(slug);
  if (!area) return {};
  return {
    title: `${area.title} | Therapeutic Areas | TruMinds Clinical`,
    description: area.content.hero.description,
  };
}

export default async function TherapeuticAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getTherapeuticPage(slug);
  if (!area) notFound();

  return <TherapeuticDetailPage area={area} />;
}
