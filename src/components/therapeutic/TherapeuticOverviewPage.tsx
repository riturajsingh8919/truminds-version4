import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { OverviewHero } from "@/components/overview/OverviewHero";
import { OverviewContact } from "@/components/overview/OverviewContact";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { TherapeuticIcon } from "@/components/therapeutic/TherapeuticIcon";
import copy from "@/data/overview-pages.json";
import { services } from "@/lib/services";
import { therapeuticPages } from "@/lib/therapeutic-pages";
import { section, shell, title } from "@/lib/site-styles";

export function TherapeuticOverviewPage() {
  const page = copy.therapeuticAreas;
  return (
    <>
      <OverviewHero hero={page.hero} navigation={page.navigation} />
      <section id="therapeutic-specialties" aria-labelledby="therapeutic-specialties-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-2 lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{page.specialties.eyebrow}</span><h2 id="therapeutic-specialties-title" className={title}>{page.specialties.title}<br /><span className="text-[#0068a5]">{page.specialties.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{page.specialties.description}</p></div>
          <nav aria-label="Therapeutic specialties" className="grid gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {therapeuticPages.map(area => {
              const focus = area.content.focus.groups.flatMap(group => group.items).slice(0, 3);
              return <Link key={area.slug} href={`/therapeutic-areas/${area.slug}`} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#d3e5e9] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#86c5d0] hover:shadow-[0_12px_30px_rgba(8,43,67,.06)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none"><div className="relative aspect-4/3 overflow-hidden bg-[#edf5f7]"><Image src={area.image} alt={area.content.imageAlt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none" style={{ objectPosition: area.imagePosition }} /></div><div className="flex flex-1 flex-col p-5 sm:p-6"><span className="mb-5 text-[#008995]"><TherapeuticIcon name={area.content.icon} size={28} /></span><h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere]">{area.title}</h3><p className="mt-3 text-lg font-medium leading-[1.8] text-black">{area.detail}</p><div className="mt-5 border-t border-[#dce9ed] pt-4"><span className="text-lg font-medium text-[#365a70]">{page.specialties.focusLabel}</span><ul className="mt-3 space-y-2">{focus.map(item => <li key={item} className="flex items-start gap-2.5 text-lg font-medium leading-relaxed text-black"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" /><span>{item}</span></li>)}</ul></div><span className="mt-auto flex min-h-12 items-center justify-between gap-3 pt-6 text-lg font-medium text-[#0068a5]">{page.specialties.linkLabel}<ArrowUpRight size={21} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></span></div></Link>;
            })}
          </nav>
        </div>
      </section>
      <section id="therapeutic-support" aria-labelledby="therapeutic-support-title" className={`${section} copy-on-light scroll-mt-24 border-t border-[#dce9ed] bg-[#f2f8f9]`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-2 lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{page.delivery.eyebrow}</span><h2 id="therapeutic-support-title" className={title}>{page.delivery.title}<br /><span className="text-[#0068a5]">{page.delivery.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{page.delivery.description}</p></div>
          <nav aria-label="Related clinical services" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{services.map(service => <Link key={service.slug} href={`/services/${service.slug}`} className="group flex min-w-0 flex-col rounded-2xl border border-[#d3e5e9] bg-white p-6 transition-colors hover:border-[#8bc6d1] hover:bg-[#fcfefe] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]"><ServiceIcon name={service.detail.overview.highlights[0].icon} size={29} className="mb-6 text-[#008995]" /><h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#0a2038]">{service.title}</h3><p className="mt-3 mb-6 text-lg font-medium leading-[1.8] text-black">{service.description}</p><span className="mt-auto flex items-center justify-between gap-3 text-lg font-medium text-[#0068a5]">{page.delivery.linkLabel}<ArrowUpRight size={20} className="shrink-0" aria-hidden="true" /></span></Link>)}</nav>
          <OverviewContact />
        </div>
      </section>
    </>
  );
}
