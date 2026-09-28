"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-linear-to-tr from-[#004a98] via-[#005ea6] to-[#0068a5] text-white shadow-lg hover:shadow-2xl shadow-[#004a98]/30 flex items-center justify-center transition-all duration-400 ease-out border border-white/30 cursor-pointer group/stt ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-75 pointer-events-none"
      } hover:scale-110 active:scale-95`}
    >
      <ChevronUp className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.5] transition-transform duration-300 group-hover/stt:-translate-y-0.5" />
    </button>
  );
}
