import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ChevronRight } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import copy from "@/data/overview-pages.json";
import { shell } from "@/lib/site-styles";

type OverviewHeroProps = {
  hero: { eyebrow: string; title: string; headline: string; description: string; image: string; imageAlt: string; imageAspect: string; primaryLabel: string; primaryHref: string };
  navigation: { label: string; href: string; icon: string }[];
  light?: boolean;
};

export function OverviewHero({ hero, navigation, light = false }: OverviewHeroProps) {
  const focus = light ? "focus-visible:outline-[#0068a5]" : "focus-visible:outline-[#77dbd7]";
  return (
    <section aria-labelledby="overview-page-title" className={light ? "copy-on-light bg-[#f2f8f9] text-[#0a2038]" : "bg-[#08253d] text-white"}>
      <div className={shell}>
        <nav aria-label="Breadcrumb" className="py-6 sm:py-8"><ol className={`flex flex-wrap items-center gap-3 text-lg font-medium ${light ? "text-[#41667b]" : "text-[#c6dfe7]"}`}><li><Link href="/" className={`transition-colors ${light ? "hover:text-[#0068a5]" : "hover:text-[#77dbd7]"} focus-visible:outline-2 focus-visible:outline-offset-4 ${focus}`}>{copy.ui.homeLabel}</Link></li><li className="flex items-center gap-3"><ChevronRight size={17} aria-hidden="true" /><span aria-current="page" className={light ? "text-[#0a2038]" : "text-white"}>{hero.title}</span></li></ol></nav>
        <div className="grid items-center gap-10 pt-5 pb-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:gap-16 lg:pt-6 lg:pb-16 xl:gap-24">
          <div className="min-w-0">
            <span className={`mb-6 flex items-center gap-3 text-lg font-medium ${light ? "text-[#00818d]" : "text-[#77dbd7]"}`}><span className={`h-px w-9 shrink-0 ${light ? "bg-[#008995]" : "bg-[#77dbd7]"}`} aria-hidden="true" />{hero.eyebrow}</span>
            <h1 id="overview-page-title" className="text-4xl font-semibold leading-[1.06] tracking-[-.028em] [overflow-wrap:anywhere] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">{hero.title}</h1>
            <span className={`mt-6 block max-w-175 text-2xl font-semibold leading-snug tracking-tight md:text-3xl ${light ? "text-[#0068a5]" : "text-[#77dbd7]"}`}>{hero.headline}</span>
            <p className={`mt-5 max-w-160 text-lg font-medium leading-[1.8] ${light ? "text-black" : "text-[#e0edf1]"}`}>{hero.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-10"><AnimatedPillLink href={hero.primaryHref} label={hero.primaryLabel} variant={light ? "dark" : "light"} size="large" /><Link href="#contact" className={`group inline-flex min-h-14 items-center gap-3 text-lg font-medium ${light ? "text-[#0068a5]" : "text-white"} focus-visible:outline-2 focus-visible:outline-offset-4 ${focus}`}>{copy.ui.contactLabel}<ArrowDownRight size={22} className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none ${light ? "text-[#008995]" : "text-[#77dbd7]"}`} aria-hidden="true" /></Link></div>
          </div>
          <div className={`relative mx-auto w-full ${hero.imageAspect === "square" ? "max-w-110" : "max-w-80 xl:max-w-88"}`}>
            <div className={`pointer-events-none absolute -inset-2.5 rounded-[36px] border sm:-inset-3.5 sm:rounded-[42px] ${light ? "border-[#b5d6df]" : "border-white/20"}`} aria-hidden="true" />
            <div className={`relative overflow-hidden rounded-[28px] bg-white sm:rounded-[32px] ${hero.imageAspect === "square" ? "aspect-square" : "aspect-2/3"}`}><Image src={hero.image} alt={hero.imageAlt} fill preload sizes={hero.imageAspect === "square" ? "(max-width: 479px) calc(100vw - 40px), 440px" : "(max-width: 359px) calc(100vw - 40px), (max-width: 1279px) 320px, 352px"} className="object-contain" /></div>
          </div>
        </div>
        <nav aria-label={copy.ui.pageNavigationLabel} className={`grid border-t sm:grid-cols-3 ${light ? "border-[#cfe1e7]" : "border-white/20"}`}>
          {navigation.map(item => <Link key={item.href} href={item.href} className={`group flex min-h-20 min-w-0 items-center gap-3 border-b py-5 text-lg font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-4px] ${focus} sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0 ${light ? "border-[#cfe1e7] text-[#173f55] hover:text-[#0068a5]" : "border-white/15 text-white hover:text-[#77dbd7]"}`}><ServiceIcon name={item.icon} size={23} className={`shrink-0 ${light ? "text-[#008995]" : "text-[#77dbd7]"}`} /><span className="min-w-0 flex-1">{item.label}</span><ArrowDownRight size={20} className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none ${light ? "text-[#008995]" : "text-[#77dbd7]"}`} aria-hidden="true" /></Link>)}
        </nav>
      </div>
    </section>
  );
}
