"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, X } from "lucide-react";

interface ProductTab {
  id: string;
  tabLabel: string;
  badge: string;
  title: string;
  description: string;
  link: string;
}

const PRODUCT_TABS: ProductTab[] = [
  {
    id: "truform-platform",
    tabLabel: "TruForm™ Platform",
    badge: "Unified eClinical Ecosystem",
    title: "TruForm™ Platform — Unified Clinical Technology Ecosystem",
    description:
      "TruForm™ connects every stage of clinical development from study startup to regulatory submission. Built on modern cloud architecture, it unifies data capture, automated CDISC standards, and trial operations to eliminate data silos and accelerate clinical programs.",
    link: "/products/truform-platform",
  },
  {
    id: "truform-edc",
    tabLabel: "TruForm™ EDC",
    badge: "Core Data & Standards",
    title: "TruForm™ EDC — Next-Generation Electronic Data Capture",
    description:
      "TruForm™ EDC transforms clinical trial data collection and monitoring with intelligent real-time edit checks, automated source data verification (SDV), and seamless interoperability across CTMS, RTSM, and central labs, cutting database lock cycles by up to 50%.",
    link: "/products/truform-edc",
  },
  {
    id: "truform-sdtm-adam",
    tabLabel: "TruForm™ SDTM & ADaM",
    badge: "Core Data & Standards",
    title: "TruForm™ SDTM & ADaM — AI-Powered CDISC Automation",
    description:
      "Our proprietary eClinical engine automates the conversion of raw clinical data into CDISC-compliant SDTM datasets, converts SDTM to analysis-ready ADaM, and produces publication-quality TLFs, cutting clinical programming timelines by 70% with full traceability.",
    link: "/products/truform-sdtm-adam",
  },
  {
    id: "truform-docuvault",
    tabLabel: "TruForm™ DocuVault",
    badge: "Trial Operations & eSource",
    title: "TruForm™ DocuVault — Intelligent eTMF & Trial Operations",
    description:
      "A centralized Electronic Trial Master File (eTMF) and clinical document management platform that ensures inspection readiness at all times. Designed for global sponsor and CRO collaboration, DocuVault streamlines document tracking, digital eConsent, and RBQM.",
    link: "/products/truform-docuvault",
  },
  {
    id: "truform-ctms-rtsm",
    tabLabel: "TruForm™ CTMS & RTSM",
    badge: "Patient & Site Logistics",
    title: "TruForm™ CTMS & RTSM — Trial Command & Supply Logistics",
    description:
      "An integrated operational command center delivering full study oversight and intelligent patient randomization. Automates subject enrollment, site feasibility tracking, and adaptive investigational product inventory forecasting to eliminate stockouts and reduce waste.",
    link: "/products/truform-ctms-rtsm",
  },
];

export function ProductsSection() {
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [pinnedTab, setPinnedTab] = useState<number | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tabScrollRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Monitor scroll overflow on mobile for edge gradient indicators
  const checkScrollState = () => {
    if (!tabScrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = tabScrollRef.current;
    setCanScrollLeft(scrollLeft > 8);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 8);
  };

  useEffect(() => {
    const el = tabScrollRef.current;
    if (!el) return;
    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);
    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const activeIndex = hoveredTab !== null ? hoveredTab : pinnedTab;

  const handleTabMouseEnter = (idx: number) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setHoveredTab(idx);
  };

  const handleTabMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    // 250ms grace window so cursor can smoothly transition from tab onto the card
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 250);
  };

  const handleDrawerMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDrawerMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredTab(null);
    }, 250);
  };

  const handleTabClick = (idx: number) => {
    setPinnedTab((prev) => (prev === idx ? null : idx));
    setHoveredTab(idx);

    // Smooth scroll the clicked tab into view on mobile
    const btn = tabButtonRefs.current[idx];
    if (btn && tabScrollRef.current) {
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  return (
    <section id="products" className="relative w-full bg-white text-slate-900">
      {/* =========================================================================
          TOP BANNER: 3D Video Background + Interactive Sliding Cards & Tabs
          ========================================================================= */}
      <div className="relative min-h-120 sm:min-h-135 lg:min-h-140 w-full flex flex-col justify-start overflow-visible bg-[#060e1f] text-white pt-14 sm:pt-20 pb-20 sm:pb-24">
        {/* Background Ambient Video using /products.mp4 with reduced scrim */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src="/products.mp4" type="video/mp4" />
          </video>

          {/* Reduced Navy/Black Scrim so Video is Vibrant and Clearly Visible */}
          <div className="absolute inset-0 bg-linear-to-b from-[#060e1f]/45 via-[#07152b]/25 to-[#060e1f]/55 pointer-events-none" />

          {/* Soft Radial Center Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-87.5 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Section Headline Over Video */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary-light text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            eClinical Software Suite
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.16]">
            TruForm™ Unified{" "}
            <span className="text-second">eClinical Platform</span>
          </h2>

          <p className="mt-3.5 text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-xs">
            AI-powered clinical software connecting data capture, automated
            CDISC standards, and trial operations into a unified cloud
            ecosystem.
          </p>
        </div>

        {/* =======================================================================
            TAB BAR CONTAINER:
            - Positioned strictly at bottom-0 translate-y-1/2
            - Sits EXACTLY 50% on video and 50% on bottom section
            - The hover card floats ABOVE the tab bar with NO dead zone
            - 250ms grace period allows smooth cursor movement to "Read More"
            ======================================================================= */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-30 w-full">
          <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative">
            {/* HOVER / TAP SLIDE DRAWER:
                - Positioned directly above the tabs with pb-3 sm:pb-4 padding bridge
                - Keeps mouse event active when transitioning to "Read More" button
                - Mobile friendly with close button and tap dismiss */}
            <div
              onMouseEnter={handleDrawerMouseEnter}
              onMouseLeave={handleDrawerMouseLeave}
              className={`absolute bottom-full left-0 right-0 pb-3 sm:pb-4 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                activeIndex !== null
                  ? "opacity-100 translate-y-0 pointer-events-auto visible"
                  : "opacity-0 translate-y-4 pointer-events-none invisible"
              }`}
            >
              {PRODUCT_TABS.map((product, idx) => {
                const isCurrent = activeIndex === idx;

                return (
                  <div
                    key={product.id}
                    className={`w-full rounded-2xl bg-[#0c1e36]/95 backdrop-blur-xl border border-white/20 p-4 sm:p-6 lg:p-7 text-white shadow-2xl transition-all duration-300 ${
                      isCurrent ? "block" : "hidden"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] uppercase tracking-wider font-bold text-accent bg-accent/15 px-2.5 py-0.5 rounded-full border border-accent/25">
                          {product.badge}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setPinnedTab(null);
                            setHoveredTab(null);
                          }}
                          className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                          aria-label="Close details"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                        {product.title}
                      </h3>

                      <p className="mt-2 text-slate-300 text-[13px] sm:text-[14.5px] leading-relaxed font-normal max-w-4xl">
                        {product.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/15 mt-3 flex items-center justify-between flex-wrap gap-2">
                      <Link
                        href={product.link}
                        className="inline-flex items-center gap-2 font-bold text-second hover:text-white transition-colors text-sm group/btn cursor-pointer py-1"
                      >
                        <span className="underline decoration-second/40 group-hover/btn:decoration-white underline-offset-4">
                          Read More
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200 text-second group-hover/btn:text-white" />
                      </Link>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setPinnedTab(null);
                          setHoveredTab(null);
                        }}
                        className="text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                      >
                        Close preview ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 5-ITEM HORIZONTAL TAB BAR
                - Desktop: 5-column grid sitting exactly 50% on video, 50% on bottom section
                - Mobile: Sleek single-row horizontal swipe bar with edge fades and snap navigation
                - Height remains strictly ~50px across all viewports, preventing any lower content overlap */}
            <div className="relative bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200/90 p-1.5 sm:p-2">
              {/* Left fade hint for mobile swipe */}
              <div
                className={`pointer-events-none absolute left-1.5 top-1.5 bottom-1.5 w-6 bg-linear-to-r from-white via-white/80 to-transparent z-10 rounded-l-xl transition-opacity duration-200 md:hidden ${
                  canScrollLeft ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Right fade hint for mobile swipe */}
              <div
                className={`pointer-events-none absolute right-1.5 top-1.5 bottom-1.5 w-8 bg-linear-to-l from-white via-white/80 to-transparent z-10 rounded-r-xl transition-opacity duration-200 md:hidden ${
                  canScrollRight ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                ref={tabScrollRef}
                className="flex md:grid md:grid-cols-5 items-stretch divide-x divide-slate-100 md:divide-slate-200/80 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
              >
                {PRODUCT_TABS.map((product, idx) => {
                  const isActive = activeIndex === idx;

                  return (
                    <button
                      key={product.id}
                      ref={(el) => {
                        tabButtonRefs.current[idx] = el;
                      }}
                      onMouseEnter={() => handleTabMouseEnter(idx)}
                      onMouseLeave={handleTabMouseLeave}
                      onClick={() => handleTabClick(idx)}
                      className={`shrink-0 md:shrink flex-1 px-4 sm:px-3 lg:px-4 py-3 sm:py-3.5 text-center transition-all duration-300 cursor-pointer rounded-xl flex flex-col items-center justify-center snap-start ${
                        isActive
                          ? "bg-slate-50 text-primary font-bold shadow-xs"
                          : "text-slate-700 hover:text-primary font-semibold hover:bg-slate-50/60"
                      }`}
                    >
                      <span className="text-[11.5px] sm:text-[12px] lg:text-[12.5px] uppercase tracking-wider font-bold leading-tight whitespace-nowrap block">
                        {product.tabLabel}
                      </span>
                      <span
                        className={`h-0.5 w-6 sm:w-8 rounded-full mt-1.5 transition-all duration-300 ${
                          isActive
                            ? "bg-primary scale-100"
                            : "bg-transparent scale-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM SECTION: Clean, balanced executive editorial layout
          - pt-24 sm:pt-28 lg:pt-32 gives plenty of breathing room below the tab overlap
          - Guaranteed ZERO collision with the "UNIFIED CLINICAL ARCHITECTURE" badge
          ========================================================================= */}
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            Unified Clinical Architecture
          </div>

          {/* Main Headline */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
            Next-Gen Clinical Technology Built for{" "}
            <span className="text-primary">Speed, Compliance &amp; Scale</span>
          </h3>

          {/* Narrative Content from TruMinds Documentation */}
          <div className="space-y-4 text-slate-600 text-base sm:text-[17px] leading-relaxed font-normal max-w-3xl mx-auto mb-10">
            <p>
              TruForm™ is TruMinds Clinical&apos;s unified technology ecosystem,
              designed to connect every stage of the clinical development
              lifecycle. From study startup and electronic data capture to
              automated SDTM/ADaM transformation, trial operations, and
              regulatory submission, TruForm provides an integrated software
              platform for modern clinical trials.
            </p>
            <p>
              Built on modern cloud architecture with robust 21 CFR Part 11,
              HIPAA, and ICH E6(R3) compliance, TruForm combines intelligent
              automation, reusable standards, and seamless interoperability. By
              eliminating data silos and reducing manual programming, TruForm
              enables sponsors and CROs to run faster, more cost-effective, and
              audit-ready clinical programs.
            </p>
          </div>

          {/* Key Platform Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 text-left">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">
                  70% Time Reduction
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Automated CDISC conversion and TLF generation cycles
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Audit-Ready Compliance
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Full 21 CFR Part 11, HIPAA &amp; GCP regulatory adherence
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Unified Interoperability
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Real-time data sync across EDC, CTMS &amp; central labs
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/70 shadow-2xs">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">
                  Enterprise Cloud Scale
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Multi-tenant architecture with high ROI vs legacy platforms
                </div>
              </div>
            </div>
          </div>

          {/* Prominent "View All Products" Button */}
          <div>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 cursor-pointer active:scale-95 group"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
