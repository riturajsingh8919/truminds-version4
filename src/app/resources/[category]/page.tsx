import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceCategoryPage } from "@/components/resources/ResourceCategoryPage";
import { getResourceCategory, resourceCategories } from "@/lib/resources";

type Props = { params: Promise<{ category: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return resourceCategories.map(category => ({ category: category.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getResourceCategory((await params).category);
  return category ? { title: `${category.title} | Resources | TruMinds Clinical`, description: category.description } : {};
}
export default async function Page({ params }: Props) {
  const category = getResourceCategory((await params).category);
  if (!category) notFound();
  return <ResourceCategoryPage category={category} />;
}
