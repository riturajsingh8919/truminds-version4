import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceArticlePage } from "@/components/resources/ResourceArticlePage";
import { getResourceArticle, getResourceCategory, resourceArticles } from "@/lib/resources";

type Props = { params: Promise<{ category: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return resourceArticles.map(article => ({ category: article.category, slug: article.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getResourceArticle(category, slug);
  return article ? { title: `${article.title} | TruMinds Clinical`, description: article.summary } : {};
}
export default async function Page({ params }: Props) {
  const { category: categorySlug, slug } = await params;
  const category = getResourceCategory(categorySlug), article = getResourceArticle(categorySlug, slug);
  if (!category || !article) notFound();
  return <ResourceArticlePage article={article} category={category} />;
}
