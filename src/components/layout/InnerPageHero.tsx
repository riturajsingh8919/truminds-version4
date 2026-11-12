import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getPageHeaderImage, type PageHeaderImage } from "@/data/page-header-images";
import { shell } from "@/lib/site-styles";
import styles from "./InnerPageHero.module.css";

type Breadcrumb = { label: string; href: string };

type InnerPageHeroProps = {
  titleId: string;
  title: string;
  highlight?: string;
  breadcrumbLabel?: string;
  description: string;
  pagePath?: string;
  photo?: Pick<PageHeaderImage, "src" | "width" | "height">;
  ancestors?: Breadcrumb[];
  actions?: ReactNode;
  children?: ReactNode;
};

const breadcrumbLink = "rounded-sm transition-colors hover:text-[#adf5ec] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#adf5ec]";
const home = { label: "Home", href: "/" };

export function InnerPageHero({
  titleId, title, highlight, breadcrumbLabel, description,
  pagePath, photo, ancestors = [], actions, children,
}: InnerPageHeroProps) {
  const image = photo ?? getPageHeaderImage(pagePath ?? "/resources");

  return (
    <>
      <section aria-labelledby={titleId} className={`${styles.hero} relative isolate overflow-hidden bg-[#09283e] text-white`} data-compact-hero data-inner-page-hero>
        <div className={`${styles.media} pointer-events-none absolute inset-0 -z-10`} aria-hidden="true" data-hero-image>
          <Image
            src={image.src}
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className={`${styles.backdrop} object-cover`}
          />
          <div className={styles.frame} style={{ "--photo-ratio": image.width / image.height } as CSSProperties}>
            <Image
              key={image.src}
              src={image.src}
              alt=""
              fill
              preload
              sizes="100vw"
              className={`${styles.photo} object-contain`}
              data-hero-photo
            />
          </div>
          <div className={`${styles.scrim} absolute inset-0`} />
        </div>

        <div className={`${shell} ${styles.content} flex flex-col`}>
          <nav aria-label="Breadcrumb" className="border-b border-white/25 py-4 sm:py-5">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-lg font-medium leading-[1.45] text-[#deedf2] sm:gap-x-3">
              {[home, ...ancestors].map((crumb, index) => (
                <li key={crumb.href} className="flex min-w-0 items-center gap-2 sm:gap-3">
                  {index > 0 && <ChevronRight size={15} className="shrink-0 text-[#9cdbdf]" aria-hidden="true" />}
                  <Link href={crumb.href} prefetch={false} className={breadcrumbLink}>{crumb.label}</Link>
                </li>
              ))}
              <li className="flex min-w-0 items-center gap-2 text-white sm:gap-3">
                <ChevronRight size={15} className="shrink-0 text-[#9cdbdf]" aria-hidden="true" />
                <span aria-current="page" className="[overflow-wrap:anywhere]">{breadcrumbLabel ?? (highlight ? `${title} ${highlight}` : title)}</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-1 items-center py-10 sm:py-12 lg:py-14">
            <div className="min-w-0 sm:max-w-[70%] lg:max-w-[56%]">
              <span className="mb-5 block h-0.75 w-11 rounded-full bg-[#62dfd3] sm:mb-6 sm:w-15" aria-hidden="true" />
              <h1 id={titleId} className="text-[36px] font-bold leading-[1.08] tracking-[-.034em] [overflow-wrap:anywhere] sm:text-5xl xl:text-[58px] 2xl:text-[64px]">
                {title}{highlight && <> <span className="text-[#a0ede4]">{highlight}</span></>}
              </h1>
              <p className={`${styles.description} mt-4 max-w-150 text-lg font-medium leading-[1.65] sm:mt-5`}>{description}</p>
            </div>
          </div>
        </div>
      </section>
      {(actions || children) && (
        <div className="border-b border-[#dbe7eb] bg-[#f4f9fa]" data-hero-details>
          <div className={`${shell} py-4 sm:py-5`}>
            {actions && <div className="flex flex-wrap items-center gap-x-7 gap-y-2">{actions}</div>}
            {children}
          </div>
        </div>
      )}
    </>
  );
}
