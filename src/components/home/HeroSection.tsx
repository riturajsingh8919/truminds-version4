"use client";

import React, { useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative h-[75vh] min-h-130 lg:h-[85vh] xl:h-[90vh] w-full flex items-center overflow-hidden bg-[#060e1f] text-white pt-24 pb-12">
      {/* Background Ambient 3D Video - Full Bleed on All Devices (Zero Cuts/Edges) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[65%_center] md:object-center"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Desktop Gradient: Smooth Left-to-Right Scrim for Text Readability without Chopping the Video */}
        <div className="hidden md:block absolute inset-0 bg-linear-to-r from-[#060e1f]/95 via-[#060e1f]/60 to-transparent pointer-events-none" />

        {/* Mobile Gradient: Soft Ambient Vertical Wash so Full Video Shows Without Cutoff Boxes */}
        <div className="md:hidden absolute inset-0 bg-linear-to-b from-[#060e1f]/80 via-[#060e1f]/50 to-[#060e1f]/90 pointer-events-none" />

        {/* Top Header Fade */}
        <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#040e22]/70 to-transparent pointer-events-none" />

        {/* Bottom Section Fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-[#060e1f] to-transparent pointer-events-none" />
      </div>

      {/* Main Content Container (Uses Same max-width Container Token as Defined in CSS) */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-4xl xl:max-w-5xl">
          {/* Main Hero Headline - Guaranteed 3 Lines Layout */}
          <h1 className="text-[34px] sm:text-[55px] md:text-[82px] lg:text-[75px] xl:text-[95px] font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.08]">
            <span className="block">Contract Research</span>
            <span className="block">Organization Partner</span>
            <span className="block sm:whitespace-nowrap">
              for All Your Services
            </span>
          </h1>

          {/* Pill CTA Button - Matches Reference Design Layout with TruMinds Theme Colors */}
          <div className="mt-7 sm:mt-9">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Request a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
