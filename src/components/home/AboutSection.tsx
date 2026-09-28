"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrganicParallaxImage } from "@/components/common/OrganicParallaxImage";

export function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative bg-[#F8FAFC] text-slate-900 py-16 sm:py-20 lg:py-24 overflow-hidden border-b border-slate-200/80"
    >
      {/* Main Content Container matching project max-width */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: TruMinds Editorial Content & CTA (7 cols on Desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Section Eyebrow matching Reference style */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                About Us
              </span>
              <span className="w-10 h-0.5 bg-primary/40 rounded-full" />
            </div>

            {/* Official TruMinds Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.14]">
              <span className="block text-slate-900">Trusted Global</span>
              <span className="block text-primary mt-1">
                Clinical CRO Partner
              </span>
            </h2>

            {/* Narrative Paragraphs from TruMinds Documentation */}
            <div className="space-y-4 text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal max-w-2xl">
              <p>
                TruMinds Clinical is a trusted global provider of Contract
                Research Organization (CRO), Functional Service Provider (FSP),
                and specialized Clinical Staffing solutions. Supporting Phase I
                through Phase IV clinical development, we deliver scalable,
                high-quality biometrics and clinical research services tailored
                to each sponsor&apos;s unique program requirements.
              </p>
              <p>
                Recognized for deep domain excellence, our colleagues bring
                unmatched expertise in biostatistics, statistical programming,
                CDISC SDTM/ADaM standards, clinical data management, and
                regulatory submission strategy. Our customized approach combines
                operational excellence, specialized talent, and proprietary
                eClinical intelligence to accelerate clinical programs and drive
                successful outcomes.
              </p>
            </div>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-primary text-slate-900 hover:text-white hover:bg-primary font-semibold text-sm sm:text-[15px] tracking-wide transition-all duration-300 group shadow-xs cursor-pointer active:scale-95"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Unified Organic Shape Image with Signature Brand Wave (5 cols on Desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <OrganicParallaxImage
              src="/images/about/about-parallax-team.jpg"
              alt="TruMinds Clinical biostatistics and clinical data research team collaborating"
              className="w-full max-w-130"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
