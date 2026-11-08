import Link from "next/link";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import copy from "@/data/overview-pages.json";
import { shell } from "@/lib/site-styles";

type OverviewHeroProps = {
  pagePath: string;
  hero: { eyebrow: string; title: string; headline: string; description: string; image: string; imageAlt: string };
  navigation: { label: string; href: string; icon: string }[];
  light?: boolean;
};

export function OverviewHero({ hero, navigation, pagePath }: OverviewHeroProps) {
  return (
    <>
      <InnerPageHero titleId="overview-page-title" title={hero.title} concept={hero.headline} description={hero.description} pagePath={pagePath} parent={{ label: "Home", href: "/" }} eyebrow={hero.eyebrow} />
      <nav aria-label={copy.ui.pageNavigationLabel} className="border-b border-[#d7e7eb] bg-white">
        <div className={`${shell} grid sm:grid-cols-3`}>{navigation.map(item => <Link key={item.href} href={item.href} className="group flex min-h-16 min-w-0 items-center gap-3 border-b border-[#e2ecef] py-4 text-lg font-medium text-[#173f55] transition-colors hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#0068a5] sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0"><ServiceIcon name={item.icon} size={22} className="shrink-0 text-[#008995]" /><span>{item.label}</span></Link>)}</div>
      </nav>
    </>
  );
}
