"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAVIGATION_DATA, NavItem } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for seamless header elevation & backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#040e22]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3 sm:py-3.5"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-6">
            {/* Brand Logo - 100% Quality, High Visibility, Untouched Brand Colors */}
            <div className="shrink-0 flex items-center">
              <Link
                href="/"
                className="flex items-center group transition-transform hover:scale-[1.01]"
                aria-label="TruMinds Clinical Home"
              >
                <div className="bg-white px-3.5 sm:px-4 py-1.5 rounded-full shadow-xs hover:shadow-sm transition-all inline-flex items-center">
                  <Image
                    src="/logo.png"
                    alt="TruMinds Clinical Logo"
                    width={172}
                    height={48}
                    quality={100}
                    unoptimized
                    className="h-9 sm:h-10 md:h-12 w-auto object-contain"
                    style={{ width: "auto" }}
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links (Direct Navigation, No Dropdowns) */}
            <nav
              className="hidden min-[1180px]:flex items-center space-x-4 lg:space-x-5 xl:space-x-7"
              aria-label="Main Navigation"
            >
              {NAVIGATION_DATA.map((item: NavItem) => {
                const isActive =
                  pathname === item.slug ||
                  (item.slug !== "/" && pathname.startsWith(item.slug));

                return (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    className={`text-sm xl:text-lg font-bold tracking-wide transition-colors ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white hover:text-white/85"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Pill Contact Us Button (Matching Reference Design) */}
            <div className="hidden min-[1180px]:flex items-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/40 hover:border-white text-white font-bold text-sm xl:text-lg tracking-wide hover:bg-white/10 active:scale-95 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="min-[1180px]:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
