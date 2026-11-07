import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { OverviewHero } from "@/components/overview/OverviewHero";
import { OverviewContact } from "@/components/overview/OverviewContact";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import copy from "@/data/overview-pages.json";
import { getServiceCapabilities, services } from "@/lib/services";
import { section, shell, title } from "@/lib/site-styles";

export function ServicesOverviewPage() {
  const page = copy.services;
  const cro = services.find(service => service.slug === "full-service-cro");
  if (!cro) throw new Error("Missing full-service CRO content");
  const capabilities = getServiceCapabilities(cro);
  return (
    <>
      <OverviewHero hero={page.hero} navigation={page.navigation} />
      <section id="service-models" aria-labelledby="service-models-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-2 lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{page.models.eyebrow}</span><h2 id="service-models-title" className={title}>{page.models.title}<br /><span className="text-[#0068a5]">{page.models.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{page.models.description}</p></div>
          <nav aria-label="Service delivery models" className="grid gap-5 xl:grid-cols-2 xl:gap-6">
            {services.map(service => <Link key={service.slug} href={`/services/${service.slug}`} className="group grid min-w-0 overflow-hidden rounded-3xl border border-[#d3e5e9] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#86c5d0] hover:shadow-[0_12px_30px_rgba(8,43,67,.06)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none sm:grid-cols-[minmax(0,.38fr)_minmax(0,.62fr)]"><div className="relative aspect-4/3 overflow-hidden bg-[#edf5f7] sm:aspect-auto sm:min-h-80"><Image src={service.image} alt={service.imageAlt} fill sizes="(max-width: 639px) 100vw, (max-width: 1279px) 38vw, 280px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none" style={{ objectPosition: service.imagePosition }} /></div><div className="flex min-w-0 flex-col p-6 sm:p-7"><span className="mb-5 grid size-11 place-items-center rounded-xl border border-[#d0e6eb] bg-[#edf7f8] text-[#008995]"><ServiceIcon name={service.detail.overview.highlights[0].icon} size={24} /></span><h3 className="text-3xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere]">{service.title}</h3><p className="mt-4 mb-7 text-lg font-medium leading-[1.8] text-black">{service.description}</p><span className="mt-auto flex min-h-12 items-center justify-between gap-4 border-t border-[#d8e8ec] pt-4 text-lg font-medium text-[#0068a5]">{page.models.linkLabel}<ArrowUpRight size={21} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></span></div></Link>)}
          </nav>
        </div>
      </section>
      <section id="clinical-capabilities" aria-labelledby="clinical-capabilities-title" className={`${section} copy-on-light scroll-mt-24 border-y border-[#dce9ed] bg-[#f2f8f9]`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-2 lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{page.capabilities.eyebrow}</span><h2 id="clinical-capabilities-title" className={title}>{page.capabilities.title}<br /><span className="text-[#0068a5]">{page.capabilities.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{page.capabilities.description}</p></div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{capabilities.map(capability => <article key={capability.id} className="group min-w-0 rounded-2xl border border-[#d5e6eb] bg-white p-6 transition-colors duration-300 hover:border-[#94c8d2] motion-reduce:transition-none"><ServiceIcon name={capability.icon} size={29} className="mb-6 text-[#008995]" /><h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#0a2038]">{capability.title}</h3><p className="mt-3 text-lg font-medium leading-[1.8] text-black">{capability.summary}</p></article>)}</div>
          <Link href="/services/full-service-cro#capabilities" className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{page.capabilities.linkLabel}<ArrowRight size={20} className="shrink-0" aria-hidden="true" /></Link>
        </div>
      </section>
      <section id="connected-expertise" aria-labelledby="connected-expertise-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={shell}>
          <div className="mb-10 grid items-end gap-6 lg:grid-cols-2 lg:gap-16"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{page.connections.eyebrow}</span><h2 id="connected-expertise-title" className={title}>{page.connections.title}<br /><span className="text-[#0068a5]">{page.connections.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{page.connections.description}</p></div>
          <div className="grid gap-5 md:grid-cols-2">{[{title:page.connections.areasTitle,description:page.connections.areasDescription,label:page.connections.areasLabel,href:"/therapeutic-areas",icon:"science"},{title:page.connections.productsTitle,description:page.connections.productsDescription,label:page.connections.productsLabel,href:"/products",icon:"platform"}].map(item => <Link key={item.href} href={item.href} className="group flex min-w-0 flex-col rounded-3xl border border-[#cfe3e8] bg-[#f6fafb] p-6 transition-colors hover:border-[#88c4cf] hover:bg-[#edf7f8] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] sm:p-8"><ServiceIcon name={item.icon} size={30} className="mb-7 text-[#008995]" /><h3 className="text-3xl font-semibold tracking-tight text-[#0a2038]">{item.title}</h3><p className="mt-4 mb-7 text-lg font-medium leading-[1.8] text-black">{item.description}</p><span className="mt-auto flex items-center justify-between gap-4 text-lg font-medium text-[#0068a5]">{item.label}<ArrowUpRight size={21} className="shrink-0" aria-hidden="true" /></span></Link>)}</div>
          <OverviewContact />
        </div>
      </section>
    </>
  );
}
