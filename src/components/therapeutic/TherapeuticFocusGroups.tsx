import { TherapeuticIcon } from "@/components/therapeutic/TherapeuticIcon";
import type { TherapeuticFocusGroup } from "@/lib/therapeutic-pages";

export function TherapeuticFocusGroups({ groups, prefix, singular, plural }: { groups: TherapeuticFocusGroup[]; prefix: string; singular: string; plural: string }) {
  return <div className={`mt-9 grid items-start gap-5 md:grid-cols-2 ${groups.length >= 3 ? "xl:grid-cols-3" : ""} xl:gap-6`}>
    {groups.map(group => <article key={group.id} aria-labelledby={`${prefix}-${group.id}`} className="min-w-0 overflow-hidden rounded-2xl border border-[#cfe3e8] bg-white"><div className="flex items-start gap-4 border-b border-[#dce9ed] bg-[#fbfdfd] p-5 sm:p-6"><span className="grid size-11 shrink-0 place-items-center rounded-xl border border-[#cde4e9] bg-[#edf7f8] text-[#008995]"><TherapeuticIcon name={group.icon} size={24} /></span><div className="min-w-0"><h3 id={`${prefix}-${group.id}`} className="text-2xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere]">{group.title}</h3><span className="mt-2 block text-lg font-medium text-[#557889]">{group.items.length} {group.items.length === 1 ? singular : plural}</span></div></div><ul className="px-5 py-2 sm:px-6">{group.items.map(item => <li key={item} className="flex items-start gap-3 border-b border-[#e3edf0] py-3.5 text-lg font-medium leading-relaxed text-black last:border-b-0"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" /><span>{item}</span></li>)}</ul></article>)}
  </div>;
}
