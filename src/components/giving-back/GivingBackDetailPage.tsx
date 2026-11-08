import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { GivingBackAreaCards } from "@/components/giving-back/GivingBackAreaCards";
import { GivingBackHero } from "@/components/giving-back/GivingBackHero";
import { GivingBackIcon } from "@/components/giving-back/GivingBackIcon";
import { GivingBackInitiatives } from "@/components/giving-back/GivingBackInitiatives";
import { givingBackCopy as copy, givingBackAreas, getGivingInitiatives, type GivingBackPage } from "@/lib/giving-back";
import { section, shell, title } from "@/lib/site-styles";

export function GivingBackDetailPage({ page }: { page: GivingBackPage }) {
  return (
    <>
      <GivingBackHero pagePath={`/giving-back/${page.slug}`} title={page.title} headline={page.headline} description={page.heroDescription} image={page.image} imageAlt={page.imageAlt} imageWidth={page.imageWidth} imageHeight={page.imageHeight} icon={page.icon} inner />
      <nav aria-label="Giving Back area navigation" className="border-b border-[#d6e6ea] bg-white">
        <div className={`${shell} grid gap-3 py-5 sm:grid-cols-2 xl:grid-cols-4`}>
          {givingBackAreas.map(area => {
            const current = area.slug === page.slug;
            return <Link key={area.slug} href={`/giving-back/${area.slug}`} aria-current={current ? "page" : undefined} className={`group flex min-h-18 min-w-0 items-center gap-3 rounded-2xl border px-4 py-4 text-lg font-medium transition-[background-color,border-color,color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none ${current ? "border-[#93c7d2] bg-[#eaf5f7] text-[#0068a5]" : "border-[#d7e7eb] text-[#33556a] hover:border-[#93c7d2] hover:bg-[#f4fafb]"}`}><span className="shrink-0 text-[#008995]"><GivingBackIcon name={area.icon} size={23} /></span><span className="min-w-0 flex-1">{area.shortTitle}</span>{current && <span className="size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" />}</Link>;
          })}
        </div>
      </nav>
      <section id="giving-overview" aria-labelledby="giving-overview-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={`${shell} grid items-start gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24`}>
          <div><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.overviewAction}</span><h2 id="giving-overview-title" className={title}>{page.overview.title}<br /><span className="text-[#0068a5]">{page.overview.highlight}</span></h2></div>
          <div className="border-l-2 border-[#b4dce2] pl-5 sm:pl-8 lg:mt-2"><div className="space-y-5">{page.overview.paragraphs.map(paragraph => <p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}</div><Link href="#giving-focus" className="group mt-6 inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{copy.initiativesAction}<ArrowDownRight size={21} className="shrink-0" aria-hidden="true" /></Link></div>
        </div>
      </section>
      <section id="giving-focus" aria-labelledby="giving-focus-title" className={`${section} copy-on-light scroll-mt-24 border-y border-[#dce9ed] bg-[#f2f8f9]`}>
        <div className={`${shell} grid items-start gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-14 xl:gap-20`}>
          <div className="lg:sticky lg:top-28"><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.focusEyebrow}</span><h2 id="giving-focus-title" className={title}>{page.focusTitle}</h2><p className="mt-6 max-w-145 text-lg font-medium leading-[1.8] text-black">{page.focusDescription}</p><blockquote className="mt-8 border-l-2 border-[#008995] pl-5 text-2xl font-semibold leading-snug tracking-tight text-[#0a3a50] sm:text-3xl">{page.quote}</blockquote><span className="mt-7 flex items-start gap-3 text-lg font-medium leading-relaxed text-[#365a70]"><ArrowDownRight size={22} className="mt-0.5 shrink-0 text-[#008995]" aria-hidden="true" />{copy.initiativesHint}</span></div>
          <GivingBackInitiatives initiatives={getGivingInitiatives(page.initiativeIds)} prefix="giving-priority" />
        </div>
      </section>
      <section aria-labelledby="giving-connect-title" className={`${section} bg-[#08253d] text-white`}>
        <div className={`${shell} grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24`}>
          <div><span className="mb-4 block text-lg font-medium text-[#77dbd7]">{copy.commitmentEyebrow}</span><h2 id="giving-connect-title" className={`${title} text-white`}>{page.ctaTitle}</h2><p className="mt-6 max-w-155 text-lg font-medium leading-[1.8] text-[#e0edf1]">{page.ctaDescription}</p><Link href="#contact" className="group mt-7 inline-flex min-h-14 items-center gap-3 border-b border-[#77dbd7] pb-2 text-lg font-medium text-[#8ae4df] transition-[gap,color] hover:gap-5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ae4df] motion-reduce:transition-none">{page.ctaLabel}<ArrowUpRight size={22} className="shrink-0" aria-hidden="true" /></Link></div>
          <div className="border-t border-white/20 pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10 xl:pl-12"><span className="mb-6 grid size-14 place-items-center rounded-2xl border border-[#77dbd7]/30 bg-[#77dbd7]/10 text-[#77dbd7]"><GivingBackIcon name="relief" size={29} /></span><p className="text-lg font-medium leading-[1.8] text-[#e0edf1]">{page.commitment}</p></div>
        </div>
      </section>
      <section aria-labelledby="giving-related-title" className={`${section} copy-on-light bg-white`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-2 lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.relatedEyebrow}</span><h2 id="giving-related-title" className={title}>{copy.relatedTitle}<br /><span className="text-[#0068a5]">{copy.relatedHighlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{copy.relatedDescription}</p></div>
          <GivingBackAreaCards currentSlug={page.slug} />
          <Link href="/giving-back" className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none"><ArrowLeft size={20} className="shrink-0" aria-hidden="true" />{copy.backLabel}</Link>
        </div>
      </section>
    </>
  );
}
