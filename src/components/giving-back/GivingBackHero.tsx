import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ChevronRight } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { GivingBackIcon } from "@/components/giving-back/GivingBackIcon";
import { givingBackCopy } from "@/lib/giving-back";
import { shell } from "@/lib/site-styles";

type GivingBackHeroProps = {
  title: string;
  highlight?: string;
  headline?: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  icon?: string;
  inner?: boolean;
};

export function GivingBackHero({ title, highlight, headline, description, image, imageAlt, imageWidth, imageHeight, icon = "purpose", inner = false }: GivingBackHeroProps) {
  return (
    <section aria-labelledby="giving-page-title" className="relative isolate overflow-hidden bg-[#08253d] text-white">
      <div className={shell}>
        <nav aria-label="Breadcrumb" className="py-6 sm:py-8">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-[#c6dfe7]">
            <li><Link href="/" className="transition-colors hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">{givingBackCopy.homeLabel}</Link></li>
            <li className="flex items-center gap-3"><ChevronRight size={17} className="shrink-0" aria-hidden="true" />{inner ? <Link href="/giving-back" className="transition-colors hover:text-[#77dbd7] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">{givingBackCopy.givingBackLabel}</Link> : <span aria-current="page" className="text-white">{givingBackCopy.givingBackLabel}</span>}</li>
            {inner && <li className="flex min-w-0 items-center gap-3"><ChevronRight size={17} className="shrink-0" aria-hidden="true" /><span aria-current="page" className="text-white">{title}</span></li>}
          </ol>
        </nav>

        <div className="grid items-center gap-10 pt-4 pb-12 md:gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:gap-16 lg:pb-16 xl:gap-24 xl:pb-20">
          <div className="min-w-0">
            <span className="mb-6 flex items-center gap-3 text-lg font-medium text-[#77dbd7]"><span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/5"><GivingBackIcon name={icon} size={26} /></span>{givingBackCopy.givingBackLabel}</span>
            <h1 id="giving-page-title" className={`text-4xl font-semibold leading-[1.08] tracking-[-.028em] text-white [overflow-wrap:anywhere] sm:text-5xl md:text-6xl ${inner ? "xl:text-6xl" : "xl:text-7xl"}`}>{title}{highlight && <> <span className="text-[#77dbd7]">{highlight}</span></>}</h1>
            {headline && <span className="mt-6 block text-2xl font-semibold leading-snug tracking-tight text-[#77dbd7] sm:text-3xl">{headline}</span>}
            <p className="mt-6 max-w-155 text-lg font-medium leading-[1.8] text-[#e0edf1]">{description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-10">
              <AnimatedPillLink href={inner ? "#giving-focus" : "#giving-pathways"} label={inner ? givingBackCopy.initiativesAction : givingBackCopy.pathwaysAction} variant="light" size="large" />
              <Link href={inner ? "#giving-overview" : "#giving-purpose"} className="group inline-flex min-h-14 items-center gap-3 text-lg font-medium text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7]">{givingBackCopy.overviewAction}<ArrowDownRight size={22} className="shrink-0 text-[#77dbd7] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-120 lg:max-w-110">
            <div className="pointer-events-none absolute -top-2 -right-2 h-1/2 w-1/2 rounded-tr-[40px] border-t border-r border-[#77dbd7]/50 sm:-top-3 sm:-right-3" aria-hidden="true" />
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-[#e5eff0]">
              <Image src={image} alt={imageAlt} width={imageWidth} height={imageHeight} preload sizes="(max-width: 519px) calc(100vw - 40px), (max-width: 1023px) 480px, 440px" className="h-auto max-h-120 w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
