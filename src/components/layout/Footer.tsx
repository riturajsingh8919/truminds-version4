import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { shell } from "@/lib/site-styles";

const company = [
  { label: "About Us", href: "/#about-us" },
  { label: "Giving Back", href: "/giving-back" },
  { label: "Non-profit", href: "/non-profit" },
  { label: "Careers", href: "/careers" },
];
const explore = [
  { label: "Services", href: "/#services" },
  { label: "TruMinds AI & TruForm", href: "/#truform" },
  { label: "Therapeutic Areas", href: "/#therapeutic-areas" },
  { label: "Resources & Insights", href: "/resources" },
];

export function Footer() {
  return (
    <footer className="bg-[#f0f5f6] text-[#183c50]">
      <div className={shell}>
        <div className="flex flex-col items-start justify-between gap-7 border-b border-[#cadbdc] py-14 md:flex-row md:items-center">
          <span className="max-w-162.5 text-[clamp(1.9rem,3.1vw,3.35rem)] leading-tight font-semibold tracking-tighter text-[#092940]">
            Let&apos;s move research forward.
          </span>
          <Link
            className="inline-flex shrink-0 items-center gap-5 border-b border-[#0068a5] pb-2.5 font-bold text-[#0068a5]"
            href="/#consultation"
          >
            Start a conversation <ArrowUpRight size={25} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_.75fr_.75fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="TruMinds Clinical home">
              <Image
                src="/logo.png"
                alt="TruMinds Clinical"
                width={205}
                height={57}
                className="h-auto w-51.25"
                style={{ height: "auto" }}
              />
            </Link>
            <p className="mt-5 max-w-78.75 text-sm leading-relaxed text-[#607d8c]">
              Clinical research expertise, specialized teams and connected
              technology for the work ahead.
            </p>
          </div>
          <nav
            className="flex flex-col items-start gap-3.5"
            aria-label="Company links"
          >
            <h2 className="mb-2 text-xs font-extrabold tracking-[.15em] text-[#00768c] uppercase">
              Company
            </h2>
            {company.map((item) => (
              <Link
                className="text-sm text-[#2b5165] transition-colors hover:text-[#0068a5]"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav
            className="flex flex-col items-start gap-3.5"
            aria-label="Explore links"
          >
            <h2 className="mb-2 text-xs font-extrabold tracking-[.15em] text-[#00768c] uppercase">
              Explore
            </h2>
            {explore.map((item) => (
              <Link
                className="text-sm text-[#2b5165] transition-colors hover:text-[#0068a5]"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col items-start gap-3.5 sm:col-span-2 lg:col-span-1">
            <h2 className="mb-2 text-xs font-extrabold tracking-[.15em] text-[#00768c] uppercase">
              Contact
            </h2>
            <a
              className="flex items-start gap-2 text-sm text-[#2b5165]"
              href="mailto:services@trumindsclinical.com"
            >
              <Mail
                className="mt-0.5 shrink-0 text-[#0089a0]"
                size={17}
                aria-hidden="true"
              />
              services@trumindsclinical.com
            </a>
            <a
              className="flex items-start gap-2 text-sm text-[#2b5165]"
              href="tel:+14698501383"
            >
              <Phone
                className="mt-0.5 shrink-0 text-[#0089a0]"
                size={17}
                aria-hidden="true"
              />
              +1 (469) 850-1383
            </a>
            <p className="flex items-start gap-2 text-sm leading-relaxed text-[#2b5165]">
              <MapPin
                className="mt-0.5 shrink-0 text-[#0089a0]"
                size={17}
                aria-hidden="true"
              />
              <span>
                14800 Quorum Dr, Suite 550
                <br />
                Dallas, TX 75254
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-[#cadbdc] py-6 text-xs text-[#7b929b] sm:flex-row">
          <span>
            © {new Date().getFullYear()} TruMinds Clinical. All rights reserved.
          </span>
          <Link
            className="inline-flex items-center gap-2 font-bold text-[#0068a5]"
            href="/#home"
          >
            Back to top <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
