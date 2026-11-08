import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import { getPageHeaderImage } from "@/data/page-header-images";
import { servicePageCopy, services, type Service, type ServiceCapability } from "@/lib/services";
import { section, shell, title } from "@/lib/site-styles";

export function ServiceDetailPage({
  service,
  capabilities,
}: {
  service: Service;
  capabilities: ServiceCapability[];
}) {
  const { detail } = service;
  const related = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <InnerPageHero pagePath={`/services/${service.slug}`} titleId="service-title" title={service.title} concept={detail.headline} description={detail.heroDescription} eyebrow={detail.eyebrow} parent={{ label: servicePageCopy.servicesLabel, href: "/services" }}>
        <dl className="flex flex-wrap gap-x-10 gap-y-4">{detail.facts.map(fact => <div key={fact.label} className="flex flex-wrap items-baseline gap-x-2 gap-y-1"><dt className="text-lg font-medium text-[#416375]">{fact.label}</dt><dd className="text-lg font-semibold text-[#0068a5]">{fact.value}</dd></div>)}</dl>
      </InnerPageHero>

      <nav aria-label={servicePageCopy.serviceNavigationLabel} className="border-b border-[#dbe7eb] bg-white">
        <div className={`${shell} overflow-x-auto py-4`}>
          <div className="flex gap-2 lg:grid lg:grid-cols-4 lg:gap-3">
            {services.map((item) => {
              const current = item.slug === service.slug;
              return (
                <Link
                  href={`/services/${item.slug}`}
                  key={item.slug}
                  aria-current={current ? "page" : undefined}
                  className={`group flex min-h-16 min-w-57 items-center gap-3 rounded-xl border px-5 py-4 text-lg font-medium transition-[border-color,background-color,color] duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5] motion-reduce:transition-none lg:min-w-0 ${current ? "border-[#b6d9e0] bg-[#eaf5f7] text-[#0068a5]" : "border-transparent text-[#33556a] hover:border-[#d2e6ea] hover:bg-[#f3f8fa] hover:text-[#0068a5]"}`}
                >
                  <ServiceIcon name={item.detail.overview.highlights[0].icon} size={22} className="shrink-0 text-[#008995]" />
                  <span className="flex-1">{item.title}</span>
                  {current && <span className="size-2 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <section id="overview" aria-labelledby="service-overview-title" className={`${section} copy-on-light bg-white`}>
        <div className={`${shell} grid items-start gap-10 lg:grid-cols-[minmax(0,.84fr)_minmax(0,1.16fr)] lg:gap-16 xl:gap-24`}>
          <div className="lg:sticky lg:top-28">
            <span className="mb-4 block text-lg font-medium text-[#00818d]">{detail.overview.eyebrow}</span>
            <h2 id="service-overview-title" className={title}>
              {detail.overview.title}<br /><span className="text-[#0068a5]">{detail.overview.highlight}</span>
            </h2>
            <ul className="mt-8">
              {detail.overview.highlights.map((item) => (
                <li className="flex gap-4 border-t border-[#dce8eb] py-5" key={item.title}>
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#eef7f8] text-[#008995]"><ServiceIcon name={item.icon} /></span>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0a2038]">{item.title}</h3>
                    <p className="mt-1 text-lg font-medium leading-relaxed text-black">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 border-l-2 border-[#b9dfe3] pl-5 sm:pl-8 lg:mt-10">
            {detail.overview.paragraphs.map((paragraph) => <p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section id="capabilities" aria-labelledby="service-capabilities-title" className={`${section} scroll-mt-24 bg-[#f2f8f9]`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)] lg:gap-16">
            <div>
              <span className="mb-4 block text-lg font-medium text-[#00818d]">{detail.capabilities.eyebrow}</span>
              <h2 id="service-capabilities-title" className={title}>
                {detail.capabilities.title}<br /><span className="text-[#0068a5]">{detail.capabilities.highlight}</span>
              </h2>
            </div>
            <p className="max-w-145 text-lg font-medium leading-[1.75] text-black lg:pb-1">{detail.capabilities.description}</p>
          </div>
          <ServiceCapabilities capabilities={capabilities} selectLabel={servicePageCopy.capabilitySelectLabel} navigationLabel={servicePageCopy.capabilityNavigationLabel} />
        </div>
      </section>

      <section aria-labelledby="service-partnership-title" className={`${section} bg-[#08253d] text-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 block text-lg font-medium text-[#77dbd7]">{detail.partnership.eyebrow}</span>
              <h2 id="service-partnership-title" className={`${title} text-white`}>
                {detail.partnership.title}<br /><span className="text-[#77dbd7]">{detail.partnership.highlight}</span>
              </h2>
            </div>
            <p className="max-w-145 text-lg font-medium leading-[1.75] text-[#d4e6ec]">{detail.partnership.description}</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:mt-14 xl:gap-6">
            {detail.partnership.items.map((item) => (
              <article className="group rounded-3xl border border-white/15 bg-white/4 p-6 transition-[border-color,background-color] duration-300 hover:border-[#77dbd7]/60 hover:bg-white/8 motion-reduce:transition-none sm:p-8" key={item.title}>
                <span className="mb-8 grid size-14 place-items-center rounded-2xl border border-white/15 bg-white/5 text-[#77dbd7]"><ServiceIcon name={item.icon} size={28} /></span>
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 text-lg font-medium leading-[1.75] text-[#d4e6ec]">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/20 pt-9 md:flex-row md:items-center xl:mt-14">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{detail.cta.title}</h3>
              <p className="mt-3 max-w-190 text-lg font-medium leading-relaxed text-[#d4e6ec]">{detail.cta.description}</p>
            </div>
            <div className="shrink-0"><AnimatedPillLink href={detail.cta.href} label={detail.cta.label} variant="light" size="large" /></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-services-title" className={`${section} copy-on-light bg-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 block text-lg font-medium text-[#00818d]">{servicePageCopy.relatedEyebrow}</span>
              <h2 id="related-services-title" className={title}>{servicePageCopy.relatedTitle}<br /><span className="text-[#0068a5]">{servicePageCopy.relatedHighlight}</span></h2>
            </div>
            <p className="max-w-140 text-lg font-medium leading-relaxed text-black">{servicePageCopy.relatedDescription}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3 xl:mt-14 xl:gap-6">
            {related.map((item) => {
              const image = getPageHeaderImage(`/services/${item.slug}`);
              return (
                <Link href={`/services/${item.slug}`} key={item.slug} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#d8e5e9] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#8cc7d1] hover:shadow-[0_16px_35px_rgba(5,50,74,.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">
                  <div className="bg-[#eef4f7]" data-service-card-image>
                    <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 100vw, 33vw" className="block h-auto w-full" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-4"><h3 className="text-3xl font-bold leading-tight tracking-tight text-[#0a2038] xl:text-4xl">{item.title}</h3><ArrowUpRight size={24} className="shrink-0 text-[#0068a5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></div>
                    <span className="mt-4 block text-[22px] font-semibold leading-snug text-[#006779] sm:text-2xl">{item.detail.headline}</span>
                    <p className="mt-3 text-lg font-medium leading-relaxed text-black">{item.description}</p>
                    <span className="mt-auto flex items-center gap-3 pt-6 text-lg font-medium text-[#0068a5]">{servicePageCopy.relatedLinkLabel}<ArrowRight size={19} aria-hidden="true" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
