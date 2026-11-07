import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { OverviewHero } from "@/components/overview/OverviewHero";
import { OverviewContact } from "@/components/overview/OverviewContact";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import copy from "@/data/overview-pages.json";
import { getTruFormProduct } from "@/lib/truform-products";
import { section, shell, title } from "@/lib/site-styles";

export function ProductsOverviewPage() {
  const page = copy.products;
  return (
    <>
      <OverviewHero hero={page.hero} navigation={page.navigation} light />
      {page.groups.map((group, index) => (
        <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className={`${section} copy-on-light scroll-mt-24 border-b border-[#dce9ed] ${index % 2 ? "bg-[#f2f8f9]" : "bg-white"}`}>
          <div className={shell}>
            <div className="mb-10 grid items-end gap-6 lg:grid-cols-2 lg:gap-16 xl:mb-14"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{group.eyebrow}</span><h2 id={`${group.id}-title`} className={title}>{group.title}<br /><span className="text-[#0068a5]">{group.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.8] text-black">{group.description}</p></div>
            <nav aria-label={group.eyebrow} className={`grid gap-5 md:grid-cols-2 ${group.slugs.length === 4 ? "xl:grid-cols-4" : "xl:grid-cols-3"} xl:gap-6`}>
              {group.slugs.map(slug => {
                const product = getTruFormProduct(slug);
                if (!product) throw new Error(`Missing overview product: ${slug}`);
                return <Link key={product.slug} href={`/truminds-ai/${product.slug}`} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#d3e5e9] bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#86c5d0] hover:shadow-[0_12px_30px_rgba(8,43,67,.06)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none"><div className="mb-5 flex items-start justify-between gap-4"><span className="relative block size-20 shrink-0 overflow-hidden rounded-2xl border border-[#d5e7eb] bg-[#edf5f7]"><Image src={product.image} alt={product.imageAlt} fill sizes="80px" className="object-cover transition-transform duration-700 group-hover:scale-[1.04] motion-reduce:transition-none" style={{ objectPosition: product.imagePosition }} /></span><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#d0e6eb] bg-[#edf7f8] text-[#008995]"><ServiceIcon name={product.detail.icon} size={24} /></span></div><h3 className="text-2xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere]">{product.title}</h3><span className="mt-2 text-lg font-medium leading-relaxed text-[#006b78]">{product.detail.fullName}</span><p className="mt-4 mb-5 text-lg font-medium leading-[1.8] text-black">{product.shortDescription}</p><ul className="mb-6 flex flex-wrap gap-x-3 gap-y-2 border-t border-[#e0ebef] pt-4 text-lg font-medium text-[#365a70]">{product.detail.hero.tags.map((tag, tagIndex) => <li key={tag} className="flex items-center gap-2">{tagIndex > 0 && <ArrowRight size={16} className="text-[#008995]" aria-hidden="true" />}{tag}</li>)}</ul><span className="mt-auto flex min-h-12 items-center justify-between gap-3 border-t border-[#d8e8ec] pt-4 text-lg font-medium text-[#0068a5]">{page.linkLabel}<ArrowUpRight size={21} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></span></Link>;
              })}
            </nav>
          </div>
        </section>
      ))}
      <section aria-labelledby="product-support-title" className={`${section} copy-on-light bg-white`}>
        <div className={shell}>
          <div className="grid items-center gap-7 border-l-2 border-[#00aaa9] pl-5 sm:pl-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12"><div><h2 id="product-support-title" className="text-3xl font-semibold leading-tight tracking-tight text-[#0a2038] md:text-4xl">{page.support.title}</h2><p className="mt-4 max-w-200 text-lg font-medium leading-[1.8] text-black">{page.support.description}</p></div><Link href={page.support.href} className="inline-flex min-h-12 w-fit items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{page.support.label}<ArrowUpRight size={21} className="shrink-0" aria-hidden="true" /></Link></div>
          <OverviewContact />
        </div>
      </section>
    </>
  );
}
