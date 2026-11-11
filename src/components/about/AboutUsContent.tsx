import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Dna,
  FlaskConical,
  Globe2,
  HeartPulse,
  Layers3,
  Microscope,
  Network,
  Pill,
  ScanLine,
  UsersRound,
} from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { CountryFlag } from "@/components/common/CountryFlag";
import { LeadershipSection } from "@/components/home/LeadershipSection";
import content from "@/data/about-us.json";
import { services } from "@/lib/services";
import { section, shell, title } from "@/lib/site-styles";

const regionFlags: Record<string, string> = { "United States": "us", Canada: "ca", "United Kingdom": "uk", India: "in" };

const icons = {
  story: BookOpen,
  markets: Building2,
  approach: Layers3,
  people: UsersRound,
  diagnostics: ScanLine,
  pharma: Pill,
  biotech: Dna,
  devices: HeartPulse,
  cro: Microscope,
  clinical: FlaskConical,
  technology: Network,
};

function AboutIcon({ name, size = 25 }: { name: string; size?: number }) {
  const Icon = icons[name as keyof typeof icons] ?? Network;
  return <Icon size={size} strokeWidth={1.65} aria-hidden="true" />;
}

export function AboutUsContent() {
  const { hero, overview, markets, approach } = content;

  return (
    <>
      <InnerPageHero pagePath="/about-us" titleId="about-page-title" title={hero.title} highlight={hero.highlight} breadcrumbLabel="About us" description={hero.description} imageCaption={hero.imageCaption} eyebrow={hero.eyebrow} parent={{ label: "Home", href: "/" }} actions={<><Link href="#contact" className="inline-flex min-h-11 items-center border-b border-[#0068a5] text-lg font-medium text-[#0068a5] hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">{hero.primaryLabel}</Link><Link href="#leadership-team" className="inline-flex min-h-11 items-center text-lg font-medium text-[#234b61] underline underline-offset-4 hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">{hero.secondaryLabel}</Link></>} />
      <div className="border-b border-[#d5e5e9] bg-white"><div className={shell}>
          <nav aria-label="Explore About TruMinds" className="grid border-t border-[#c8dfe5] sm:grid-cols-2 lg:grid-cols-4">
            {content.navigation.map(item => (
              <Link key={item.href} href={item.href} className="group flex min-h-19 items-center gap-3 border-b border-[#c8dfe5] py-5 text-lg font-medium text-[#173f55] transition-colors hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#0068a5] motion-reduce:transition-none sm:px-5 sm:odd:border-r lg:border-r lg:border-b-0 lg:first:pl-0 lg:last:border-r-0">
                <span className="shrink-0 text-[#008995]"><AboutIcon name={item.icon} size={23} /></span><span className="flex-1">{item.label}</span><ArrowDownRight size={20} className="shrink-0 text-[#008995] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none" aria-hidden="true" />
              </Link>
            ))}
          </nav>
      </div></div>

      <section id="our-story" aria-labelledby="our-story-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={shell}>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24">
            <div>
              <span className="mb-4 block text-lg font-medium text-[#00818d]">{overview.eyebrow}</span>
              <h2 id="our-story-title" className={title}>{overview.title}<br /><span className="text-[#0068a5]">{overview.highlight}</span></h2>
            </div>
            <div className="space-y-5 border-l-2 border-[#b4dce2] pl-5 sm:pl-8 lg:mt-2">
              {overview.paragraphs.map(paragraph => <p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}
            </div>
          </div>

          <div className="mt-10 border-t border-[#d8e8ec] pt-8 xl:mt-14">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div className="flex items-center gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#d0e6eb] bg-[#edf7f8] text-[#008995]"><Globe2 size={26} strokeWidth={1.65} aria-hidden="true" /></span><span className="text-xl font-semibold text-[#0a2038]">{overview.reachLabel}</span></div>
              <Link href={overview.reachLink} className="group inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{overview.reachLinkLabel}<ArrowUpRight size={20} className="shrink-0" aria-hidden="true" /></Link>
            </div>
            <ul aria-label="Global presence regions" tabIndex={0} className="mt-6 flex w-full flex-nowrap items-center gap-3 overflow-x-auto pb-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] sm:gap-4" data-country-row>
              {overview.regions.map(region => <li key={region} className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl border border-[#d7e7eb] bg-[#f7fbfc] px-4 py-3 text-lg font-medium text-[#173f55]"><span className="grid h-6 w-9 shrink-0 place-items-center">{regionFlags[region] ? <CountryFlag code={regionFlags[region]} /> : <Globe2 size={26} className="text-[#008995]" strokeWidth={1.65} aria-hidden="true" />}</span>{region}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="markets-we-serve" aria-labelledby="markets-title" className={`${section} scroll-mt-24 border-y border-[#dce9ed] bg-[#f2f8f9]`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:gap-16">
            <div><span className="mb-4 block text-lg font-medium text-[#00818d]">{markets.eyebrow}</span><h2 id="markets-title" className={title}>{markets.title}<br /><span className="text-[#0068a5]">{markets.highlight}</span></h2></div>
            <p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{markets.description}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-5">
            <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#0b3d55] bg-[#082b43] p-7 text-white md:col-span-2 xl:col-span-1 xl:row-span-2 xl:p-9">
              <div className="flex items-start justify-between gap-5">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl border border-[#6bd9d5]/35 bg-[#6bd9d5]/10 text-[#86e4df] transition-colors duration-300 group-hover:bg-[#6bd9d5]/20 motion-reduce:transition-none"><AboutIcon name={markets.featured.icon} size={34} /></span>
                <span className="mt-2 h-px w-12 origin-right bg-[#70d7d4]/60 transition-transform duration-500 group-hover:scale-x-150 motion-reduce:transform-none" aria-hidden="true" />
              </div>
              <h3 className="mt-8 text-3xl font-semibold leading-tight tracking-tight text-white">{markets.featured.title}</h3>
              <p className="mt-4 max-w-145 text-lg font-medium leading-[1.8] text-[#e0edf1]">{markets.featured.description}</p>
              <div className="mt-8 border-t border-white/20 pt-6 xl:mt-auto xl:pt-7">
                <Link href="#contact" className="group/link inline-flex min-h-12 items-center gap-3 text-lg font-medium text-[#86e4df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#86e4df]">{markets.featured.actionLabel}<ArrowUpRight size={21} className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>
              </div>
            </article>
            {markets.items.map(market => (
              <article key={market.title} className="group relative min-w-0 overflow-hidden rounded-3xl border border-[#d3e5e9] bg-white p-6 transition-[border-color,background-color] duration-300 hover:border-[#8bc8d2] hover:bg-[#fcfefe] motion-reduce:transition-none sm:p-7">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#d1e6eb] bg-[#edf7f8] text-[#008995] transition-colors duration-300 group-hover:border-[#abd4de] group-hover:bg-[#e2f2f4] motion-reduce:transition-none"><AboutIcon name={market.icon} /></span>
                  <h3 className="min-w-0 text-2xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere]">{market.title}</h3>
                </div>
                <p className="mt-5 text-lg font-medium leading-[1.8] text-black">{market.description}</p>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00aaa9] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="our-approach" aria-labelledby="approach-title" className={`${section} scroll-mt-24 bg-[#08253d] text-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div><span className="mb-4 block text-lg font-medium text-[#77dbd7]">{approach.eyebrow}</span><h2 id="approach-title" className={`${title} text-white`}>{approach.title}<br /><span className="text-[#77dbd7]">{approach.highlight}</span></h2></div>
            <p className="max-w-150 text-lg font-medium leading-[1.8] text-[#d4e6ec]">{approach.description}</p>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3 md:gap-0 xl:mt-14">
            {approach.items.map((item, index) => (
              <article key={item.title} className="group border-t border-white/20 pt-7 md:border-t-0 md:border-r md:px-6 md:pt-0 md:first:pl-0 md:last:border-r-0 md:last:pr-0 xl:px-10">
                <div className="mb-7 flex items-center justify-between gap-4"><span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/5 text-[#77dbd7] transition-colors duration-300 group-hover:border-[#77dbd7]/60 group-hover:bg-[#77dbd7]/10 motion-reduce:transition-none"><AboutIcon name={item.icon} size={29} /></span><span className="text-lg font-medium tabular-nums text-[#9fbfcf]" aria-hidden="true">0{index + 1}</span></div>
                <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                <p className="mt-4 text-lg font-medium leading-[1.8] text-[#d4e6ec]">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-white/20 pt-8 xl:mt-14">
            <div className="mb-6 flex flex-col justify-between gap-3 lg:flex-row lg:items-end"><h3 className="text-2xl font-semibold text-white">{approach.servicesTitle}</h3><p className="text-lg font-medium leading-relaxed text-[#d4e6ec]">{approach.servicesDescription}</p></div>
            <nav aria-label="Explore our service models" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {approach.serviceLinks.map(item => {
                const service = services.find(service => service.slug === item.slug);
                if (!service) throw new Error(`Missing About Us service: ${item.slug}`);
                return <Link key={service.slug} href={`/services/${service.slug}`} className="group flex min-h-19 min-w-0 items-center gap-3 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-lg font-medium text-white transition-[border-color,background-color,color] duration-300 hover:border-[#77dbd7]/60 hover:bg-white/10 hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#77dbd7] motion-reduce:transition-none"><span className="shrink-0 text-[#77dbd7]"><AboutIcon name={item.icon} size={23} /></span><span className="min-w-0 flex-1">{service.title}</span><ArrowUpRight size={21} className="shrink-0 text-[#77dbd7] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>;
              })}
            </nav>
          </div>
        </div>
      </section>

      <LeadershipSection />
    </>
  );
}
