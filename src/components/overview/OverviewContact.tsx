import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import copy from "@/data/overview-pages.json";

export function OverviewContact() {
  return <div className="copy-on-light mt-12 flex flex-col justify-between gap-7 rounded-3xl border border-[#cce3e8] bg-[#eaf5f6] p-6 md:flex-row md:items-center md:p-9 xl:mt-16"><div className="min-w-0 max-w-200"><h3 className="text-2xl font-semibold leading-snug tracking-tight text-[#0a2038] sm:text-3xl">{copy.ui.ctaTitle}</h3><p className="mt-3 text-lg font-medium leading-[1.8] text-black">{copy.ui.ctaDescription}</p></div><div className="max-w-full shrink-0 [&>a]:max-w-full [&>a]:text-center"><AnimatedPillLink href="#contact" label={copy.ui.ctaLabel} size="large" /></div></div>;
}
