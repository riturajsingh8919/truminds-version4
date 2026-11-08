import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { getPageHeaderImage } from "@/data/page-header-images";
import { shell } from "@/lib/site-styles";

type InnerPageHeroProps = {
  titleId: string;
  title: string;
  highlight?: string;
  breadcrumbLabel?: string;
  concept?: string;
  description: string;
  pagePath?: string;
  imageCaption?: string;
  parent: { label: string; href: string };
  eyebrow?: string;
  actions?: ReactNode;
  children?: ReactNode;
};

export function InnerPageHero({
  titleId, title, highlight, breadcrumbLabel, concept, description,
  pagePath, imageCaption,
  parent, eyebrow, actions, children,
}: InnerPageHeroProps) {
  const image = pagePath ? getPageHeaderImage(pagePath) : undefined;
  return (
    <section aria-labelledby={titleId} className="copy-on-light relative isolate overflow-hidden border-b border-[#d8e6e9] bg-[#f2f7f8]" data-compact-hero data-inner-page-hero>
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-1/2 bg-[radial-gradient(ellipse_at_100%_35%,#deefef_0%,transparent_72%)]" aria-hidden="true" />
      <div className={shell}>
        <nav aria-label="Breadcrumb" className="border-b border-[#cfdee3]/70 py-4 sm:py-5">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-lg font-medium leading-relaxed text-[#476573]">
            <li><Link href="/" className="transition-colors hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">Home</Link></li>
            {parent.href !== "/" && <li className="flex items-center gap-3"><span className="text-[#809da8]" aria-hidden="true">/</span><Link href={parent.href} className="transition-colors hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">{parent.label}</Link></li>}
            <li className="flex min-w-0 items-center gap-3"><span className="text-[#809da8]" aria-hidden="true">/</span><span aria-current="page" className="text-[#163d51]">{breadcrumbLabel || title}</span></li>
          </ol>
        </nav>

        <div className={`grid items-center gap-8 py-8 sm:gap-10 sm:py-10 lg:gap-12 lg:py-8 xl:gap-20 ${image ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]" : "lg:grid-cols-[minmax(0,1fr)_180px]"}`}>
          <div className="min-w-0">
            {eyebrow && <span className="mb-4 flex items-center gap-3 text-lg font-medium leading-relaxed text-[#006779]"><span className="h-0.5 w-7 shrink-0 bg-[#00a6a5]" aria-hidden="true" />{eyebrow}</span>}
            <h1 id={titleId} className="max-w-220 text-4xl font-bold leading-[1.08] tracking-[-.035em] text-[#0a263c] [overflow-wrap:anywhere] sm:text-5xl xl:text-[56px] 2xl:text-[64px]">{title}{highlight && <> <span className="text-[#0068a5]">{highlight}</span></>}</h1>
            {concept && <span className="mt-5 block max-w-165 text-[26px] font-semibold leading-[1.3] tracking-[-.018em] text-[#0068a5] xl:text-[30px]">{concept}</span>}
            <p className="mt-5 max-w-160 text-lg font-medium leading-[1.75] text-black">{description}</p>
            {actions && <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">{actions}</div>}
          </div>

          {image ? (
            <figure className="relative min-w-0 lg:pl-3">
              <div className="relative">
                <div className="pointer-events-none absolute -top-3 right-5 h-16 w-28 rounded-tr-[28px] border-t border-r border-[#6aafb8] sm:right-7" aria-hidden="true" />
                <div className="relative w-full overflow-hidden rounded-tl-[12%] rounded-tr-[3%] rounded-br-[12%] rounded-bl-[3%] bg-[#e1ecef]" data-hero-image>
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} preload sizes="(max-width: 1023px) 90vw, (max-width: 1591px) 43vw, 620px" className="block h-auto w-full" />
                </div>
                <div className="pointer-events-none absolute right-0 -bottom-2.5 h-14 w-34 rounded-br-[48px] border-r border-b border-[#00a6a5] sm:rounded-br-[72px]" aria-hidden="true" />
              </div>
              {imageCaption && <figcaption className="mt-4 flex items-center gap-3 pr-8 text-lg font-medium leading-relaxed text-[#365c6c]"><span className="h-px w-6 shrink-0 bg-[#008995]" aria-hidden="true" />{imageCaption}</figcaption>}
            </figure>
          ) : (
            <svg viewBox="0 0 180 180" className="hidden w-45 text-[#0068a5] lg:block" fill="none" aria-hidden="true">
              <circle cx="90" cy="90" r="78" stroke="currentColor" strokeOpacity=".12" />
              <circle cx="90" cy="90" r="55" stroke="currentColor" strokeOpacity=".18" />
              <path d="M40 114 90 58l50 56M40 114h100" stroke="currentColor" strokeOpacity=".25" />
              <circle cx="90" cy="58" r="10" fill="#00a6a5" /><circle cx="40" cy="114" r="8" fill="currentColor" /><circle cx="140" cy="114" r="8" fill="currentColor" />
            </svg>
          )}
        </div>

        {children && <div className="border-t border-[#cbdfe5] py-5 sm:py-6" data-hero-details>{children}</div>}
      </div>
    </section>
  );
}
