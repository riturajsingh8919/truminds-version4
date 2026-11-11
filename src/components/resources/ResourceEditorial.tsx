import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resourceHref, type ResourceArticle, type ResourceCategory } from "@/lib/resources";

export const resourceFocus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007989]";
export const resourceBody = "text-lg font-medium leading-[1.75]";
export const resourceTitle = "text-4xl font-bold leading-[1.07] tracking-[-.035em] sm:text-5xl xl:text-6xl";

export function ResourceBreadcrumb({ category, detail = false, dark = false }: {
  category: ResourceCategory;
  detail?: boolean;
  dark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium ${dark ? "text-[#c9e8ed]" : "text-[#36576b]"}`}>
      <Link href="/resources" prefetch={false} className={`hover:underline ${resourceFocus}`}>Resources</Link>
      <span aria-hidden="true">/</span>
      {detail
        ? <Link href={`/resources/${category.slug}`} prefetch={false} className={`hover:underline ${resourceFocus}`}>{category.title}</Link>
        : <span aria-current="page">{category.title}</span>}
    </nav>
  );
}

export function ResourcePhoto({ article, className, sizes }: {
  article: ResourceArticle;
  className: string;
  sizes: string;
}) {
  return (
    <div className={`relative isolate overflow-hidden bg-[#dcebee] ${className}`}>
      <Image
        src={article.image}
        alt={article.imageAlt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.035] motion-reduce:transition-none"
      />
    </div>
  );
}

export function ResourceStoryLink({ article, children, className }: {
  article: ResourceArticle;
  children: ReactNode;
  className: string;
}) {
  return (
    <Link href={resourceHref(article)} prefetch={false} aria-label={article.title} className={`group min-w-0 ${resourceFocus} ${className}`}>
      {children}
    </Link>
  );
}

export function ResourceAction({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-lg font-semibold">
      {children}
      <ArrowUpRight size={19} aria-hidden="true" className="shrink-0 motion-safe:transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
    </span>
  );
}
