"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 560);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
      }}
      className={`group fixed right-5 bottom-5 z-70 inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-[#b9e5e8]/70 bg-[#0068a5] text-white shadow-[0_12px_32px_rgba(0,65,102,.26)] transition-[opacity,transform,visibility,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-[#005283] hover:shadow-[0_17px_36px_rgba(0,65,102,.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] sm:right-8 sm:bottom-8 sm:size-13 motion-reduce:transition-none ${visible ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-3 opacity-0"}`}
    >
      <ArrowUp size={19} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none" aria-hidden="true" />
      <span className="pointer-events-none absolute right-[calc(100%+12px)] translate-x-1 whitespace-nowrap rounded-lg bg-[#0b2c40] px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-[0_8px_24px_rgba(0,35,55,.18)] transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:transition-none">
        Scroll to top
      </span>
    </button>
  );
}
