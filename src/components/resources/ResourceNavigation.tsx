import Link from "next/link";
import { BookOpen, CalendarDays, Files, FileText, Newspaper } from "lucide-react";
import { resourceCategories, resourceContent } from "@/lib/resources";
import { shell } from "@/lib/site-styles";

const icons = { insights: BookOpen, cases: Files, papers: FileText, news: Newspaper, events: CalendarDays };
export function ResourceIcon({ name, size = 26 }: { name: string; size?: number }) {
  const Icon = icons[name as keyof typeof icons] ?? BookOpen;
  return <Icon size={size} strokeWidth={1.65} aria-hidden="true" />;
}

export function ResourceNavigation({ current }: { current?: string }) {
  return <nav aria-label={resourceContent.labels.categoryNavigation} className="border-b border-[#d8e7eb] bg-white"><div className={`${shell} flex flex-wrap gap-x-7 gap-y-2 py-4`}>{resourceCategories.map(category => <Link href={`/resources/${category.slug}`} prefetch={false} key={category.slug} aria-current={current === category.slug ? "page" : undefined} className={`inline-flex min-h-11 items-center gap-2 border-b-2 py-2 text-lg font-medium transition-colors hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] ${current === category.slug ? "border-[#008995] text-[#0068a5]" : "border-transparent text-[#36576b]"}`}><ResourceIcon name={category.icon} size={21} />{category.title}</Link>)}</div></nav>;
}

export function ResourceCategoryGrid() {
  return <section aria-labelledby="resource-categories-title" className="copy-on-light border-b border-[#e1ebee] bg-[#f8fbfc] py-12 md:py-16"><div className={shell}><div className="mb-8 max-w-210"><h2 id="resource-categories-title" className="text-3xl font-semibold leading-tight tracking-tight text-[#0a263c] md:text-4xl">{resourceContent.hub.categoriesTitle}</h2><p className="mt-4 text-lg font-medium leading-relaxed text-black">{resourceContent.hub.categoriesDescription}</p></div><nav aria-label={resourceContent.labels.categories} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">{resourceCategories.map(category => <Link href={`/resources/${category.slug}`} prefetch={false} key={category.slug} className="group flex min-w-0 flex-col rounded-2xl border border-[#d2e4e9] bg-white p-5 transition-colors hover:border-[#84bfca] hover:bg-[#f2fafb] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]"><span className="mb-5 grid size-12 place-items-center rounded-xl bg-[#e8f5f6] text-[#008995]"><ResourceIcon name={category.icon} /></span><h3 className="text-[22px] font-semibold leading-tight text-[#12364b]">{category.title}</h3><p className="mt-3 text-lg font-medium leading-relaxed text-black">{category.description}</p></Link>)}</nav></div></section>;
}
