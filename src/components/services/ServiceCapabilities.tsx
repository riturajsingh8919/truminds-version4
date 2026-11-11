"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import type { ServiceCapability } from "@/lib/services";
import fspNavigation from "@/data/fsp-navigation.json";
import { useUrlFragment } from "@/lib/use-url-fragment";

export function ServiceCapabilities({
  capabilities,
  selectLabel,
  navigationLabel,
}: {
  capabilities: ServiceCapability[];
  selectLabel: string;
  navigationLabel: string;
}) {
  const [localIndex, setLocalIndex] = useState(0);
  const fragment = useUrlFragment();
  const requestedFsp = fspNavigation.find(item => fragment === `#fsp-${item.slug}`);
  const requestedId = requestedFsp?.capabilityId ?? (fragment.startsWith("#capability-") ? fragment.slice(12) : "");
  const hashIndex = capabilities.findIndex(item => item.id === requestedId);
  const activeIndex = hashIndex >= 0 ? hashIndex : localIndex;
  const panelRef = useRef<HTMLDivElement>(null);

  function setActiveIndex(index: number) {
    setLocalIndex(index);
    const url = new URL(window.location.href);
    url.hash = `capability-${capabilities[index].id}`;
    window.history.replaceState(window.history.state, "", url);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }

  useEffect(() => {
    if (hashIndex < 0) return;
    const frame = requestAnimationFrame(() => panelRef.current?.scrollIntoView({ block: "start", behavior: "instant" }));
    return () => cancelAnimationFrame(frame);
  }, [fragment, hashIndex]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const prefix = useId();
  const active = capabilities[activeIndex];

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % capabilities.length;
    else if (event.key === "ArrowUp") next = (index - 1 + capabilities.length) % capabilities.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = capabilities.length - 1;
    else return;
    event.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  if (!active) return null;

  return (
    <div className="mt-10 grid items-start gap-5 lg:grid-cols-[minmax(260px,.36fr)_minmax(0,1fr)] lg:gap-7 xl:mt-14 xl:grid-cols-[minmax(300px,.34fr)_minmax(0,1fr)]">
      <div className="lg:sticky lg:top-28">
        <label className="block text-lg font-medium text-[#0a2038] lg:hidden" htmlFor={`${prefix}-select`}>
          {selectLabel}
        </label>
        <div className="relative mt-3 lg:hidden">
          <select
            id={`${prefix}-select`}
            value={activeIndex}
            onChange={(event) => setActiveIndex(Number(event.target.value))}
            className="min-h-16 w-full cursor-pointer appearance-none rounded-2xl border border-[#b8d3dc] bg-white py-4 pr-12 pl-5 text-lg font-medium text-[#0a2038] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]"
          >
            {capabilities.map((item, index) => <option value={index} key={item.id}>{item.title}</option>)}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-[#0068a5]" size={22} aria-hidden="true" />
        </div>
        <div className="hidden space-y-2 lg:block" role="tablist" aria-label={navigationLabel} aria-orientation="vertical">
          {capabilities.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              role="tab"
              id={`${prefix}-tab-${item.id}`}
              aria-selected={activeIndex === index}
              aria-controls={`capability-${item.id}`}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => navigateTabs(event, index)}
              className={`group flex min-h-17 w-full cursor-pointer items-center gap-3 rounded-2xl border p-4 text-left text-lg font-medium leading-snug transition-[color,background-color,border-color] duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5] motion-reduce:transition-none ${activeIndex === index ? "border-[#082b43] bg-[#082b43] text-white" : "border-transparent bg-white/65 text-[#294c60] hover:border-[#bedce2] hover:bg-white hover:text-[#0068a5]"}`}
            >
              <ServiceIcon name={item.icon} size={22} className={`shrink-0 ${activeIndex === index ? "text-[#77dbd7]" : "text-[#008995]"}`} />
              <span className="flex-1">{item.title}</span>
              <ArrowRight size={19} className={`shrink-0 transition-transform duration-250 group-hover:translate-x-1 motion-reduce:transform-none ${activeIndex === index ? "text-[#77dbd7]" : "text-[#7199a8]"}`} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div
        ref={panelRef}
        role="tabpanel"
        id={`capability-${active.id}`}
        aria-labelledby={`${prefix}-tab-${active.id}`}
        tabIndex={0}
        className="min-w-0 scroll-mt-0 overflow-hidden rounded-3xl border border-[#d3e4e9] bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] md:scroll-mt-3 lg:scroll-mt-0"
      >
        {requestedFsp && requestedFsp.capabilityId === active.id && <span id={`fsp-${requestedFsp.slug}`} className="block scroll-mt-0 md:scroll-mt-3 lg:scroll-mt-0" aria-hidden="true" />}
        <div className="grid bg-[#082b43] sm:grid-cols-[minmax(0,.38fr)_minmax(0,.62fr)]">
          <div className="relative min-h-52 sm:min-h-64">
            <Image
              key={active.image}
              src={active.image}
              alt={active.imageAlt}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 38vw, 350px"
              className="object-cover"
              style={{ objectPosition: active.imagePosition }}
            />
          </div>
          <div className="p-6 sm:p-7 xl:p-9">
            <ServiceIcon name={active.icon} size={30} className="mb-5 text-[#77dbd7]" />
            {requestedFsp && requestedFsp.capabilityId === active.id && requestedFsp.label !== active.title && <span className="mb-3 block text-lg font-medium text-[#a4e7e4]">{requestedFsp.label}</span>}
            <h3 id={`${prefix}-heading-${active.id}`} className="text-2xl leading-tight font-semibold tracking-tight [overflow-wrap:anywhere] text-white xl:text-3xl">
              {active.title}
            </h3>
            <p className="mt-4 text-lg font-medium leading-relaxed text-[#d4e9ed]">{active.summary}</p>
          </div>
        </div>
        <div className="p-6 sm:p-8 xl:p-10">
          <div className="space-y-5">
            {active.paragraphs.map((paragraph) => <p className="text-lg font-medium leading-[1.75] text-black" key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 border-t border-[#dce8eb] pt-7">
            <h4 className="text-xl font-semibold text-[#0a2038]">{active.scopeTitle}</h4>
            <ul className="mt-4 grid gap-x-7 sm:grid-cols-2">
              {active.items.map((item) => (
                <li className="flex items-start gap-3 border-b border-[#e6eef0] py-3 text-lg font-medium leading-relaxed text-black" key={item}>
                  <Check size={19} strokeWidth={2} className="mt-1.5 shrink-0 text-[#008995]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {active.href && (
            <Link href={active.href} className="mt-8 inline-flex min-h-12 items-center gap-4 border-b border-[#0068a5] pb-2 text-lg font-medium text-[#0068a5] transition-[gap,color] hover:gap-6 hover:text-[#004a85] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none">
              {active.linkLabel}
              <ArrowUpRight size={21} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
      {capabilities.filter(capability => capability.id !== active.id).map(capability => <div key={capability.id} id={`capability-${capability.id}`} role="tabpanel" aria-labelledby={`${prefix}-tab-${capability.id}`} hidden />)}
    </div>
  );
}
