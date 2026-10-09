"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { shell } from "@/lib/site-styles";

const mainLinks = [
  { label: "About Us", href: "/#about-us" },
  { label: "Services", href: "/#services" },
  { label: "Therapeutic Areas", href: "/#therapeutic-areas" },
  { label: "Products", href: "/#truform" },
  { label: "Giving Back", href: "/giving-back" },
  { label: "Resources", href: "/resources" },
  { label: "Contact Us", href: "/#consultation" },
];
const givingBackLinks = [
  {
    label: "Non-profit Research Organizations",
    href: "/giving-back#non-profit-research-organizations",
  },
  {
    label: "Employee Volunteer Programs",
    href: "/giving-back#employee-volunteer-programs",
  },
  { label: "Community Outreach", href: "/giving-back#community-outreach" },
  { label: "Mentorship Programs", href: "/giving-back#mentorship-programs" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [givingBackOpen, setGivingBackOpen] = useState(false);
  const [mobileGivingBackOpen, setMobileGivingBackOpen] = useState(false);
  const givingBackRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function onEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setGivingBackOpen(false);
        setMobileGivingBackOpen(false);
      }
    }
    function onOutsideClick(event: MouseEvent) {
      if (!givingBackRef.current?.contains(event.target as Node)) {
        setGivingBackOpen(false);
      }
    }
    window.addEventListener("keydown", onEscape);
    window.addEventListener("click", onOutsideClick);
    return () => {
      window.removeEventListener("keydown", onEscape);
      window.removeEventListener("click", onOutsideClick);
    };
  }, []);

  return (
    <header className="sticky top-0 z-80 bg-white shadow-[0_1px_0_#dce8eb]">
      <div
        className={`${shell} flex min-h-18.25 items-center justify-between gap-6 sm:min-h-20.5`}
      >
        <Link
          href="/"
          className="inline-flex shrink-0 items-center"
          aria-label="TruMinds Clinical home"
          onClick={() => {
            setOpen(false);
            setGivingBackOpen(false);
          }}
        >
          <Image
            src="/logo.png"
            alt="TruMinds Clinical"
            width={205}
            height={57}
            priority
            className="h-auto w-46.25 xl:w-51.25"
            style={{ height: "auto" }}
          />
        </Link>
        <nav
          className="hidden flex-1 items-center justify-end gap-[clamp(13px,1.25vw,24px)] min-[1181px]:flex 2xl:gap-7"
          aria-label="Main navigation"
        >
          {mainLinks.map((item) =>
            item.label === "Giving Back" ? (
              <div
                className="relative flex items-center"
                key={item.label}
                ref={givingBackRef}
                onMouseEnter={() => setGivingBackOpen(true)}
                onMouseLeave={() => setGivingBackOpen(false)}
                onFocusCapture={() => setGivingBackOpen(true)}
                onBlurCapture={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setGivingBackOpen(false);
                  }
                }}
              >
                <Link
                  className={`${givingBackOpen ? "text-[#007e91]" : "text-[#1f4055]"} whitespace-nowrap text-base font-bold transition-colors hover:text-[#007e91]`}
                  href={item.href}
                  onClick={() => setGivingBackOpen(false)}
                >
                  {item.label}
                </Link>
                <button
                  type="button"
                  className="ml-1 flex size-7 items-center justify-center rounded-full text-[#1f4055] transition-colors hover:bg-[#e9f5f5] hover:text-[#007e91] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008b9c]"
                  aria-label="Toggle Giving Back menu"
                  aria-expanded={givingBackOpen}
                  aria-controls="giving-back-submenu"
                  onClick={() => setGivingBackOpen(!givingBackOpen)}
                >
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 motion-reduce:transition-none ${givingBackOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id="giving-back-submenu"
                  aria-hidden={!givingBackOpen}
                  className={`${givingBackOpen ? "visible translate-y-0 scale-100 opacity-100" : "pointer-events-none invisible translate-y-2 scale-[.97] opacity-0"} absolute top-full left-1/2 z-10 w-105 -translate-x-1/2 pt-4 transition-[opacity,transform,visibility] duration-300 ease-[cubic-bezier(.16,1,.3,1)] motion-reduce:transition-none`}
                >
                  <div className="overflow-hidden rounded-xl border border-[#dce8eb] bg-white/95 p-2 shadow-[0_22px_55px_rgba(7,35,55,.17)] ring-1 ring-white/80 backdrop-blur-xl">
                    {givingBackLinks.map((subitem) => (
                      <Link
                        className="group relative flex min-h-14 items-center gap-3 rounded-lg px-4 py-2.5 text-base font-semibold leading-snug text-[#173b50] transition-[background-color,color] duration-250 hover:bg-[#edf7f7] hover:text-[#007c8b] focus-visible:bg-[#edf7f7] focus-visible:outline-2 focus-visible:outline-[#008b9c] motion-reduce:transition-none"
                        href={subitem.href}
                        key={subitem.label}
                        onClick={() => setGivingBackOpen(false)}
                      >
                        <span className="absolute inset-y-2 left-0 w-0.5 origin-center scale-y-0 rounded-full bg-[#00a3a3] transition-transform duration-250 group-hover:scale-y-100 group-focus-visible:scale-y-100 motion-reduce:transition-none" />
                        <span className="flex-1 transition-transform duration-250 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
                          {subitem.label}
                        </span>
                        <ArrowUpRight
                          className="shrink-0 -translate-x-1 translate-y-1 text-[#008995] opacity-0 transition-[opacity,transform] duration-250 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
                          size={16}
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.label === "Contact Us" ? (
              <AnimatedPillLink
                key={item.label}
                href={item.href}
                label={item.label}
                variant="dark"
              />
            ) : (
              <Link
                className="whitespace-nowrap text-base font-bold text-[#1f4055] transition-colors hover:text-[#007e91]"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
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
          {mainLinks.map((item, index) => (
            <div key={item.label}>
              <div className="flex min-h-13 items-center border-b border-[#e5eef0]">
                <Link
                  className="flex min-h-13 flex-1 items-center gap-4 text-base font-bold text-[#153950]"
                  href={item.href}
                  onClick={() => {
                    setOpen(false);
                    setMobileGivingBackOpen(false);
                  }}
                >
                  <span className="text-[.65rem] tracking-wider text-[#009a9e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                  {item.label !== "Giving Back" && (
                    <ArrowRight
                      className="ml-auto"
                      size={18}
                      aria-hidden="true"
                    />
                  )}
                </Link>
                {item.label === "Giving Back" && (
                  <button
                    type="button"
                    className="flex size-11 shrink-0 items-center justify-center text-[#153950]"
                    aria-label="Toggle Giving Back menu"
                    aria-expanded={mobileGivingBackOpen}
                    aria-controls="mobile-giving-back-submenu"
                    onClick={() =>
                      setMobileGivingBackOpen(!mobileGivingBackOpen)
                    }
                  >
                    <ChevronDown size={18} aria-hidden="true" />
                  </button>
                )}
              </div>
              {item.label === "Giving Back" && (
                <div
                  id="mobile-giving-back-submenu"
                  className={`${mobileGivingBackOpen ? "block" : "hidden"} border-b border-[#e5eef0] bg-[#f2f8f9] py-2 pl-12`}
                >
                  {givingBackLinks.map((subitem) => (
                    <Link
                      className="block py-3 pr-4 text-base font-semibold text-[#31576a]"
                      href={subitem.href}
                      key={subitem.label}
                      onClick={() => {
                        setOpen(false);
                        setMobileGivingBackOpen(false);
                      }}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
