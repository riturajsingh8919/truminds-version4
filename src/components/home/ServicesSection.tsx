"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Custom SVG Icons matching the clean outline/stroke style of the reference
const CroIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 stroke-current transition-colors duration-300"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Clinical trial clipboard & protocol chart */}
    <rect
      x="8"
      y="10"
      width="32"
      height="34"
      rx="4"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    <path
      d="M18 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    {/* Medical cross & pulse line */}
    <path d="M24 18v10M19 23h10" className="stroke-primary" strokeWidth="2" />
    <path
      d="M14 36h6l2.5-4 3 8 2.5-4h6"
      className="stroke-slate-400 group-hover:stroke-accent transition-colors"
    />
  </svg>
);

const AiIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 stroke-current transition-colors duration-300"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Central AI Brain & Microchip node */}
    <rect
      x="14"
      y="14"
      width="20"
      height="20"
      rx="3"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    <circle
      cx="24"
      cy="24"
      r="4"
      className="fill-primary/20 stroke-primary"
      strokeWidth="2"
    />
    {/* Connecting neural bus & circuit paths */}
    <path d="M24 6v8M24 34v8M6 24h8M34 24h8" className="stroke-primary" />
    <circle cx="24" cy="6" r="2" fill="currentColor" className="text-primary" />
    <circle
      cx="24"
      cy="42"
      r="2"
      fill="currentColor"
      className="text-primary"
    />
    <circle cx="6" cy="24" r="2" fill="currentColor" className="text-primary" />
    <circle
      cx="42"
      cy="24"
      r="2"
      fill="currentColor"
      className="text-primary"
    />
    {/* Diagonal neural synapse lines */}
    <path
      d="M10 10l5 5M33 33l5 5M38 10l-5 5M15 33l-5 5"
      className="stroke-slate-400 group-hover:stroke-accent transition-colors"
    />
  </svg>
);

const FspIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 stroke-current transition-colors duration-300"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Multi-tier Functional Hierarchy & Synergy Blocks */}
    <rect
      x="18"
      y="6"
      width="12"
      height="10"
      rx="2"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    <path
      d="M24 16v8M12 24h24M12 24v6M36 24v6"
      className="stroke-slate-400 group-hover:stroke-primary transition-colors"
    />
    <rect
      x="6"
      y="30"
      width="12"
      height="12"
      rx="2"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    <rect
      x="30"
      y="30"
      width="12"
      height="12"
      rx="2"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    {/* Intersecting center core */}
    <circle
      cx="24"
      cy="36"
      r="3"
      className="fill-primary/20 stroke-primary"
      strokeWidth="2"
    />
    <path
      d="M18 36h3M27 36h3"
      className="stroke-primary"
      strokeDasharray="2 2"
    />
  </svg>
);

const StaffingIcon = () => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10 stroke-current transition-colors duration-300"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Clinical Talent & Specialist Network */}
    <circle
      cx="24"
      cy="14"
      r="7"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    <path
      d="M10 38c0-7.18 6.268-13 14-13s14 5.82 14 13"
      className="stroke-slate-700 group-hover:stroke-primary transition-colors"
    />
    {/* Star badge / Certified excellence icon */}
    <path
      d="M38 12l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5 1.5-3z"
      className="fill-amber-400 stroke-amber-500"
      strokeWidth="1"
    />
    <path
      d="M6 38h36"
      className="stroke-slate-400 group-hover:stroke-primary transition-colors"
    />
  </svg>
);

interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  link: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: "cro",
    title: "Contract Research Organization (CRO)",
    badge: "Phase I–IV Clinical Trials",
    description:
      "TruMinds Clinical provides comprehensive, end-to-end clinical research solutions to global pharmaceutical, biotechnology, and medical device innovators. Combining scientific depth, operational agility, and our proprietary TRUFORM automation platform, we accelerate study execution from startup through regulatory submission.",
    bullets: [
      "Full-lifecycle trial management across Phase I–IV clinical programs",
      "Proprietary TRUFORM platform for automated SDTM & ADaM generation",
      "Comprehensive Clinical Operations, Feasibility & Protocol Execution",
      "Rigorous Pharmacovigilance, QA, and global regulatory submissions",
    ],
    link: "/services/cro",
    icon: <CroIcon />,
  },
  {
    id: "ai-solutions",
    title: "TruMinds AI Solutions",
    badge: "Machine Learning & Automation",
    description:
      "TruMinds AI Solutions leverages machine learning in clinical trials to enhance biometrics, clinical data management, and trial operations. We automate raw data ingestion, discrepancy detection, and submission pipelines, eliminating manual bottlenecks and transforming complex data into actionable intelligence.",
    bullets: [
      "AI-driven Clinical Data Management & automated anomaly detection",
      "Automated dataset mapping & instant TLF generation workflows",
      "Machine-learning assisted biostatistics & predictive trial analytics",
      "Accelerated regulatory submission packages with 100% CDISC accuracy",
    ],
    link: "/services/ai-solutions",
    icon: <AiIcon />,
  },
  {
    id: "fsp",
    title: "FSP Services",
    badge: "Flexible & Hybrid Delivery Model",
    description:
      "Our Functional Service Provider (FSP) and hybrid delivery models combine the flexibility and cost efficiency of dedicated functional staffing with the robust infrastructure of a premier CRO. We empower sponsors to rapidly scale biometrics and clinical operations capabilities while retaining full governance.",
    bullets: [
      "Scalable FSP & hybrid models tailored to sponsor infrastructure",
      "Dedicated functional units across Data Management & Biostatistics",
      "Transparent resource scaling with reduced operational overhead",
      "Seamless integration into sponsor SOPs, EDC systems, and governance",
    ],
    link: "/services/fsp-services",
    icon: <FspIcon />,
  },
  {
    id: "staffing",
    title: "Staffing Solutions",
    badge: "Specialized Clinical Talent",
    description:
      "TruMinds delivers specialized clinical research talent and flexible workforce solutions across the United States, Canada, Europe, the UK, and India. From senior biostatisticians and SAS/R statistical programmers to clinical data managers and CRAs, we rapidly place proven specialists who deliver immediate results.",
    bullets: [
      "Rapid deployment of vetted biostatisticians & SAS/R programmers",
      "Global talent network spanning US, UK, Europe, Canada, and India",
      "Flexible staffing models: Contract, Contract-to-Hire, & Permanent",
      "Domain expertise across Oncology, Rare Diseases & Complex Trials",
    ],
    link: "/services/staffing-solutions",
    icon: <StaffingIcon />,
  },
];

export function ServicesSection() {
  const [activeTouchCard, setActiveTouchCard] = useState<string | null>(null);

  const toggleTouchCard = (id: string) => {
    setActiveTouchCard((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="relative bg-[#0B192C] text-white py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* =========================================================================
          AMBIENT BACKGROUND SHAPES & TRUMINDS LOGO BRANDING
          Curved organic arches & flowing ribbons matching reference dark layout
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-linear-to-b from-[#0068a5]/15 to-transparent rounded-full blur-3xl opacity-60" />

        {/* Top-Right Massive Organic TruMinds Curve (Inspired by logo arch) */}
        <svg
          className="absolute -top-24 -right-24 w-150 sm:w-187.5 lg:w-225 h-auto text-[#0F2847]/40 fill-current opacity-70"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 400 50 C 600 50, 750 200, 750 400 C 750 600, 580 750, 420 700 C 260 650, 180 500, 240 380 C 300 260, 200 50, 400 50 Z" />
        </svg>

        {/* Bottom-Left Flowing Organic Wave Ribbon */}
        <svg
          className="absolute -bottom-36 -left-36 w-137.5 sm:w-175 lg:w-212.5 h-auto text-[#061e38]/60 fill-current opacity-60"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 50 400 C 50 200, 220 50, 420 100 C 620 150, 700 320, 640 480 C 580 640, 400 750, 200 700 C 80 660, 50 550, 50 400 Z" />
        </svg>

        {/* Subtle Neural Network Arcs & Connected Nodes in TruMinds Blue */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 100 200 Q 400 100 800 280 T 1500 150"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
          <path
            d="M 200 800 Q 700 650 1200 750"
            fill="none"
            stroke="#0068a5"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <circle cx="400" cy="100" r="4" fill="#0284c7" />
          <circle cx="800" cy="280" r="5" fill="#0068a5" />
          <circle cx="700" cy="650" r="4" fill="#0284c7" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* =========================================================================
            SECTION HEADER (Centered matching reference style)
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary-light text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Comprehensive Clinical Capabilities
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.16]">
            Contract Research Organization{" "}
            <span className="text-[#38bdf8]">Services &amp; Solutions</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Delivering agile, AI-driven, and scalable clinical research
            solutions across Phase I through Phase IV development worldwide.
          </p>
        </div>

        {/* =========================================================================
            SERVICES 2x2 GRID (Strictly 4 Services)
            Snug height, zero wasted bottom space, flawless slide transition
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7 max-w-5xl lg:max-w-6xl mx-auto">
          {SERVICES.map((service) => {
            const isTouchActive = activeTouchCard === service.id;

            return (
              <div
                key={service.id}
                onClick={() => toggleTouchCard(service.id)}
                className={`group relative bg-white text-slate-900 rounded-3xl p-6 sm:p-7 shadow-xl border transition-all duration-350 ease-out flex flex-col h-85 sm:h-86.25 overflow-hidden cursor-pointer select-none ${
                  isTouchActive
                    ? "border-primary/40 shadow-2xl -translate-y-1 bg-linear-to-b from-white to-slate-50/70"
                    : "border-slate-100/90 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 hover:bg-linear-to-b hover:from-white hover:to-slate-50/60"
                }`}
              >
                {/* ---------------------------------------------------------------
                    TOP STATIC HEADER: Icon + Subtitle Badge + Title
                    (Snug and firmly anchored at the top)
                    --------------------------------------------------------------- */}
                <div className="relative z-20 shrink-0">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 text-slate-700 group-hover:text-primary group-hover:border-primary/25 group-hover:bg-primary/5 transition-all duration-300 shadow-2xs">
                      {service.icon}
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 tracking-tight leading-snug group-hover:text-slate-950 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* ---------------------------------------------------------------
                    INTERACTIVE SLIDING BODY CONTAINER:
                    - Fixed snug height (175px) perfectly sized to content
                    - Overflow-hidden creates the authentic vertical slide curtain
                    - Idle description slides UP out of view (-translate-y-full)
                    - Bullets & Read More slide UP into view from bottom (translate-y-full -> 0)
                    - Seamless cubic-bezier transition, ZERO overlap!
                    --------------------------------------------------------------- */}
                <div className="relative flex-1 min-h-0 mt-2.5 overflow-hidden">
                  {/* LAYER 1: IDLE DESCRIPTION
                      Slides UPWARD (-translate-y-full) and vanishes on hover */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-start transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                      isTouchActive
                        ? "-translate-y-full opacity-0 pointer-events-none"
                        : "translate-y-0 opacity-100 pointer-events-auto group-hover:-translate-y-full group-hover:opacity-0 group-hover:pointer-events-none"
                    }`}
                  >
                    <p className="text-slate-600 text-[14px] sm:text-base leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  {/* LAYER 2: HOVER BULLETS & READ MORE LINK
                      Slides UPWARD from bottom (translate-y-full -> translate-y-0) on hover */}
                  <div
                    className={`absolute inset-0 flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
                      isTouchActive
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "translate-y-full opacity-0 pointer-events-none group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto"
                    }`}
                  >
                    {/* Bullets List */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-slate-700 text-[13px] sm:text-[13.5px] leading-snug font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Read More Link */}
                    <div className="pt-2 border-t border-slate-100/90 mt-1">
                      <Link
                        href={service.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-primary transition-colors text-sm group/btn cursor-pointer py-0.5"
                      >
                        <span className="underline decoration-slate-300 group-hover/btn:decoration-primary underline-offset-4">
                          Read More
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200 text-slate-800 group-hover/btn:text-primary" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
