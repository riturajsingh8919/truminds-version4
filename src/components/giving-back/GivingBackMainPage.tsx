import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { GivingBackAreaCards } from "@/components/giving-back/GivingBackAreaCards";
import { GivingBackHero } from "@/components/giving-back/GivingBackHero";
import { GivingBackIcon } from "@/components/giving-back/GivingBackIcon";
import { GivingBackInitiatives } from "@/components/giving-back/GivingBackInitiatives";
import { givingBackCopy as copy, givingBackMain as page, givingInitiatives } from "@/lib/giving-back";
import { section, shell, title } from "@/lib/site-styles";

export function GivingBackMainPage() {
  return (
    <>
      <GivingBackHero pagePath="/giving-back" {...page.hero} />
      <section id="giving-purpose" aria-labelledby="giving-purpose-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={`${shell} grid items-start gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24`}>
          <div><span className="mb-4 block text-lg font-medium text-[#00818d]">{page.mission.eyebrow}</span><h2 id="giving-purpose-title" className={title}>{page.mission.title}<br /><span className="text-[#0068a5]">{page.mission.highlight}</span></h2></div>
          <div className="space-y-6 border-l-2 border-[#b4dce2] pl-5 sm:pl-8 lg:mt-2">{page.mission.paragraphs.map(paragraph => <p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}</div>
        </div>
      </section>
      <section id="giving-pathways" aria-labelledby="giving-pathways-title" className={`${section} copy-on-light scroll-mt-24 border-y border-[#dce9ed] bg-[#f2f8f9]`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.pathwaysEyebrow}</span><h2 id="giving-pathways-title" className={title}>{copy.pathwaysTitle}<br /><span className="text-[#0068a5]">{copy.pathwaysHighlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{copy.pathwaysDescription}</p></div>
          <GivingBackAreaCards />
        </div>
      </section>
      <section id="giving-initiatives" aria-labelledby="giving-initiatives-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={`${shell} grid items-start gap-10 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-14 xl:gap-20`}>
          <div className="min-w-0 lg:sticky lg:top-28">
            <span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.initiativesEyebrow}</span><h2 id="giving-initiatives-title" className={title}>{copy.initiativesTitle}<br /><span className="text-[#0068a5]">{copy.initiativesHighlight}</span></h2>
            <p className="mt-6 max-w-145 text-lg font-medium leading-[1.8] text-black">{copy.initiativesDescription}</p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-[#d4e5e9] bg-[#edf7f8]"><Image src={page.image.src} alt={page.image.alt} width={page.image.width} height={page.image.height} sizes="(max-width: 1023px) 90vw, 560px" className="h-auto w-full object-contain" /></div>
            <span className="mt-5 flex items-start gap-3 text-lg font-medium leading-relaxed text-[#365a70]"><ArrowDownRight size={22} className="mt-0.5 shrink-0 text-[#008995]" aria-hidden="true" />{copy.initiativesHint}</span>
          </div>
          <GivingBackInitiatives initiatives={givingInitiatives} prefix="giving-initiative" />
        </div>
      </section>
      <section aria-labelledby="giving-commitment-title" className={`${section} border-t border-[#dce9ed] bg-[#edf7f8]`}>
        <div className={shell}>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] lg:gap-16 xl:gap-24"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{copy.commitmentEyebrow}</span><h2 id="giving-commitment-title" className={title}>{page.commitment.title}<br /><span className="text-[#0068a5]">{page.commitment.highlight}</span></h2></div><div className="space-y-5">{page.commitment.paragraphs.map(paragraph => <p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}</div></div>
          <div className="mt-10 grid gap-6 rounded-3xl border border-[#16475c] bg-[#082b43] p-6 sm:p-8 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-7 xl:mt-14">
            <span className="grid size-14 place-items-center rounded-2xl border border-[#77dbd7]/30 bg-[#77dbd7]/10 text-[#77dbd7]"><GivingBackIcon name="relief" size={29} /></span><blockquote className="max-w-210 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">{page.commitment.quote}</blockquote>
            <Link href="#contact" className="group inline-flex min-h-14 w-fit items-center gap-3 text-lg font-medium text-[#8ae4df] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8ae4df]">{copy.primaryAction}<ArrowUpRight size={22} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
