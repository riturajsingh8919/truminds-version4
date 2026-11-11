import content from "@/data/resources.json";
import categories from "@/data/resource-categories.json";

export const resourceContent = content;
export type ResourceSection = { title: string; paragraphs: string[]; items?: string[] };
export type ResourceArticle = Omit<(typeof content.articles)[number], "sections"> & {
  sections: ResourceSection[];
  takeaway: string;
};
export const resourceArticles: ResourceArticle[] = content.articles;
export const resourceCategories = categories.map(category => ({
  ...category,
  introduction: (content.categoryIntroductions as Record<string, string>)[category.slug],
}));
export type ResourceCategory = (typeof resourceCategories)[number];
export function resourceHref(article: ResourceArticle) {
  return `/resources/${article.category}/${article.slug}`;
}
export function getResourceCategory(slug: string) {
  return resourceCategories.find(category => category.slug === slug);
}
export function getResourceArticles(category: string) {
  return resourceArticles.filter(article => article.category === category);
}
export function getResourceArticle(category: string, slug: string) {
  return resourceArticles.find(article => article.category === category && article.slug === slug);
}
