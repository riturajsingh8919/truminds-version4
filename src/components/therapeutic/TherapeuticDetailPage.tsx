import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { TherapeuticFocusExplorer } from "@/components/therapeutic/TherapeuticFocusExplorer";
import { TherapeuticIcon } from "@/components/therapeutic/TherapeuticIcon";
import { therapeuticDeliveryModels, therapeuticPageCopy, therapeuticPages, type TherapeuticPage } from "@/lib/therapeutic-pages";
import { section, shell, title } from "@/lib/site-styles";

export function TherapeuticDetailPage({ area }: { area: TherapeuticPage }) {
  const { content } = area;
  const pageLinks = [
    {label:therapeuticPageCopy.overviewLink,href:"#therapeutic-overview",icon:"clinical"},
    {label:therapeuticPageCopy.focusLink,href:"#research-focus",icon:"target"},
    {label:therapeuticPageCopy.deliveryLink,href:"#study-support",icon:"network"},
  ];

  return (
    <>
      <section aria-labelledby="therapeutic-title" className="relative isolate overflow-hidden bg-[#08253d] text-white">
        <svg viewBox="0 0 640 760" fill="none" className="pointer-events-none absolute top-0 right-0 -z-10 h-full w-3/5 opacity-20" aria-hidden="true">
          <path d="M88 30c120 75 30 160 155 235s25 155 150 230 20 155 155 235M220 8c120 75 30 160 155 235s25 155 150 230 20 155 155 235" stroke="#8ddfdf" strokeWidth="1.5" />
          <path d="m139 139 159-23m-59 156 155-24m-102 146 155-24m-59 156 155-24" stroke="#8ddfdf" strokeWidth="1.5" />
          <circle cx="139" cy="139" r="7" fill="#8ddfdf" /><circle cx="298" cy="116" r="7" fill="#8ddfdf" /><circle cx="239" cy="272" r="7" fill="#8ddfdf" /><circle cx="394" cy="248" r="7" fill="#8ddfdf" /><circle cx="292" cy="394" r="7" fill="#8ddfdf" /><circle cx="447" cy="370" r="7" fill="#8ddfdf" />
        </svg>
        <div className={shell}>
          <nav aria-label="Breadcrumb" className="py-6 sm:py-8">
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-[#c6dfe7]">
              <li><Link href="/" className="transition-colors hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">{therapeuticPageCopy.homeLabel}</Link></li>
              <li className="flex items-center gap-3"><ChevronRight size={16} aria-hidden="true" /><Link href="/#therapeutic-areas" className="transition-colors hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">{therapeuticPageCopy.areasLabel}</Link></li>
              <li className="flex items-center gap-3"><ChevronRight size={16} aria-hidden="true" /><span aria-current="page" className="text-white">{area.title}</span></li>
            </ol>
          </nav>

          <div className="grid items-center gap-10 pt-5 pb-12 md:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,.8fr)] lg:gap-16 lg:pt-6 lg:pb-16 xl:gap-24">
            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3 text-lg font-medium leading-relaxed text-[#77dbd7]"><span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/5"><TherapeuticIcon name={content.icon} size={27} /></span>{content.hero.eyebrow}</div>
              <h1 id="therapeutic-title" className="text-4xl leading-[1.06] font-semibold tracking-[-.028em] text-white [overflow-wrap:anywhere] sm:text-5xl md:text-6xl xl:text-7xl">{area.title}</h1>
              <span className="mt-6 block max-w-175 text-2xl leading-snug font-semibold tracking-tight text-[#77dbd7] md:text-3xl">{content.hero.headline}</span>
              <p className="mt-5 max-w-155 text-lg font-medium leading-[1.75] text-[#e2eef1]">{content.hero.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-10">
                <AnimatedPillLink href={content.cta.href} label={therapeuticPageCopy.primaryAction} variant="light" size="large" />
                <Link href="#research-focus" className="group inline-flex min-h-14 items-center gap-3 text-lg font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">{therapeuticPageCopy.focusAction}<ArrowDownRight size={22} className="text-[#77dbd7] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-96 lg:max-w-88 xl:max-w-96">
              <div className="pointer-events-none absolute -inset-2.5 rounded-[36px] border border-[#77dbd7]/30 sm:-inset-3.5 sm:rounded-[42px]" aria-hidden="true" />
              <div className="relative aspect-2/3 overflow-hidden rounded-[28px] bg-white sm:rounded-[32px]">
                <Image src={area.image} alt={content.imageAlt} fill preload sizes="(max-width: 423px) calc(100vw - 40px), (max-width: 1023px) 384px, (max-width: 1279px) 352px, 384px" className="object-contain" style={{objectPosition:area.imagePosition}} />
              </div>
            </div>
          </div>

          <nav aria-label={therapeuticPageCopy.pageNavigationLabel} className="grid border-t border-white/20 sm:grid-cols-3">
            {pageLinks.map(item=><Link href={item.href} key={item.href} className="group flex min-h-20 items-center gap-4 border-b border-white/10 py-5 text-lg font-medium text-white transition-colors hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#77dbd7] sm:border-r sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:border-r-0"><TherapeuticIcon name={item.icon} size={24} className="shrink-0 text-[#77dbd7]" /><span className="flex-1">{item.label}</span><ArrowDownRight size={21} className="shrink-0 text-[#77dbd7] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>)}
          </nav>
        </div>
      </section>

      <section id="therapeutic-overview" aria-labelledby="therapeutic-overview-title" className={`${section} copy-on-light scroll-mt-24 bg-white`}>
        <div className={`${shell} grid items-start gap-8 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] lg:gap-16 xl:gap-24`}>
          <div><span className="mb-4 block text-lg font-medium text-[#00818d]">{content.overview.eyebrow}</span><h2 id="therapeutic-overview-title" className={title}>{content.overview.title}<br /><span className="text-[#0068a5]">{content.overview.highlight}</span></h2></div>
          <div className="border-l-2 border-[#b4dce2] pl-5 sm:pl-8 lg:mt-10">
            {content.overview.paragraphs.map(paragraph=><p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}
            <Link href="#research-focus" className="mt-6 inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{therapeuticPageCopy.focusAction}<ArrowRight size={20} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section id="research-focus" aria-labelledby="research-focus-title" className={`${section} scroll-mt-24 bg-[#f0f7f9]`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{content.focus.eyebrow}</span><h2 id="research-focus-title" className={title}>{content.focus.title}<br /><span className="text-[#0068a5]">{content.focus.highlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.75] text-black">{content.focus.description}</p></div>
          <TherapeuticFocusExplorer groups={content.focus.groups} copy={therapeuticPageCopy} />
        </div>
      </section>

      <section id="study-support" aria-labelledby="study-support-title" className={`${section} scroll-mt-24 bg-[#08253d] text-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16"><div><span className="mb-4 block text-lg font-medium text-[#77dbd7]">{content.delivery.eyebrow}</span><h2 id="study-support-title" className={`${title} text-white`}>{content.delivery.title}<br /><span className="text-[#77dbd7]">{content.delivery.highlight}</span></h2></div><p className="max-w-150 text-lg font-medium leading-[1.75] text-[#d4e6ec]">{content.delivery.description}</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:mt-14 xl:gap-6">
            {content.delivery.items.map(item=><article key={item.title} className="group rounded-3xl border border-white/15 bg-white/4 p-6 transition-[background-color,border-color] duration-300 hover:border-[#77dbd7]/60 hover:bg-white/8 motion-reduce:transition-none sm:p-8"><span className="mb-8 grid size-14 place-items-center rounded-2xl border border-white/15 bg-white/5 text-[#77dbd7]"><TherapeuticIcon name={item.icon} size={29} /></span><h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3><p className="mt-4 text-lg font-medium leading-[1.75] text-[#d4e6ec]">{item.text}</p></article>)}
          </div>
          <div className="mt-10 border-t border-white/20 pt-8 xl:mt-14"><div className="mb-6 flex flex-col justify-between gap-3 lg:flex-row lg:items-end"><h3 className="text-2xl font-semibold tracking-tight text-white">{therapeuticPageCopy.servicesTitle}</h3><p className="max-w-145 text-lg font-medium leading-relaxed text-[#d4e6ec]">{therapeuticPageCopy.servicesDescription}</p></div><div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{therapeuticDeliveryModels.map(service=><Link href={`/services/${service.slug}`} key={service.slug} className="group flex min-h-17 items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-lg font-medium text-white transition-[border-color,background-color,color] duration-250 hover:border-[#77dbd7]/60 hover:bg-white/10 hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#77dbd7] motion-reduce:transition-none"><span>{service.title}</span><ArrowUpRight size={21} className="shrink-0 text-[#77dbd7] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>)}</div></div>
        </div>
      </section>

      <section aria-labelledby="therapeutic-atlas-title" className={`${section} copy-on-light bg-white`}>
        <div className={shell}>
          <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-16"><div><span className="mb-4 block text-lg font-medium text-[#00818d]">{therapeuticPageCopy.atlasEyebrow}</span><h2 id="therapeutic-atlas-title" className={title}>{therapeuticPageCopy.atlasTitle}<br /><span className="text-[#0068a5]">{therapeuticPageCopy.atlasHighlight}</span></h2></div><p className="max-w-145 text-lg font-medium leading-[1.75] text-black">{therapeuticPageCopy.atlasDescription}</p></div>
          <nav aria-label={therapeuticPageCopy.atlasNavigationLabel} className="mt-10 grid gap-4 md:grid-cols-2 xl:mt-14 2xl:grid-cols-4">
            {therapeuticPages.map(item=>{
              const current=item.slug===area.slug;
              return <Link href={`/therapeutic-areas/${item.slug}`} aria-label={`${therapeuticPageCopy.atlasLinkLabel}: ${item.title}`} aria-current={current?"page":undefined} key={item.slug} className={`group flex min-w-0 items-center gap-3 rounded-2xl border p-4 transition-[background-color,border-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none ${current?"border-[#83c4d0] bg-[#eaf5f7]":"border-[#d6e6ea] bg-white hover:border-[#83c4d0] hover:bg-[#f5fafb]"}`}><span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-[#e6f0f3] sm:size-20"><Image src={item.image} alt="" fill sizes="80px" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transform-none" style={{objectPosition:item.imagePosition}} /></span><h3 className={`min-w-0 flex-1 text-lg font-semibold leading-snug [overflow-wrap:anywhere] sm:text-xl ${current?"text-[#0068a5]":"text-[#0a2038]"}`}>{item.title}</h3>{current?<span className="size-2 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" />:<ArrowUpRight size={20} className="shrink-0 text-[#0068a5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" />}</Link>;
            })}
          </nav>

          <div className="mt-12 flex flex-col justify-between gap-7 rounded-3xl border border-[#cbe3e7] bg-[#eaf5f6] p-6 md:flex-row md:items-center md:p-9 xl:mt-16 xl:p-10"><div className="min-w-0 max-w-210"><h3 className="text-2xl font-semibold tracking-tight text-[#0a2038] sm:text-3xl">{content.cta.title}</h3><p className="mt-3 text-lg font-medium leading-relaxed text-black">{content.cta.description}</p></div><div className="max-w-full shrink-0 [&>a]:max-w-full [&>a]:text-center"><AnimatedPillLink href={content.cta.href} label={content.cta.label} variant="dark" size="large" /></div></div>
          <Link href="/#therapeutic-areas" className="mt-7 inline-flex min-h-12 items-center gap-3 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-5 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">{therapeuticPageCopy.backLabel}<ArrowRight size={19} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}
