"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import { NAVIGATION_DATA, NavItem } from "@/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 min-[1120px]:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#061224] text-white shadow-2xl flex flex-col z-10 animate-drawer overflow-hidden border-l border-white/10">
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#061224]/90 sticky top-0 z-20">
          <Link href="/" onClick={onClose} className="flex items-center">
            <div className="bg-white px-3.5 py-1.5 rounded-full shadow-xs inline-flex items-center">
              <Image
                src="/logo.png"
                alt="TruMinds Clinical"
                width={160}
                height={42}
                quality={100}
                unoptimized
                className="h-8 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close mobile menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Links (Direct Navigation, No Dropdowns) */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
          {NAVIGATION_DATA.map((item: NavItem) => {
            const isActive =
              pathname === item.slug ||
              (item.slug !== "/" && pathname.startsWith(item.slug));

            return (
              <Link
                key={item.slug}
                href={item.slug}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white font-semibold"
                    : "text-slate-200 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{item.title}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            );
          })}
        </div>

        {/* Drawer Bottom CTA */}
        <div className="p-6 border-t border-white/10 bg-[#040e22]">
          <Link
            href="/contact-us"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-white/40 hover:border-white text-white font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
