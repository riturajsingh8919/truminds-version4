import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { ProductWorkflow } from "@/components/products/ProductWorkflow";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { getConnectedProducts, productPageCopy, truformProducts, type TruFormProduct } from "@/lib/truform-products";
import { section, shell, title } from "@/lib/site-styles";

export function ProductDetailPage({ product }: { product: TruFormProduct }) {
  const { detail } = product;
  const connectedProducts = getConnectedProducts(product);

  return (
    <>
      <InnerPageHero pagePath={`/truminds-ai/${product.slug}`} titleId="product-title" title={product.title} description={detail.hero.description} ancestors={[{ label: "Products", href: "/products" }]}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-lg font-medium"><span className="font-semibold text-[#173f55]">{detail.fullName}</span><span className="text-[#416375]">{detail.category}</span><ul className="flex flex-wrap gap-x-4 gap-y-2 text-[#006779]">{detail.hero.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
      </InnerPageHero>

      <nav aria-label={productPageCopy.productNavigationLabel} className="border-b border-[#dbe7eb] bg-white">
        <div className={`${shell} overflow-x-auto py-4`}>
          <div className="flex w-max min-w-full items-center justify-between gap-1">
            {truformProducts.map((item) => {
              const current = item.slug === product.slug;
              return <Link href={`/truminds-ai/${item.slug}`} key={item.slug} aria-label={item.title} aria-current={current ? "page" : undefined} className={`inline-flex min-h-14 min-w-20 items-center justify-center rounded-xl border px-4 py-3 text-lg font-medium transition-[color,background-color,border-color] duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5] motion-reduce:transition-none ${current ? "border-[#082b43] bg-[#082b43] text-white" : "border-transparent text-[#36576b] hover:border-[#c6dfe5] hover:bg-[#edf6f8] hover:text-[#0068a5]"}`}>{item.detail.name}</Link>;
            })}
          </div>
        </div>
      </nav>

      <section id="product-overview" aria-labelledby="product-overview-title" className={`${section} copy-on-light bg-white`}>
        <div className={`${shell} grid items-start gap-10 lg:grid-cols-[minmax(0,.84fr)_minmax(0,1.16fr)] lg:gap-16 xl:gap-24`}>
          <div className="lg:sticky lg:top-28">
            <span className="mb-4 block text-lg font-medium text-[#00818d]">{detail.overview.eyebrow}</span>
            <h2 id="product-overview-title" className={title}>{detail.overview.title}<br /><span className="text-[#0068a5]">{detail.overview.highlight}</span></h2>
            <ul className="mt-8 space-y-3">
              {detail.overview.pillars.map((pillar) => <li className="flex items-center gap-4 rounded-2xl border border-[#d6e7eb] bg-[#f5fafb] px-5 py-4 text-lg font-medium text-[#173f55]" key={pillar.label}><ServiceIcon name={pillar.icon} size={24} className="shrink-0 text-[#008995]" /><span>{pillar.label}</span></li>)}
            </ul>
          </div>
          <div className="space-y-5 border-l-2 border-[#b9dfe3] pl-5 sm:pl-8 lg:mt-10">
            {detail.overview.paragraphs.map((paragraph) => <p className="text-lg font-medium leading-[1.8] text-black" key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section id="product-capabilities" aria-labelledby="product-capabilities-title" className={`${section} copy-on-light scroll-mt-24 bg-[#f2f8f9]`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div><span className="mb-4 block text-lg font-medium text-[#00818d]">{detail.capabilities.eyebrow}</span><h2 id="product-capabilities-title" className={title}>{detail.capabilities.title}<br /><span className="text-[#0068a5]">{detail.capabilities.highlight}</span></h2></div>
            <p className="max-w-145 text-lg font-medium leading-[1.75] text-black">{detail.capabilities.description}</p>
          </div>
          <div className="mt-10 grid items-start gap-5 md:grid-cols-2 xl:mt-14 xl:gap-6">
            {detail.capabilities.items.map((feature) => (
              <details name={`${product.slug}-capabilities`} className="group overflow-hidden rounded-3xl border border-[#d1e4e9] bg-white transition-[border-color,box-shadow] duration-300 open:border-[#72b8c7] open:shadow-[0_14px_36px_rgba(7,67,91,.07)] hover:border-[#8cc7d1] motion-reduce:transition-none" key={feature.id}>
                <summary className="cursor-pointer list-none p-6 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0068a5] sm:p-8 [&::-webkit-details-marker]:hidden">
                  <span className="mb-7 flex items-start justify-between gap-4"><span className="grid size-13 place-items-center rounded-2xl border border-[#cce4e9] bg-[#edf7f8] text-[#008995]"><ServiceIcon name={feature.icon} size={27} /></span><span className="grid size-9 place-items-center rounded-full border border-[#d4e6eb] text-[#0068a5]"><Plus size={20} className="transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true" /></span></span>
                  <span className="block text-2xl font-semibold tracking-tight text-[#0a2038]">{feature.title}</span>
                  <span className="mt-3 block max-w-140 text-lg font-medium leading-[1.75] text-black">{feature.summary}</span>
                </summary>
                <div className="mx-6 border-t border-[#dbe8eb] pt-5 pb-6 sm:mx-8 sm:pb-8">
                  <ul className="space-y-3">
                    {feature.items.map((item) => <li className="flex items-start gap-3 text-lg font-medium leading-relaxed text-black" key={item}><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" /><span>{item}</span></li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="product-workflow" aria-labelledby="product-workflow-title" className={`${section} bg-[#08253d] text-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div><span className="mb-4 block text-lg font-medium text-[#77dbd7]">{detail.workflow.eyebrow}</span><h2 id="product-workflow-title" className={`${title} text-white`}>{detail.workflow.title}<br /><span className="text-[#77dbd7]">{detail.workflow.highlight}</span></h2></div>
            <p className="max-w-145 text-lg font-medium leading-[1.75] text-[#d4e6ec]">{detail.workflow.description}</p>
          </div>
          <ProductWorkflow steps={detail.workflow.steps} navigationLabel={productPageCopy.workflowNavigationLabel} inputLabel={productPageCopy.workflowInputLabel} outputLabel={productPageCopy.workflowOutputLabel} />
        </div>
      </section>

      <section aria-labelledby="product-connections-title" className={`${section} copy-on-light bg-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div><span className="mb-4 block text-lg font-medium text-[#00818d]">{detail.connections.eyebrow}</span><h2 id="product-connections-title" className={title}>{detail.connections.title}<br /><span className="text-[#0068a5]">{detail.connections.highlight}</span></h2></div>
            <p className="max-w-145 text-lg font-medium leading-[1.75] text-black">{detail.connections.description}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3 xl:mt-14 xl:gap-6">
            {connectedProducts.map(({ product: item, context }) => (
              <Link href={`/truminds-ai/${item.slug}`} key={item.slug} className="group flex min-w-0 flex-col rounded-3xl border border-[#d5e5e9] bg-[#f6fafb] p-6 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#8cc7d1] hover:bg-white hover:shadow-[0_16px_35px_rgba(5,50,74,.07)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none sm:p-7">
                <span className="mb-7 flex items-center justify-between gap-4"><span className="grid size-12 place-items-center rounded-xl border border-[#d0e4e9] bg-white text-[#008995]"><ServiceIcon name={item.detail.icon} /></span><ArrowUpRight size={23} className="text-[#0068a5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></span>
                <h3 className="text-2xl font-semibold tracking-tight text-[#0a2038]">{item.title}</h3>
                <span className="mt-3 block text-lg font-medium leading-relaxed text-black">{context}</span>
                <span className="mt-auto inline-flex items-center gap-3 pt-6 text-lg font-medium text-[#0068a5]">{productPageCopy.relatedLinkLabel}<ArrowRight size={18} aria-hidden="true" /></span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col justify-between gap-7 rounded-3xl border border-[#cbe3e7] bg-[#eaf5f6] p-6 md:flex-row md:items-center md:p-9 xl:mt-16 xl:p-10">
            <div className="min-w-0 max-w-200"><h3 className="text-2xl font-semibold tracking-tight text-[#0a2038] sm:text-3xl">{detail.cta.title}</h3><p className="mt-3 text-lg font-medium leading-relaxed text-black">{detail.cta.description}</p></div>
            <div className="max-w-full shrink-0 [&>a]:max-w-full [&>a]:text-center"><AnimatedPillLink href={detail.cta.href} label={detail.cta.label} variant="dark" size="large" /></div>
          </div>
          <Link href="/products" className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{productPageCopy.backToEcosystemLabel}<ArrowRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
