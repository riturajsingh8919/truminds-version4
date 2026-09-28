"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#f8fafc] text-slate-900 overflow-hidden select-none border-t border-slate-200/90">
      {/* Background Architectural CSS Stripes & Geometric Ambient Shapes */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[repeating-linear-gradient(45deg,#004a98,#004a98_1px,transparent_1px,transparent_16px)]" />
      <div className="absolute top-0 right-1/4 w-125 h-125 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-125 h-125 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-10">
        {/* Main 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200/90">
          {/* Column 1: Brand Authority, Coordinates & Social Links (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo - Increased Size */}
            <Link
              href="/"
              className="inline-block transition-opacity hover:opacity-90"
              aria-label="TruMinds Clinical Home"
            >
              <Image
                src="/logo.png"
                alt="TruMinds Clinical Logo"
                width={260}
                height={65}
                className="h-12 sm:h-13 w-auto object-contain"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
              TruMinds Clinical is a global Contract Research Organization
              (CRO), Functional Service Provider (FSP), and Clinical Staffing
              partner supporting Phase I–IV clinical development across the
              United States, Canada, the United Kingdom, Europe, and India.
            </p>

            {/* Direct Contact Coordinates */}
            <div className="space-y-3 text-xs font-mono text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0068a5] shrink-0 mt-0.5" />
                <span>14800 Quorum Dr, Suite 550, Dallas, TX 75254</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0068a5] shrink-0" />
                <a
                  href="tel:+14698501383"
                  className="hover:text-[#004a98] font-bold transition-colors"
                >
                  +1 (469) 850-1383
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0068a5] shrink-0" />
                <a
                  href="mailto:services@trumindsclinical.com"
                  className="hover:text-[#004a98] font-bold transition-colors"
                >
                  services@trumindsclinical.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TruMinds LinkedIn"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#004a98] text-slate-600 hover:text-white flex items-center justify-center border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.89H5.06v8.61h2.8z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TruMinds X / Twitter"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#004a98] text-slate-600 hover:text-white flex items-center justify-center border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TruMinds YouTube"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#004a98] text-slate-600 hover:text-white flex items-center justify-center border border-slate-200 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services (Matching Exact 4 From Header) (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0068a5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0068a5]" />
              Services & Delivery
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-normal">
              <li>
                <Link
                  href="/services/cro"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    CRO
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-solutions"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruMinds AI Solutions
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fsp-services"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    FSP Services
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services/staffing-solutions"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Staffing Solutions
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Therapeutic Areas (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0068a5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0068a5]" />
              Therapeutic Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-normal">
              <li>
                <Link
                  href="/therapeutic-areas/oncology-hematology"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Oncology & Hematology
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/therapeutic-areas/cardiovascular-vascular-diseases"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Cardiovascular Diseases
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/therapeutic-areas/neuroscience"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Neuroscience & CNS
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/therapeutic-areas/immunology"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Immunology & Biologics
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/therapeutic-areas/infectious-diseases"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Infectious Diseases & Vaccines
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/therapeutic-areas/medical-devices"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    Medical Devices & Diagnostics
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/therapeutic-areas"
                  className="text-[#004a98] font-extrabold hover:text-[#0068a5] transition-colors inline-flex items-center gap-1 pt-1"
                >
                  <span>Explore All 20 Domains</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Products (TruForm™ Suite) (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#0068a5] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0068a5]" />
              TruForm™ Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600 font-normal">
              <li>
                <Link
                  href="/products/truform-edc"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ EDC
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/truform-sdtm"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ SDTM
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/truform-adam"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ ADaM
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/truform-tlf"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ TLF
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/truform-ctms"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ CTMS
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/truform-rtsm"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ RTSM
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/truform-epro"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ ePRO
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/products/truform-docuvault"
                  className="hover:text-[#004a98] transition-colors inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    TruForm™ DocuVault
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 TruMinds Clinical LLC. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact-us"
              className="hover:text-[#004a98] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#004a98] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#004a98] transition-colors"
            >
              Security & Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
