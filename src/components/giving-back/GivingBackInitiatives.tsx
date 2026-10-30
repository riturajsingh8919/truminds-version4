import { Minus, Plus } from "lucide-react";
import { GivingBackIcon } from "@/components/giving-back/GivingBackIcon";
import type { GivingInitiative } from "@/lib/giving-back";

export function GivingBackInitiatives({ initiatives, prefix }: { initiatives: GivingInitiative[]; prefix: string }) {
  return (
    <div className="space-y-3" data-giving-initiatives>
      {initiatives.map((initiative, index) => (
        <details key={initiative.id} id={`${prefix}-${initiative.id}`} name={`${prefix}-explorer`} open={index === 0} className="group scroll-mt-28 overflow-hidden rounded-2xl border border-[#d0e4e9] bg-white transition-[border-color,background-color] duration-300 open:border-[#8cc7d1] hover:border-[#8cc7d1] motion-reduce:transition-none">
          <summary aria-controls={`${prefix}-${initiative.id}-content`} className="flex min-h-22 cursor-pointer list-none items-center gap-3 p-5 text-[#0a2038] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#0068a5] sm:gap-4 sm:p-6 [&::-webkit-details-marker]:hidden">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#cde4e9] bg-[#edf7f8] text-[#008995] transition-colors duration-300 group-open:border-[#0a3a50] group-open:bg-[#0a3a50] group-open:text-[#77dbd7] motion-reduce:transition-none"><GivingBackIcon name={initiative.icon} size={24} /></span>
            <h3 className="min-w-0 flex-1 text-xl font-semibold leading-snug tracking-tight [overflow-wrap:anywhere] sm:text-2xl">{initiative.title}</h3>
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#cfe3e8] text-[#008995]"><Plus size={20} className="group-open:hidden" aria-hidden="true" /><Minus size={20} className="hidden group-open:block" aria-hidden="true" /></span>
          </summary>
          <div id={`${prefix}-${initiative.id}-content`} className="border-t border-[#dce9ed] px-5 pt-6 pb-7 sm:px-6">
            {initiative.kicker && <p className="mb-4 text-lg font-medium leading-[1.8] text-black">{initiative.kicker}</p>}
            {initiative.paragraphs.map(paragraph => <p key={paragraph} className="text-lg font-medium leading-[1.8] text-black">{paragraph}</p>)}
            <h4 className="mt-6 text-lg font-medium text-[#173f55]">{initiative.scopeLabel}</h4>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {initiative.items.map(item => <li key={item} className="flex items-start gap-3 text-lg font-medium leading-relaxed text-black"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
            <p className="mt-6 border-t border-[#dce9ed] pt-5 text-lg font-medium leading-[1.8] text-black">{initiative.closing}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
