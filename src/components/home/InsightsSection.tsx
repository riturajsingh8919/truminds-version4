"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

interface InsightArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  badge: string;
  image: string;
  excerpt: string;
  link: string;
}

const INSIGHT_ARTICLES: InsightArticle[] = [
  {
    id: "pharmasug-2026-recap",
    title:
      "Advancing Biometrics Through AI, Leadership & Innovation: PharmaSUG 2026 Recap",
    category: "Conference Recap • Biometrics",
    date: "JUNE 16, 2026",
    badge: "PharmaSUG 2026",
    image: "/images/resources/blog-ai-fda.jpg",
    excerpt:
      "Key takeaways on integrating machine-learning intelligence into SAS and R statistical programming pipelines, automating CDISC SDTM/ADaM mapping, and expediting FDA regulatory submissions.",
    link: "/resources/insights/pharmasug-2026-recap",
  },
  {
    id: "global-hybrid-biometrics-delivery",
    title:
      "The Advantage of Global Hybrid Delivery in Clinical Biometrics: Scaling Speed & Quality",
    category: "Global Delivery • FSP Model",
    date: "JUNE 1, 2026",
    badge: "FSP Strategy",
    image: "/images/resources/blog-rbqm.jpg",
    excerpt:
      "How modern pharmaceutical sponsors combine onshore governance across the US and Europe with scalable global delivery centers in Canada and India to reduce trial costs while ensuring 100% CDISC compliance.",
    link: "/resources/insights/global-hybrid-biometrics-delivery",
  },
  {
    id: "phuse-connect-2026-recap",
    title:
      "TruMinds Clinical at PHUSE Connect 2026: Modernizing CDISC Submission Standards",
    category: "Standards & Automation • PHUSE",
    date: "MAY 7, 2026",
    badge: "PHUSE Connect",
    image: "/images/resources/blog-cdisc-sdtm.jpg",
    excerpt:
      "Highlights from our technical symposium on automated Define-XML 2.1 validation, instant TLF generation workflows, and unified eSource-to-submission architecture with TruForm.",
    link: "/resources/insights/phuse-connect-2026-recap",
  },
];

export function InsightsSection() {
  return (
    <section
      id="insights"
      className="relative bg-white text-slate-900 py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-slate-100"
    >
      {/* =========================================================================
          AMBIENT BACKGROUND SHAPES IN SOPHISTICATED SOFT GRAY / SLATE
          Subtle TruMinds organic curves and flowing neural ribbons
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glows in Gentle Cool Gray / Ice */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-radial from-slate-100/90 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute -top-32 -left-32 w-150 h-150 bg-radial from-slate-200/50 via-slate-100/30 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute -bottom-32 -right-32 w-150 h-150 bg-radial from-slate-200/50 via-slate-100/30 to-transparent rounded-full blur-3xl opacity-75" />

        {/* Top-Left Massive Organic TruMinds Curve in Soft Gray & Subtle Slate Stroke */}
        <svg
          className="absolute -top-16 -left-16 w-137.5 sm:w-175 lg:w-212.5 h-auto opacity-35"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="insightGradTop"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="insightStrokeTop"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.30" />
              <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M 60 520 C 45 610 65 700 130 750 C 195 800 270 765 340 700 C 420 625 500 580 600 580 C 700 580 780 625 860 700 C 930 765 1005 800 1070 750 C 1135 700 1155 610 1140 520 C 1120 380 1060 250 950 160 C 850 80 730 40 600 40 C 470 40 350 80 250 160 C 140 250 80 380 60 520 Z"
            fill="url(#insightGradTop)"
            stroke="url(#insightStrokeTop)"
            strokeWidth="2"
          />
        </svg>

        {/* Bottom-Right Flowing Organic Wave Ribbon in Elegant Gray */}
        <svg
          className="absolute -bottom-24 -right-24 w-125 sm:w-162.5 lg:w-200 h-auto opacity-30"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="insightGradBottom"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.22" />
              <stop offset="50%" stopColor="#cbd5e1" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="insightStrokeBottom"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#64748b" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M 60 520 C 45 610 65 700 130 750 C 195 800 270 765 340 700 C 420 625 500 580 600 580 C 700 580 780 625 860 700 C 930 765 1005 800 1070 750 C 1135 700 1155 610 1140 520 C 1120 380 1060 250 950 160 C 850 80 730 40 600 40 C 470 40 350 80 250 160 C 140 250 80 380 60 520 Z"
            fill="url(#insightGradBottom)"
            stroke="url(#insightStrokeBottom)"
            strokeWidth="2"
            transform="rotate(180 600 485)"
          />
        </svg>

        {/* Distinct Slate/Gray Neural Network Arcs & Connected Nodes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 120 180 Q 520 80 920 260 T 1600 140"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d="M 220 860 Q 720 680 1260 790"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />
          <circle cx="520" cy="80" r="4.5" fill="#94a3b8" />
          <circle cx="920" cy="260" r="5" fill="#64748b" />
          <circle cx="720" cy="680" r="4.5" fill="#94a3b8" />
          <circle cx="1260" cy="790" r="5" fill="#64748b" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* =========================================================================
            SECTION HEADER (Matching reference "Intego Insights" style)
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Thought Leadership & Industry Trends
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            TruMinds <span className="text-primary">Insights</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Strategic perspectives, conference keynotes, and clinical
            biometrics intelligence from our global biostatisticians and trial
            leaders.
          </p>
        </div>

        {/* =========================================================================
            3 FEATURED INSIGHT ARTICLES GRID (Matching reference 3-column layout)
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {INSIGHT_ARTICLES.map((article) => {
            return (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,104,165,0.09)] hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Image Banner with Zoom on Hover */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient overlay for readability */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Conference / Category Badge */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-primary font-bold text-[11px] uppercase tracking-wider shadow-xs border border-white/40">
                        {article.badge}
                      </span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 sm:p-7">
                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight leading-snug mb-3">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm leading-relaxed font-normal mb-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Read More Link */}
                <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-slate-100 mt-2">
                  <Link
                    href={article.link}
                    className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-primary transition-colors text-sm sm:text-base group/btn"
                  >
                    <span className="underline decoration-slate-300 group-hover/btn:decoration-primary underline-offset-4">
                      Read More
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200 text-slate-700 group-hover/btn:text-primary" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM "MORE ARTICLES" BUTTON (Matching reference style)
            ========================================================================= */}
        <div className="text-center mt-14 sm:mt-16">
          <Link
            href="/resources"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-sm hover:shadow-primary/20 hover:-translate-y-0.5 cursor-pointer active:scale-95 group"
          >
            <span>More Articles</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
