import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedPillLink } from "@/components/common/AnimatedPillLink";
import { shell } from "@/lib/site-styles";

const company = [
  { label: "About Us", href: "/#about-us" },
  { label: "Giving Back", href: "/giving-back" },
  { label: "Non-profit", href: "/non-profit" },
  { label: "Careers", href: "/careers" },
];

const explore = [
  { label: "Services", href: "/#services" },
  { label: "Therapeutic Areas", href: "/#therapeutic-areas" },
  { label: "Products & TruMinds AI", href: "/#truform" },
  { label: "Resources & Insights", href: "/resources" },
  { label: "Global Presence", href: "/#global-presence" },
];

const utility = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const footerLink =
  "w-fit text-base leading-relaxed text-[#38556a] transition-colors duration-300 hover:text-[#0068a5] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]";

const socialLink =
  "inline-flex size-12 items-center justify-center rounded-full border border-[#cbdde3] text-[#0068a5] transition-[transform,background-color,border-color,color] duration-300 hover:-translate-y-1 hover:border-[#0068a5] hover:bg-[#0068a5] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none";

const socialProfiles = [
  {
    label: "LinkedIn",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle cx="17.7" cy="6.4" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.49h2.039L6.486 3.24H4.298l13.313 17.402Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 22v-8h2.8l.4-3.5h-3.2V8.3c0-1 .3-1.7 1.8-1.7H17V3.5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.7-4.5 4.8v2.3H7v3.5h2.8v8h3.7Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-[#073344] bg-white text-[#0b2e42]">
      <div className={shell}>
        <div className="grid gap-8 border-b border-[#dce7eb] py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12 md:py-20">
          <div>
            <h2 className="max-w-190 text-[clamp(2.35rem,3.5vw,3.9rem)] leading-[1.08] font-semibold tracking-[-.052em]">
              Let&apos;s move <span className="text-[#0068a5]">research forward.</span>
            </h2>
            <p className="mt-5 max-w-145 text-base leading-[1.7] text-[#526d7d]">
              Bring us the challenge. We&apos;ll bring the people, perspective and
              expertise to move it ahead.
            </p>
          </div>
          <div className="md:pb-1">
            <AnimatedPillLink
              href="/#consultation"
              label="Start a conversation"
              variant="dark"
              size="large"
            />
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-14 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_.75fr_1fr_1.2fr] lg:gap-x-12 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              aria-label="TruMinds Clinical home"
              className="inline-flex transition-opacity duration-300 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none"
            >
              <Image
                src="/logo.png"
                alt="TruMinds Clinical"
                width={205}
                height={57}
                className="h-auto w-44 sm:w-48"
              />
            </Link>
            <p className="mt-6 max-w-78 text-base leading-[1.7] text-[#526d7d]">
              Connected clinical research expertise for the work that matters.
            </p>
            <div className="mt-8 flex items-center gap-3" aria-label="Social media">
              {socialProfiles.map((profile) => (
                <a
                  key={profile.label}
                  href="#"
                  aria-label={profile.label}
                  className={socialLink}
                >
                  {profile.icon}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-col items-start gap-3.5" aria-label="Company links">
            <h2 className="mb-2 text-sm font-semibold tracking-[.13em] text-[#007d93] uppercase">
              Company
            </h2>
            {company.map((item) => (
              <Link className={footerLink} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col items-start gap-3.5" aria-label="Explore links">
            <h2 className="mb-2 text-sm font-semibold tracking-[.13em] text-[#007d93] uppercase">
              Explore
            </h2>
            {explore.map((item) => (
              <Link className={footerLink} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-4">
            <h2 className="mb-1 text-sm font-semibold tracking-[.13em] text-[#007d93] uppercase">
              Contact
            </h2>
            <a className={`${footerLink} flex items-start gap-3 break-all`} href="mailto:services@trumindsclinical.com">
              <Mail className="mt-1 shrink-0 text-[#007f9a]" size={18} aria-hidden="true" />
              services@trumindsclinical.com
            </a>
            <a className={`${footerLink} flex items-start gap-3`} href="tel:+14698501383">
              <Phone className="mt-1 shrink-0 text-[#007f9a]" size={18} aria-hidden="true" />
              +1 (469) 850-1383
            </a>
            <p className="flex items-start gap-3 text-base leading-[1.7] text-[#486777]">
              <MapPin className="mt-1 shrink-0 text-[#007f9a]" size={18} aria-hidden="true" />
              <span>14800 Quorum Dr, Suite 550<br />Dallas, TX 75254</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#dce7eb] py-6 text-sm text-[#587084] md:flex-row md:items-center md:justify-between md:gap-8">
          <p>© {new Date().getFullYear()} TruMinds Clinical. All rights reserved.</p>
          <nav
            className="flex flex-wrap items-center gap-x-7 gap-y-2 md:justify-end"
            aria-label="Legal and utility links"
          >
            {utility.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-[#496878] transition-colors duration-300 hover:text-[#0068a5] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
