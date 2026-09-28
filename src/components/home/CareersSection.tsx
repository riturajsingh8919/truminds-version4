"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Calendar, Sparkles } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  date: string;
  badge?: string;
  badgeColor?: "hot" | "new" | "featured";
  description: string;
  link: string;
}

const FEATURED_JOBS: JobOpening[] = [
  {
    id: "senior-clinical-statistical-programmer",
    title: "Senior / Principal Clinical Statistical Programmer",
    department: "Biometrics & Programming",
    location: "Bridgewater, NJ / United States (Hybrid)",
    date: "OCTOBER 24, 2026",
    badge: "HOT",
    badgeColor: "hot",
    description:
      "Drive complex CDISC SDTM/ADaM mapping, define-XML creation, and regulatory submission-ready TLF deliverables for Phase II–IV oncology trials.",
    link: "/careers/senior-clinical-statistical-programmer",
  },
  {
    id: "lead-biostatistician-oncology",
    title: "Lead Biostatistician (Oncology & Rare Diseases)",
    department: "Biostatistics",
    location: "London / United Kingdom (Remote / Hybrid)",
    date: "OCTOBER 22, 2026",
    badge: "HOT",
    badgeColor: "hot",
    description:
      "Author Statistical Analysis Plans (SAP), lead DMC/DSMB meetings, and develop innovative Bayesian adaptive designs for breakthrough trial indications.",
    link: "/careers/lead-biostatistician-oncology",
  },
  {
    id: "ai-solutions-engineer",
    title: "AI Solutions Engineer (Clinical Trials Automation)",
    department: "TruMinds AI Solutions",
    location: "Bangalore / India (Hybrid)",
    date: "OCTOBER 19, 2026",
    badge: "NEW",
    badgeColor: "new",
    description:
      "Build machine-learning pipelines for automated anomaly detection, natural language protocol parsing, and instant eCRF-to-SDTM transformation.",
    link: "/careers/ai-solutions-engineer",
  },
  {
    id: "clinical-data-manager",
    title: "Clinical Data Manager (TruForm EDC & Medidata)",
    department: "Clinical Data Management",
    location: "Toronto / Canada (Remote)",
    date: "OCTOBER 18, 2026",
    badge: "HOT",
    badgeColor: "hot",
    description:
      "Lead end-to-end data management workflows, edit check specifications, eSource integrations, and database locks across multi-center global studies.",
    link: "/careers/clinical-data-manager",
  },
  {
    id: "senior-cra-oncology",
    title: "Senior Clinical Research Associate (CRA II - Oncology)",
    department: "Clinical Operations & FSP",
    location: "Frankfurt / Germany (Field-Based)",
    date: "OCTOBER 15, 2026",
    badge: "FEATURED",
    badgeColor: "featured",
    description:
      "Conduct comprehensive site qualification, initiation, routine monitoring, and close-out visits ensuring 100% GCP compliance and patient safety.",
    link: "/careers/senior-cra-oncology",
  },
  {
    id: "regulatory-affairs-specialist",
    title: "Regulatory Affairs & Submissions Specialist",
    department: "Regulatory & Submissions",
    location: "Bridgewater, NJ / Remote (US)",
    date: "OCTOBER 12, 2026",
    badge: "HOT",
    badgeColor: "hot",
    description:
      "Coordinate FDA/EMA eCTD submission dossiers, IND safety updates, and agency briefing documents in close coordination with statistical teams.",
    link: "/careers/regulatory-affairs-specialist",
  },
];

export function CareersSection() {
  return (
    <section
      id="careers"
      className="relative bg-white text-slate-900 py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-slate-100"
    >
      {/* =========================================================================
          AMBIENT BACKGROUND SHAPES IN SOPHISTICATED SOFT GRAY / SLATE
          Subtle TruMinds organic curves and flowing neural ribbons
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glows in Gentle Cool Gray / Ice */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-radial from-slate-100/90 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-radial from-slate-200/50 via-slate-100/30 to-transparent rounded-full blur-3xl opacity-80" />
        <div className="absolute -bottom-32 -left-32 w-150 h-150 bg-radial from-slate-200/50 via-slate-100/30 to-transparent rounded-full blur-3xl opacity-75" />

        {/* Top-Right Massive Organic TruMinds Curve in Soft Gray & Subtle Slate Stroke */}
        <svg
          className="absolute -top-16 -right-16 w-137.5 sm:w-175 lg:w-212.5 h-auto opacity-35"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="careerGradTop"
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
              id="careerStrokeTop"
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
            fill="url(#careerGradTop)"
            stroke="url(#careerStrokeTop)"
            strokeWidth="2"
          />
        </svg>

        {/* Bottom-Left Flowing Organic Wave Ribbon in Elegant Gray */}
        <svg
          className="absolute -bottom-24 -left-24 w-125 sm:w-162.5 lg:w-200 h-auto opacity-30"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="careerGradBottom"
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
              id="careerStrokeBottom"
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
            fill="url(#careerGradBottom)"
            stroke="url(#careerStrokeBottom)"
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
            d="M 80 220 Q 420 90 850 290 T 1550 160"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <path
            d="M 180 820 Q 680 640 1220 760"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />
          <circle cx="420" cy="90" r="4.5" fill="#94a3b8" />
          <circle cx="850" cy="290" r="5" fill="#64748b" />
          <circle cx="680" cy="640" r="4.5" fill="#94a3b8" />
          <circle cx="1220" cy="760" r="5" fill="#64748b" />
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* =========================================================================
            SECTION HEADER (Matching reference "Join our team" style)
            ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Global Career Opportunities
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Join our <span className="text-primary">team</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Build your career with a high-growth global CRO and clinical
            biometrics leader. Work on breakthrough global clinical trials
            spanning oncology, rare diseases, and AI innovation.
          </p>
        </div>

        {/* =========================================================================
            6 FEATURED JOB OPENINGS GRID (3 Columns x 2 Rows)
            Matching reference card design with clean elevation and responsive layout
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {FEATURED_JOBS.map((job) => {
            return (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,104,165,0.09)] hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Metadata Row: Date & HOT Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[11.5px] sm:text-xs font-semibold tracking-wider uppercase">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.date}</span>
                    </div>

                    {job.badge && (
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase shadow-xs ${
                          job.badgeColor === "hot"
                            ? "bg-[#ff5722] text-white"
                            : job.badgeColor === "new"
                            ? "bg-emerald-600 text-white"
                            : "bg-primary text-white"
                        }`}
                      >
                        {job.badge}
                      </span>
                    )}
                  </div>

                  {/* Location Information */}
                  <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-slate-500 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{job.location}</span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-primary transition-colors tracking-tight leading-snug mb-3">
                    {job.title}
                  </h3>

                  {/* Department Pill */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11.5px] font-medium border border-slate-200/60">
                      <Briefcase className="w-3 h-3 text-slate-500" />
                      {job.department}
                    </span>
                  </div>

                  {/* Role Description */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal mb-6">
                    {job.description}
                  </p>
                </div>

                {/* Bottom Row: Apply Link matching reference */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={job.link}
                    className="inline-flex items-center gap-2 font-bold text-slate-900 group-hover:text-primary transition-colors text-sm sm:text-base group/btn"
                  >
                    <span className="underline decoration-slate-300 group-hover/btn:decoration-primary underline-offset-4 font-bold">
                      Apply
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-200 text-slate-700 group-hover/btn:text-primary" />
                  </Link>

                  <span className="text-xs text-slate-400 font-medium">
                    Full-Time
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM "VIEW ALL OPENINGS" BUTTON (Seamless, Top-Notch CTA)
            ========================================================================= */}
        <div className="text-center mt-14 sm:mt-16">
          <Link
            href="/careers"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/35 hover:-translate-y-0.5 cursor-pointer active:scale-95 group"
          >
            <span>View All Openings</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
