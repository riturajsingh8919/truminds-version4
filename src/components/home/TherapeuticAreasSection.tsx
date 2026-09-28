"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface TherapeuticAreaCard {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

// 8 Primary Showcase Cards across the 4 key categories
const SHOWCASE_AREAS: TherapeuticAreaCard[] = [
  {
    id: "oncology-hematology",
    title: "Oncology & Hematology",
    category: "Oncology & Systemic",
    image: "/images/therapeutic/therapeutic-oncology.jpg",
    description:
      "Deep expertise in solid tumors, hematologic malignancies, and cell & gene therapies. We deliver advanced biometrics, CDISC mapping, and submission strategy for complex cancer trials.",
    link: "/therapeutic-areas/oncology-hematology",
  },
  {
    id: "cardiovascular",
    title: "Cardiovascular & Vascular",
    category: "Oncology & Systemic",
    image: "/images/therapeutic/therapeutic-cardio.jpg",
    description:
      "Comprehensive clinical operations, biostatistics, and data management spanning hypertension, heart failure, coronary artery disease, thrombosis, and stroke development programs.",
    link: "/therapeutic-areas/cardiovascular-vascular-diseases",
  },
  {
    id: "neuroscience",
    title: "Neuroscience (CNS)",
    category: "Oncology & Systemic",
    image: "/images/therapeutic/therapeutic-cns.jpg",
    description:
      "Specialized clinical expertise in complex central nervous system trials spanning Alzheimer's, Parkinson's, multiple sclerosis, epilepsy, and neuropathic pain research.",
    link: "/therapeutic-areas/neuroscience",
  },
  {
    id: "immunology",
    title: "Immunology & Inflammation",
    category: "Oncology & Systemic",
    image: "/images/therapeutic/therapeutic-immunology.jpg",
    description:
      "Delivering advanced biometrics and trial execution for autoimmune and inflammatory diseases including rheumatoid arthritis, lupus, psoriasis, and Crohn's disease.",
    link: "/therapeutic-areas/immunology",
  },
  {
    id: "infectious-diseases",
    title: "Infectious Diseases",
    category: "Oncology & Systemic",
    image: "/images/therapeutic/therapeutic-infectious.jpg",
    description:
      "Accelerating antiviral, antibacterial, and global vaccine clinical development with robust statistical programming, surveillance data capture, and expedited regulatory workflows.",
    link: "/therapeutic-areas/infectious-diseases",
  },
  {
    id: "endocrinology",
    title: "Endocrinology & Metabolic",
    category: "Internal Medicine & Metabolic",
    image: "/images/hero/hero-therapeutic.jpg",
    description:
      "Expert clinical data management and biostatistics for diabetes, obesity, metabolic dysfunction-associated steatohepatitis (MASH), and thyroid disorders worldwide.",
    link: "/therapeutic-areas/endocrinology",
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    category: "Specialized & Populations",
    image: "/images/about/about-overview.jpg",
    description:
      "End-to-end trial support for retina, glaucoma, dry eye, and ocular gene therapy trials with specialized visual acuity imaging standards and endpoint adjudication integration.",
    link: "/therapeutic-areas/ophthalmology",
  },
  {
    id: "rare-diseases",
    title: "Rare Diseases",
    category: "Complex & Innovative",
    image: "/images/therapeutic/therapeutic-rare.jpg",
    description:
      "Deep expertise in orphan drug development, small patient populations, natural history studies, adaptive trial designs, and expedited FDA/EMA regulatory pathways.",
    link: "/therapeutic-areas/rare-diseases",
  },
];

export function TherapeuticAreasSection() {
  const [activeTouchCard, setActiveTouchCard] = useState<string | null>(null);

  const toggleTouchCard = (id: string) => {
    setActiveTouchCard((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="therapeutic-areas"
      className="relative bg-[#0B192C] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* =========================================================================
          AMBIENT BACKGROUND SHAPES & TRUMINDS LOGO BRANDING
          Rich, soft organic arches & flowing neural ribbons with subtle elegance
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-radial from-[#0068a5]/20 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute -top-32 -left-32 w-150 h-150 bg-radial from-[#0068a5]/25 via-[#0284c7]/10 to-transparent rounded-full blur-3xl opacity-45" />
        <div className="absolute -bottom-32 -right-32 w-150 h-150 bg-radial from-[#0284c7]/20 via-[#0068a5]/10 to-transparent rounded-full blur-3xl opacity-40" />

        {/* Top-Left Massive Organic TruMinds Curve (Subtle, elegant gradient + gentle border) */}
        <svg
          className="absolute -top-16 -left-16 w-137.5 sm:w-175 lg:w-212.5 h-auto opacity-40"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="theraGradTop"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0068a5" stopOpacity="0.30" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0B192C" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="theraStrokeTop"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0068a5" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M 60 520 C 45 610 65 700 130 750 C 195 800 270 765 340 700 C 420 625 500 580 600 580 C 700 580 780 625 860 700 C 930 765 1005 800 1070 750 C 1135 700 1155 610 1140 520 C 1120 380 1060 250 950 160 C 850 80 730 40 600 40 C 470 40 350 80 250 160 C 140 250 80 380 60 520 Z"
            fill="url(#theraGradTop)"
            stroke="url(#theraStrokeTop)"
            strokeWidth="2"
          />
        </svg>

        {/* Bottom-Right Flowing Organic Wave Ribbon */}
        <svg
          className="absolute -bottom-24 -right-24 w-125 sm:w-162.5 lg:w-200 h-auto opacity-35"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="theraGradBottom"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#0068a5" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#0B192C" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="theraStrokeBottom"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.40" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#004a98" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M 60 520 C 45 610 65 700 130 750 C 195 800 270 765 340 700 C 420 625 500 580 600 580 C 700 580 780 625 860 700 C 930 765 1005 800 1070 750 C 1135 700 1155 610 1140 520 C 1120 380 1060 250 950 160 C 850 80 730 40 600 40 C 470 40 350 80 250 160 C 140 250 80 380 60 520 Z"
            fill="url(#theraGradBottom)"
            stroke="url(#theraStrokeBottom)"
            strokeWidth="2"
            transform="rotate(180 600 485)"
          />
        </svg>

        {/* Distinct Neural Network Arcs & Connected Nodes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 120 180 Q 520 80 920 260 T 1600 140"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          />
          <path
            d="M 220 860 Q 720 680 1260 790"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />
          <circle cx="520" cy="80" r="5" fill="#38bdf8" />
          <circle cx="920" cy="260" r="6" fill="#0284c7" />
          <circle cx="720" cy="680" r="5" fill="#38bdf8" />
          <circle cx="1260" cy="790" r="6" fill="#0284c7" />
        </svg>
      </div>

      {/* Main Content Container - Expanded Width for Grand High-Impact Look */}
      <div className="w-full container mx-auto px-4 sm:px-6 relative z-10">
        {/* =========================================================================
            SECTION HEADER
            Updated with original TruMinds heading (removed Intego copied text)
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-second text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-second" />
            Specialized Clinical Domains
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Therapeutic Areas &amp;{" "}
            <span className="text-second">Specialized Domains</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Delivering specialized clinical research expertise, patient-centric
            trial designs, and deep domain knowledge across 20 therapeutic
            specialties worldwide.
          </p>
        </div>

        {/* =========================================================================
            8 EXPANSIVE SHOWCASE CARDS (4 Columns x 2 Rows)
            Clean White Solid Drawer (No Gradient) + Single-Line Title + Smooth Hover
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {SHOWCASE_AREAS.map((area, index) => {
            const isTouchActive = activeTouchCard === area.id;

            return (
              <div
                key={area.id}
                onClick={() => toggleTouchCard(area.id)}
                className="group relative h-97.5 sm:h-103.75 lg:h-107.5 w-full rounded-2xl overflow-hidden cursor-pointer select-none bg-[#0B192C] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-second/50 hover:shadow-[0_20px_45px_rgba(0,104,165,0.25)] transition-all duration-500"
              >
                {/* 1. Full Medical Image Layer with Cinematic Zoom */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    loading="eager"
                    priority={index < 4}
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Subtle Dark Vignette & Gradient over the photo */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/15 to-transparent pointer-events-none group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* 2. Solid White Bottom Drawer (NO GRADIENT, Centered Single-Line Title, Equal Spacing) */}
                <div
                  className={`absolute inset-x-0 bottom-0 z-20 bg-white text-slate-900 rounded-2xl shadow-[0_-8px_25px_rgba(0,0,0,0.15)] border-t border-slate-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                    isTouchActive
                      ? "translate-y-0"
                      : "translate-y-[calc(100%-64px)] group-hover:translate-y-0"
                  }`}
                >
                  {/* Always-visible Header Bar: ONLY Title + Arrow with EQUAL top & bottom padding */}
                  <div className="h-16 px-5 flex items-center justify-between">
                    <h3
                      title={area.title}
                      className="text-[15px] sm:text-[15.5px] lg:text-base font-bold text-slate-900 tracking-tight leading-tight whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-primary transition-colors flex-1 min-w-0 mr-3"
                    >
                      {area.title}
                    </h3>
                    <span className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                    </span>
                  </div>

                  {/* Expanded Body Content (Smoothly revealed on hover / touch) */}
                  <div className="px-5 pb-5 pt-0">
                    {/* Luminous Primary Accent Line on Hover */}
                    <div
                      className={`w-10 h-0.5 bg-primary mb-3 transition-opacity duration-300 ${
                        isTouchActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />

                    {/* Rich Clinical Description */}
                    <p
                      className={`text-slate-600 text-[12.5px] sm:text-[13px] leading-relaxed font-normal line-clamp-3 mb-3.5 transition-opacity duration-300 delay-75 ${
                        isTouchActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {area.description}
                    </p>

                    {/* Read More Link */}
                    <div
                      className={`pt-2.5 border-t border-slate-100 flex items-center justify-between transition-opacity duration-300 delay-100 ${
                        isTouchActive
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <Link
                        href={area.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer group/btn py-0.5"
                      >
                        <span className="underline decoration-primary/40 group-hover/btn:decoration-primary underline-offset-4">
                          Explore Specialized Area
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1.5 transition-transform duration-200 text-primary" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            "VIEW ALL" CTA BUTTON (Directly After the 8 Cards)
            ========================================================================= */}
        <div className="text-center mt-14 sm:mt-16">
          <Link
            href="/therapeutic-areas"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-linear-to-r from-primary to-accent hover:from-primary-hover hover:to-accent text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 cursor-pointer active:scale-95 group border border-white/15"
          >
            <span>View All Therapeutic Areas</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
