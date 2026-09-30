"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { shell } from "@/lib/site-styles";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about-us" },
  { label: "Services", href: "/#services" },
  { label: "TruMinds AI", href: "/#truform" },
  { label: "Therapeutic Areas", href: "/#therapeutic-areas" },
  { label: "Giving Back", href: "/giving-back" },
];
const utilityLinks = [
  { label: "Non-profit", href: "/non-profit" },
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <header className="sticky top-0 z-80 bg-white shadow-[0_1px_0_#dce8eb]">
      <div className="hidden border-b border-[#e2ecee] bg-[#eef5f6] sm:block">
        <div
          className={`${shell} flex min-h-9 items-center justify-between text-[.68rem] font-bold tracking-wider text-[#4e7080] uppercase`}
        >
          <span>Clinical research, connected.</span>
          <nav
            className="flex items-center gap-6"
            aria-label="Utility navigation"
          >
            {utilityLinks.map((item) => (
              <Link
                className="transition-colors hover:text-[#0068a5]"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div
        className={`${shell} flex min-h-18.25 items-center justify-between gap-6 sm:min-h-20.5`}
      >
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          aria-label="TruMinds Clinical home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="TruMinds Clinical"
            width={205}
            height={58}
            priority
            className="h-auto w-46.25 xl:w-51.25"
          />
        </Link>
        <nav
          className="hidden flex-1 items-center justify-end gap-[clamp(15px,1.65vw,31px)] min-[1181px]:flex"
          aria-label="Main navigation"
        >
          {mainLinks.map((item) => (
            <Link
              className="whitespace-nowrap text-[clamp(.74rem,.83vw,.91rem)] font-bold text-[#1f4055] transition-colors hover:text-[#007e91]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="hidden min-h-11 shrink-0 items-center justify-center gap-2.5 bg-[#0068a5] px-5 text-sm font-bold text-white transition-colors hover:bg-[#004a79] min-[1181px]:inline-flex"
          href="/#consultation"
        >
          Contact <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <button
          className="inline-flex size-11 items-center justify-center border border-[#cfdee2] bg-white text-[#063a53] min-[1181px]:hidden"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-88px)] overflow-y-auto bg-white px-5 pt-3.5 pb-8 shadow-[0_20px_35px_rgba(6,38,55,.15)]"
          aria-label="Mobile navigation"
        >
          {[
            ...mainLinks,
            ...utilityLinks,
            { label: "Contact", href: "/#consultation" },
          ].map((item, index) => (
            <Link
              className="flex min-h-13 items-center gap-4 border-b border-[#e5eef0] text-base font-bold text-[#153950]"
              href={item.href}
              key={item.label}
              onClick={() => setOpen(false)}
            >
              <span className="text-[.65rem] tracking-wider text-[#009a9e]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
              <ArrowRight className="ml-auto" size={18} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
