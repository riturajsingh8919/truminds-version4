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
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
      }}
      className={`group fixed right-5 bottom-5 z-70 inline-flex size-12 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#b9e5e8]/70 bg-[#0068a5] text-sm font-semibold text-white shadow-[0_12px_32px_rgba(0,65,102,.26)] transition-[opacity,transform,visibility,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-[#005283] hover:shadow-[0_17px_36px_rgba(0,65,102,.32)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] sm:right-8 sm:bottom-8 sm:h-13 sm:w-auto sm:px-5 motion-reduce:transition-none ${visible ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-3 opacity-0"}`}
    >
      <ArrowUp size={19} strokeWidth={2} className="transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transition-none" aria-hidden="true" />
      <span className="hidden sm:inline">Back to top</span>
    </button>
  );
}
