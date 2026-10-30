import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GivingBackIcon } from "@/components/giving-back/GivingBackIcon";
import { givingBackAreas, givingBackCopy } from "@/lib/giving-back";

export function GivingBackAreaCards({ currentSlug }: { currentSlug?: string }) {
  const areas = givingBackAreas.filter(area => area.slug !== currentSlug);
  return (
    <nav aria-label={givingBackCopy.overviewNavigationLabel} className={`grid gap-4 md:grid-cols-2 ${currentSlug ? "xl:grid-cols-3" : ""} xl:gap-5`}>
      {areas.map(area => (
        <Link key={area.slug} id={currentSlug ? undefined : area.slug} href={`/giving-back/${area.slug}`} className="group relative flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-[#d0e4e9] bg-white p-6 transition-[background-color,border-color] duration-300 hover:border-[#80bdc9] hover:bg-[#fbfefe] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none sm:p-8">
          <div className="flex items-center justify-between gap-5"><span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-[#d0e6eb] bg-[#edf7f8] text-[#008995] transition-colors duration-300 group-hover:border-[#0a3a50] group-hover:bg-[#0a3a50] group-hover:text-[#77dbd7] group-focus-visible:border-[#0a3a50] group-focus-visible:bg-[#0a3a50] group-focus-visible:text-[#77dbd7] motion-reduce:transition-none"><GivingBackIcon name={area.icon} size={29} /></span><ArrowUpRight size={24} className="shrink-0 text-[#0068a5] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-focus-visible:translate-x-1 group-focus-visible:-translate-y-1 motion-reduce:transform-none" aria-hidden="true" /></div>
          <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere] sm:text-3xl">{area.title}</h3>
          <p className="mt-4 mb-7 max-w-140 text-lg font-medium leading-[1.8] text-black">{area.description}</p>
          <span className="mt-auto flex min-h-12 items-center gap-3 border-t border-[#d8e8ec] pt-5 text-lg font-medium text-[#0068a5]"><span className="size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" />{givingBackCopy.pathwaysLink}</span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[#00aaa9] transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none" aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
}
