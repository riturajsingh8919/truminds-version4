import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceIcon } from "@/components/services/ServiceIcon";
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
      <section aria-labelledby="service-title" className="relative isolate overflow-hidden bg-[#08253d] text-white">
        <div className="pointer-events-none absolute -top-48 -right-48 -z-10 size-180 rounded-full border border-white/10" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-10 bottom-0 -z-10 size-130 rounded-full border border-[#67d5d3]/15" aria-hidden="true" />
        <div className={shell}>
          <nav aria-label="Breadcrumb" className="py-6 sm:py-8">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-[#d2e5eb]">
              <li><Link href="/" className="transition-colors hover:text-[#78ded9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#78ded9]">{servicePageCopy.homeLabel}</Link></li>
              <li className="flex items-center gap-3"><ChevronRight size={16} aria-hidden="true" /><Link href="/services" className="transition-colors hover:text-[#78ded9] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#78ded9]">{servicePageCopy.servicesLabel}</Link></li>
              <li className="flex items-center gap-3"><ChevronRight size={16} aria-hidden="true" /><span aria-current="page" className="text-white">{service.title}</span></li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 pt-5 pb-12 sm:pt-7 md:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:gap-16 lg:pt-5 lg:pb-16 xl:gap-24">
            <div className="min-w-0 py-2 lg:py-8">
              <div className="mb-6 flex items-center gap-3 text-lg font-medium leading-relaxed text-[#77dbd7]">
                <span className="h-px w-9 shrink-0 bg-[#77dbd7]" aria-hidden="true" />
                {detail.eyebrow}
              </div>
              <h1 id="service-title" className="text-4xl leading-[1.06] font-semibold tracking-[-.028em] sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                {service.title}
              </h1>
              <span className="mt-6 block max-w-160 text-2xl leading-snug font-semibold tracking-tight text-[#77dbd7] md:text-3xl">
                {detail.headline}
              </span>
              <p className="mt-5 max-w-160 text-lg font-medium leading-[1.75] text-[#e0edf1]">
                {detail.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5 lg:mt-10">
                <AnimatedPillLink href={detail.cta.href} label={servicePageCopy.primaryAction} variant="light" size="large" />
                <Link href="#capabilities" className="group inline-flex min-h-14 items-center gap-3 text-lg font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">
                  {servicePageCopy.capabilitiesAction}
                  <ArrowDownRight size={22} className="text-[#77dbd7] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-115 lg:max-w-100 xl:max-w-115">
              <div className="pointer-events-none absolute -inset-2.5 rounded-[36px] border border-white/15 sm:-inset-3.5 sm:rounded-[42px]" aria-hidden="true" />
              <div className="relative aspect-5/6 overflow-hidden rounded-[28px] bg-[#173c50] sm:rounded-[32px]">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  preload
                  sizes="(max-width: 1023px) 460px, (max-width: 1535px) 42vw, 560px"
                  className="object-cover"
                  style={{ objectPosition: service.imagePosition }}
                />
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-1 border-t border-white/15 py-3 sm:grid-cols-3 sm:py-6">
            {detail.facts.map((fact) => (
              <div className="flex items-center justify-between gap-5 border-b border-white/10 py-4 last:border-b-0 sm:block sm:border-r sm:border-b-0 sm:px-8 sm:first:pl-0 sm:last:border-r-0" key={fact.label}>
                <dt className="text-lg font-medium text-[#c2d9e2]">{fact.label}</dt>
                <dd className="text-xl font-semibold tracking-tight text-white sm:mt-1 sm:text-2xl">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

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
            {related.map((item) => (
              <Link href={`/services/${item.slug}`} key={item.slug} className="group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-[#d8e5e9] bg-white transition-[border-color,box-shadow] duration-300 hover:border-[#8cc7d1] hover:shadow-[0_16px_35px_rgba(5,50,74,.08)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">
                <div className="relative aspect-[1.6] overflow-hidden bg-[#eef4f7]">
                  <Image src={item.image} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" style={{ objectPosition: item.imagePosition }} />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4"><h3 className="text-2xl font-semibold tracking-tight text-[#0a2038]">{item.title}</h3><ArrowUpRight size={24} className="shrink-0 text-[#0068a5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></div>
                  <p className="mt-3 text-lg font-medium leading-relaxed text-black">{item.description}</p>
                  <span className="mt-auto flex items-center gap-3 pt-6 text-lg font-medium text-[#0068a5]">{servicePageCopy.relatedLinkLabel}<ArrowRight size={19} aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
