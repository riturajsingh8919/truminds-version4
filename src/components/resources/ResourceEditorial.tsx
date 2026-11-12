import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { resourceHref, type ResourceArticle } from "@/lib/resources";

export const resourceFocus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#007989]";
export const resourceBody = "text-lg font-medium leading-[1.75]";
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
