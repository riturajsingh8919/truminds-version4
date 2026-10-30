"use client";

import { useId, useState } from "react";
import { Check, ChevronDown, Search, X } from "lucide-react";
import { TherapeuticIcon } from "@/components/therapeutic/TherapeuticIcon";
import type { TherapeuticFocusGroup } from "@/lib/therapeutic-pages";

type FocusCopy = {
  focusSearchLabel:string;
  focusSearchPlaceholder:string;
  allGroupsLabel:string;
  groupNavigationLabel:string;
  clearSearchLabel:string;
  resetLabel:string;
  resultPrefix:string;
  resultOf:string;
  resultSuffix:string;
  resultSingular:string;
  emptyTitle:string;
  emptyDescription:string;
};

function normalize(value:string) {
  return value.toLocaleLowerCase().replace(/[’']/g, "").trim();
}

export function TherapeuticFocusExplorer({groups,copy}:{groups:TherapeuticFocusGroup[];copy:FocusCopy}) {
  const [query,setQuery] = useState("");
  const [selected,setSelected] = useState("all");
  const prefix = useId();
  const total = groups.reduce((count,group)=>count+group.items.length,0);
  const search = normalize(query);
  const visibleGroups = groups
    .filter(group=>selected==="all" || group.id===selected)
    .map(group=>({...group,items:group.items.filter(item=>normalize(item).includes(search))}))
    .filter(group=>group.items.length>0);
  const resultCount = visibleGroups.reduce((count,group)=>count+group.items.length,0);
  const filters = [
    {id:"all",title:copy.allGroupsLabel,icon:"network",count:total},
    ...groups.map(group=>({id:group.id,title:group.title,icon:group.icon,count:group.items.length})),
  ];

  function reset() {
    setQuery("");
    setSelected("all");
  }

  return (
    <div className="mt-10 xl:mt-14">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <div className="w-full lg:max-w-150">
          <label htmlFor={`${prefix}-search`} className="mb-3 block text-lg font-medium text-[#173f55]">{copy.focusSearchLabel}</label>
          <div className="relative">
            <Search size={22} className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#008995]" aria-hidden="true" />
            <input
              id={`${prefix}-search`}
              type="search"
              autoComplete="off"
              value={query}
              onChange={event=>setQuery(event.target.value)}
              placeholder={copy.focusSearchPlaceholder}
              aria-controls={`${prefix}-results`}
              className="min-h-15 w-full min-w-0 rounded-2xl border border-[#bdd7df] bg-white py-4 pr-14 pl-12 text-lg font-medium text-black placeholder:text-[#5c7988] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5] [&::-webkit-search-cancel-button]:appearance-none"
            />
            {query && <button type="button" onClick={()=>setQuery("")} aria-label={copy.clearSearchLabel} className="absolute top-1/2 right-2 grid size-11 -translate-y-1/2 cursor-pointer place-items-center rounded-xl text-[#40697e] transition-colors hover:bg-[#edf6f8] hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-[#0068a5]"><X size={21} aria-hidden="true" /></button>}
          </div>
        </div>
        <p role="status" aria-live="polite" aria-atomic="true" className="text-lg font-medium leading-relaxed text-[#365a70] lg:pb-4">{copy.resultPrefix} <span className="font-semibold text-[#0068a5]">{resultCount}</span> {copy.resultOf} {total} {copy.resultSuffix}</p>
      </div>

      <div className="mt-6 border-b border-[#cfe2e7] pb-7">
        <div className="lg:hidden">
          <label htmlFor={`${prefix}-category`} className="mb-3 block text-lg font-medium text-[#173f55]">{copy.groupNavigationLabel}</label>
          <div className="relative">
            <select id={`${prefix}-category`} value={selected} onChange={event=>setSelected(event.target.value)} aria-controls={`${prefix}-results`} className="min-h-15 w-full cursor-pointer appearance-none rounded-2xl border border-[#bdd7df] bg-white py-4 pr-12 pl-5 text-lg font-medium text-[#173f55] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5]">
              {filters.map(group=><option value={group.id} key={group.id}>{group.title}</option>)}
            </select>
            <ChevronDown size={22} className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#008995]" aria-hidden="true" />
          </div>
        </div>
        <div role="group" aria-label={copy.groupNavigationLabel} className={`hidden gap-3 lg:grid ${filters.length===3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
          {filters.map(group=>{
            const active=selected===group.id;
            return (
              <button
                key={group.id}
                type="button"
                aria-label={group.title}
                aria-describedby={`${prefix}-count-${group.id}`}
                aria-controls={`${prefix}-results`}
                aria-pressed={active}
                onClick={()=>setSelected(group.id)}
                className={`group relative flex min-h-26 min-w-0 cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border p-4 text-left text-lg font-medium transition-[background-color,border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5] motion-reduce:transition-none xl:gap-4 xl:p-5 ${active ? "border-[#80bdcc] bg-[#e7f3f7] shadow-[0_6px_18px_rgba(5,71,96,.05)]" : "border-[#cfe3e8] bg-white hover:border-[#8cc7d1] hover:bg-[#fbfdfd]"}`}
              >
                <span className={`relative grid size-11 shrink-0 place-items-center rounded-xl border transition-[background-color,border-color,color] duration-300 motion-reduce:transition-none ${active ? "border-[#082b43] bg-[#082b43] text-[#77dbd7]" : "border-[#d5e8ec] bg-[#f0f8f9] text-[#008995] group-hover:border-[#abd5de]"}`}>
                  <TherapeuticIcon name={group.icon} size={24} />
                  {active && <span className="absolute -right-1 -bottom-1 grid size-5 place-items-center rounded-full border-2 border-[#e7f3f7] bg-[#008995] text-white"><Check size={12} strokeWidth={2.5} aria-hidden="true" /></span>}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-lg font-medium leading-snug [overflow-wrap:anywhere] ${active ? "text-[#075d89]" : "text-[#173f55]"}`}>{group.title}</span>
                  <span id={`${prefix}-count-${group.id}`} className="mt-1.5 block text-lg font-medium leading-snug text-[#557889]">{group.count} {group.count===1 ? copy.resultSingular : copy.resultSuffix}</span>
                </span>
                <span className={`pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left transition-transform duration-300 motion-reduce:transition-none ${active ? "scale-x-100 bg-[#00aaa9]" : "scale-x-0 bg-[#8cc7d1] group-hover:scale-x-100"}`} aria-hidden="true" />
              </button>
            );
          })}
        </div>
      </div>

      <div id={`${prefix}-results`} className="mt-7">
        {visibleGroups.length>0 ? (
          <div className={`grid items-start gap-5 ${visibleGroups.length===1 ? "mx-auto max-w-240" : "md:grid-cols-2"} ${visibleGroups.length>=3 ? "xl:grid-cols-3" : ""} xl:gap-6`}>
            {visibleGroups.map(group=>(
              <article key={group.id} aria-labelledby={`${prefix}-${group.id}-title`} className="overflow-hidden rounded-3xl border border-[#cfe3e8] bg-white">
                <div className="flex flex-col items-start gap-4 border-b border-[#dce9ed] bg-[#fbfdfd] p-6 sm:flex-row sm:p-7">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-[#cde4e9] bg-[#edf7f8] text-[#008995]"><TherapeuticIcon name={group.icon} size={25} /></span>
                  <div className="min-w-0 flex-1"><h3 id={`${prefix}-${group.id}-title`} className="text-2xl font-semibold leading-tight tracking-tight text-[#0a2038] [overflow-wrap:anywhere]">{group.title}</h3><span className="mt-2 block text-lg font-medium text-[#557889]">{group.items.length} {group.items.length===1 ? copy.resultSingular : copy.resultSuffix}</span></div>
                </div>
                <ul className={`px-6 py-2 sm:px-7 ${visibleGroups.length===1 ? "sm:grid sm:grid-cols-2 sm:gap-x-8" : ""}`}>
                  {group.items.map(item=><li key={item} className="flex items-start gap-3 border-b border-[#e3edf0] py-4 text-lg font-medium leading-relaxed text-black last:border-b-0"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" /><span>{item}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-[#cfe3e8] bg-white px-6 py-10 text-center sm:px-10">
            <Search size={32} className="mx-auto mb-5 text-[#008995]" aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-[#0a2038]">{copy.emptyTitle}</h3>
            <p className="mx-auto mt-3 max-w-150 text-lg font-medium leading-relaxed text-black">{copy.emptyDescription}</p>
            <button type="button" onClick={reset} className="mt-6 min-h-14 cursor-pointer rounded-full border border-[#0068a5] bg-[#0068a5] px-7 py-3 text-lg font-medium text-white transition-colors hover:bg-[#005480] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]">{copy.resetLabel}</button>
          </div>
        )}
      </div>
    </div>
  );
}
