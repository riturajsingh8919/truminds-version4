import Link from "next/link";
import { InnerPageHero } from "@/components/layout/InnerPageHero";
import { TherapeuticFocusGroups } from "@/components/therapeutic/TherapeuticFocusGroups";
import { TherapeuticIcon } from "@/components/therapeutic/TherapeuticIcon";
import { therapeuticDeliveryModels, therapeuticPageCopy, therapeuticPages, type TherapeuticPage } from "@/lib/therapeutic-pages";
import { section, shell, title } from "@/lib/site-styles";

export function TherapeuticDetailPage({ area }: { area: TherapeuticPage }) {
  const { content } = area;
  return (
    <>
      <InnerPageHero pagePath={`/therapeutic-areas/${area.slug}`} titleId="therapeutic-title" title={area.title} concept={content.hero.headline} description={content.hero.description} eyebrow={therapeuticPageCopy.areasLabel} parent={{ label: therapeuticPageCopy.areasLabel, href: "/therapeutic-areas" }} />
      <section id="therapeutic-overview" aria-labelledby="therapeutic-overview-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={`${shell} grid items-start gap-8 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24`}>
          <div><span className="mb-4 block text-lg font-medium text-[#00818d]">{content.overview.eyebrow}</span><h2 id="therapeutic-overview-title" className={title}>{content.overview.title}<br /><span className="text-[#0068a5]">{content.overview.highlight}</span></h2></div>
          <div className="border-l-2 border-[#b4dce2] pl-5 sm:pl-8 lg:mt-3">{content.overview.paragraphs.map(paragraph => <p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}</div>
        </div>
      </section>
      <section id="research-focus" aria-labelledby="research-focus-title" className={`${section} scroll-mt-24 bg-[#f0f7f9]`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{content.focus.eyebrow}</span><h2 id="research-focus-title" className={title}>{content.focus.title}<br /><span className="text-[#0068a5]">{content.focus.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.75] text-black">{content.focus.description}</p></div>
          <TherapeuticFocusGroups groups={content.focus.groups} prefix={area.slug} singular={therapeuticPageCopy.resultSingular} plural={therapeuticPageCopy.resultSuffix} />
        </div>
      </section>
      <section id="study-support" aria-labelledby="study-support-title" className={`${section} scroll-mt-24 bg-[#08253d] text-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16"><div><span className="mb-4 block text-lg font-medium text-[#77dbd7]">{content.delivery.eyebrow}</span><h2 id="study-support-title" className={`${title} text-white`}>{content.delivery.title}<br /><span className="text-[#77dbd7]">{content.delivery.highlight}</span></h2></div><p className="max-w-150 text-lg font-medium leading-[1.75] text-[#d4e6ec]">{content.delivery.description}</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-3 xl:gap-6">{content.delivery.items.map(item => <article key={item.title} className="rounded-2xl border border-white/15 bg-white/4 p-6 sm:p-7"><span className="mb-6 block text-[#77dbd7]"><TherapeuticIcon name={item.icon} size={29} /></span><h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3><p className="mt-4 text-lg font-medium leading-[1.75] text-[#d4e6ec]">{item.text}</p></article>)}</div>
          <div className="mt-9 border-t border-white/20 pt-7"><h3 className="text-2xl font-semibold tracking-tight text-white">{therapeuticPageCopy.servicesTitle}</h3><p className="mt-3 text-lg font-medium leading-relaxed text-[#d4e6ec]">{therapeuticPageCopy.servicesDescription}</p><ul className="mt-5 flex flex-wrap gap-x-7 gap-y-4">{therapeuticDeliveryModels.map(service => <li key={service.slug}><Link href={`/services/${service.slug}`} className="text-lg font-medium text-[#a0e6e3] underline underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#a0e6e3]">{service.title}</Link></li>)}</ul></div>
        </div>
      </section>
      <section aria-labelledby="therapeutic-atlas-title" className={`${section} copy-on-light bg-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{therapeuticPageCopy.atlasEyebrow}</span><h2 id="therapeutic-atlas-title" className={title}>{therapeuticPageCopy.atlasTitle}<br /><span className="text-[#0068a5]">{therapeuticPageCopy.atlasHighlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.75] text-black">{therapeuticPageCopy.atlasDescription}</p></div>
          <nav aria-label={therapeuticPageCopy.atlasNavigationLabel} className="mt-8 grid gap-x-8 sm:grid-cols-2 xl:grid-cols-4">{therapeuticPages.map(item => <Link key={item.slug} href={`/therapeutic-areas/${item.slug}`} aria-current={item.slug === area.slug ? "page" : undefined} className={`border-b border-[#d7e7eb] py-4 text-lg font-medium underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] ${item.slug === area.slug ? "text-[#0068a5] underline" : "text-[#234b61]"}`}>{item.title}</Link>)}</nav>
          <Link href="/therapeutic-areas" className="mt-7 inline-block text-lg font-medium text-[#0068a5] underline underline-offset-4 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">{therapeuticPageCopy.backLabel}</Link>
        </div>
      </section>
    </>
  );
}
