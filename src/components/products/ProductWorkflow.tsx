"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ServiceIcon } from "@/components/services/ServiceIcon";
import type { ProductWorkflowStage } from "@/lib/truform-products";

export function ProductWorkflow({
  steps,
  navigationLabel,
  inputLabel,
  outputLabel,
}: {
  steps: ProductWorkflowStage[];
  navigationLabel: string;
  inputLabel: string;
  outputLabel: string;
}) {
  const [selected, setSelected] = useState(0);
  const prefix = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % steps.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + steps.length) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    refs.current[next]?.focus();
  }

  return (
    <div className="mt-10 min-w-0 xl:mt-14">
      <div className="overflow-x-auto pb-3">
        <div role="tablist" aria-label={navigationLabel} aria-orientation="horizontal" className="flex min-w-full gap-3">
          {steps.map((step, index) => (
            <button
              key={step.id}
              type="button"
              role="tab"
              ref={(element) => { refs.current[index] = element; }}
              id={`${prefix}-tab-${step.id}`}
              aria-controls={`${prefix}-panel-${step.id}`}
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={`group flex min-h-20 min-w-60 flex-1 cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 text-left text-lg font-medium leading-snug transition-[border-color,background-color,color] duration-250 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#77dbd7] motion-reduce:transition-none sm:px-6 ${selected === index ? "border-[#77dbd7] bg-[#77dbd7] text-[#08253d]" : "border-white/20 bg-white/5 text-white hover:border-[#77dbd7]/70 hover:bg-white/10"}`}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-full border text-lg font-medium ${selected === index ? "border-[#08253d]/20" : "border-white/25 text-[#77dbd7]"}`}>{String(index + 1).padStart(2, "0")}</span>
              <span className="flex-1">{step.title}</span>
              <ArrowRight size={20} className="shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      {steps.map((step, index) => (
        <div
          key={step.id}
          role="tabpanel"
          hidden={selected !== index}
          id={`${prefix}-panel-${step.id}`}
          aria-labelledby={`${prefix}-tab-${step.id}`}
          tabIndex={0}
          className="mt-3 rounded-3xl border border-white/20 bg-white/4 p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#77dbd7] sm:p-8 xl:p-10"
        >
          <p className="mb-7 max-w-225 text-lg font-medium leading-[1.75] text-[#deedf1]">{step.description}</p>
          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(140px,.46fr)_minmax(0,1fr)] xl:gap-10">
            <div className="h-full rounded-2xl bg-white p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#0a2038]">{inputLabel}</h3>
              <ul className="mt-4 space-y-4">
                {step.inputs.map((item) => <li key={item} className="flex items-start gap-3 text-lg font-medium leading-relaxed text-black"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#00aaa9]" aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 py-2 text-center md:py-5">
              <div className="relative grid size-20 place-items-center rounded-full border border-[#77dbd7]/60 bg-[#77dbd7]/10 text-[#77dbd7]">
                <ServiceIcon name={step.icon} size={34} />
                <span className="pointer-events-none absolute -inset-2 rounded-full border border-white/10" aria-hidden="true" />
              </div>
              <span className="block text-lg font-medium leading-snug text-white">{step.action}</span>
              <ArrowRight size={22} className="rotate-90 text-[#77dbd7] md:rotate-0" aria-hidden="true" />
            </div>
            <div className="h-full rounded-2xl border border-[#77dbd7]/30 bg-[#eaf7f6] p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-[#0a2038]">{outputLabel}</h3>
              <ul className="mt-4 space-y-4">
                {step.outputs.map((item) => <li key={item} className="flex items-start gap-3 text-lg font-medium leading-relaxed text-black"><Check size={19} className="mt-1.5 shrink-0 text-[#008995]" aria-hidden="true" /><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
