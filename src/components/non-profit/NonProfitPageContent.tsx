import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { GivingBackIcon } from "@/components/giving-back/GivingBackIcon";
import copy from "@/data/non-profit.json";
import { getGivingInitiatives, givingBackMain } from "@/lib/giving-back";
import { section, shell, title } from "@/lib/site-styles";

export function NonProfitPageContent() {
  const priorities = getGivingInitiatives(copy.priorities.initiativeIds);
  return (
    <>
      <section aria-labelledby="non-profit-page-title" className="copy-on-light bg-[#f0f7f9]">
        <div className={shell}>
          <nav aria-label="Breadcrumb" className="py-6 sm:py-8"><ol className="flex flex-wrap items-center gap-3 text-lg font-medium text-[#365a70]"><li><Link href="/" className="transition-colors hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">Home</Link></li><li className="flex items-center gap-3"><ChevronRight size={17} aria-hidden="true" /><span aria-current="page" className="text-[#0a2038]">Non-profit</span></li></ol></nav>
          <div className="grid items-center gap-10 pt-4 pb-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:gap-16 lg:pt-6 lg:pb-20 xl:gap-24">
            <div className="min-w-0"><span className="mb-5 flex items-center gap-3 text-lg font-medium text-[#00818d]"><span className="h-px w-9 shrink-0 bg-[#008995]" aria-hidden="true" />{copy.hero.eyebrow}</span><h1 id="non-profit-page-title" className="text-5xl font-semibold leading-[1.06] tracking-[-.03em] text-[#0a2038] [overflow-wrap:anywhere] sm:text-6xl xl:text-7xl 2xl:text-8xl">{copy.hero.title}<br /><span className="text-[#0068a5]">{copy.hero.highlight}</span></h1><p className="mt-7 max-w-145 text-lg font-medium leading-[1.8] text-black">{copy.hero.description}</p><div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-10"><AnimatedPillLink href="#non-profit-priorities" label={copy.hero.primaryLabel} size="large" /><Link href="#contact" className="group inline-flex min-h-14 items-center gap-3 text-lg font-medium text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">{copy.hero.secondaryLabel}<ArrowDownRight size={22} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link></div></div>
            <figure className="relative mx-auto w-full max-w-88">
              <div className="pointer-events-none absolute -top-2 -right-2 h-1/2 w-1/2 rounded-tr-[40px] border-t border-r border-[#65aebe] sm:-top-3 sm:-right-3" aria-hidden="true" />
              <div className="relative aspect-2/3 overflow-hidden rounded-3xl border border-[#ccdee5] bg-white"><Image src={copy.hero.image} alt={copy.hero.imageAlt} fill preload sizes="(max-width: 391px) calc(100vw - 40px), 352px" className="object-contain" /></div>
              <figcaption className="mt-5 flex items-center gap-3 text-lg font-medium leading-relaxed text-[#234f65]"><span className="size-2 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" />{copy.hero.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section aria-labelledby="non-profit-overview-title" className={`${section} copy-on-light bg-white`}>
        <div className={shell}>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.overview.eyebrow}</span><h2 id="non-profit-overview-title" className={title}>{copy.overview.title}<br /><span className="text-[#0068a5]">{copy.overview.highlight}</span></h2></div><div className="space-y-5 border-l-2 border-[#b4dce2] pl-5 sm:pl-8 lg:mt-2"><p className="text-lg font-medium leading-[1.8] text-black">{copy.overview.description}</p><p className="text-lg font-medium leading-[1.8] text-black">{givingBackMain.commitment.paragraphs[0]}</p></div></div>
          <div className="mt-10 grid gap-7 border-t border-[#d7e7eb] pt-8 md:grid-cols-3 md:gap-0 xl:mt-14">
            {copy.overview.values.map(value => <article key={value.title} className="group min-w-0 md:border-r md:border-[#d7e7eb] md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0 xl:px-9"><span className="mb-5 grid size-13 place-items-center rounded-2xl border border-[#cde4e9] bg-[#edf7f8] text-[#008995] transition-colors duration-300 group-hover:border-[#0a3a50] group-hover:bg-[#0a3a50] group-hover:text-[#77dbd7] motion-reduce:transition-none"><GivingBackIcon name={value.icon} size={28} /></span><h3 className="text-2xl font-semibold tracking-tight text-[#0a2038]">{value.title}</h3><p className="mt-3 text-lg font-medium leading-[1.8] text-black">{value.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="non-profit-priorities" aria-labelledby="non-profit-priorities-title" className={`${section} copy-on-light scroll-mt-24 border-t border-[#dce9ed] bg-[#f2f8f9]`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.priorities.eyebrow}</span><h2 id="non-profit-priorities-title" className={title}>{copy.priorities.title}<br /><span className="text-[#0068a5]">{copy.priorities.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{copy.priorities.description}</p></div>
          <nav aria-label="Non-profit giving priorities" className="grid gap-4 md:grid-cols-2 xl:gap-5">
            {priorities.map(initiative => <Link key={initiative.id} href={`/giving-back#giving-initiative-${initiative.id}`} className="group relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#d1e4e9] bg-white p-6 transition-[background-color,border-color] duration-300 hover:border-[#86c5d0] hover:bg-[#fcfefe] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none sm:p-7"><div className="mb-6 flex items-center justify-between gap-5"><span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-[#d0e6eb] bg-[#edf7f8] text-[#008995] transition-colors duration-300 group-hover:border-[#0a3a50] group-hover:bg-[#0a3a50] group-hover:text-[#77dbd7] motion-reduce:transition-none"><GivingBackIcon name={initiative.icon} size={26} /></span><ArrowUpRight size={24} className="shrink-0 text-[#0068a5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></div><h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere]">{initiative.title}</h3><p className="mt-3 mb-6 text-lg font-medium leading-[1.8] text-black">{initiative.kicker || initiative.paragraphs[0].split(/(?<=[.!?])\s+/)[0]}</p><span className="mt-auto inline-flex min-h-11 items-center border-t border-[#dce9ed] pt-4 text-lg font-medium text-[#0068a5]">{copy.priorities.linkLabel}</span><span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00aaa9] transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" aria-hidden="true" /></Link>)}
          </nav>
          <Link href="/giving-back" className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{copy.priorities.allLabel}<ArrowRight size={20} className="shrink-0" aria-hidden="true" /></Link>
          <div className="mt-12 flex flex-col justify-between gap-7 rounded-3xl border border-[#cce3e8] bg-[#e7f3f5] p-6 md:flex-row md:items-center md:p-8 xl:mt-16"><div className="min-w-0 max-w-210"><h3 className="text-2xl font-semibold leading-snug tracking-tight text-[#0a2038] sm:text-3xl">{copy.cta.title}</h3><p className="mt-3 text-lg font-medium leading-[1.8] text-black">{copy.cta.description}</p></div><div className="max-w-full shrink-0 [&>a]:max-w-full [&>a]:text-center"><AnimatedPillLink href="#contact" label={copy.cta.label} size="large" /></div></div>
        </div>
      </section>
    </>
  );
}
