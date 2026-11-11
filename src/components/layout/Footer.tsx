import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/services";
import { aiServices } from "@/lib/truminds-ai";
import { shell } from "@/lib/site-styles";

const company = [
  { label: "About Us", href: "/about-us" },
  { label: "Giving Back", href: "/giving-back" },
  { label: "Non-Profit", href: "/non-profit" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact-us" },
];
const explore = [
  { label: "Therapeutic Areas", href: "/therapeutic-areas" },
  { label: "Resources & Insights", href: "/resources" },
  { label: "Global Presence", href: "/#global-presence" },
  { label: "Leadership Team", href: "/#leadership-team" },
  { label: "Markets We Serve", href: "/#markets-we-serve" },
];
const serviceLinks = [
  { label: "CRO Services", href: "/services/full-service-cro" },
  { label: "FSP Services", href: "/services/fsp-services" },
  { label: "Technology Solutions", href: "/services/truminds-ai" },
  { label: "Staffing Solutions", href: "/services/clinical-staffing" },
  { label: "TruMinds AI", href: "/services/truminds-ai" },
  { label: "TruForm Platform", href: "/products" },
];
const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];
const linkClass = "w-fit text-lg font-medium leading-snug text-[#456476] transition-colors hover:text-[#0068a5] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]";
const socialClass = "group relative inline-flex size-12 items-center justify-center overflow-hidden rounded-full border border-[#cbdde3] text-[#0068a5] transition-[transform,background-color,border-color,color,box-shadow] duration-300 hover:-translate-y-1.5 hover:rotate-[-5deg] hover:border-[#0068a5] hover:bg-[#0068a5] hover:text-white hover:shadow-[0_10px_20px_rgba(0,104,165,.22)] motion-reduce:transition-none";
// Add profile URLs here when the client supplies them.
const socialProfiles = [
  { label: "LinkedIn", href: null as string | null, icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.939v5.666H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" /></svg> },
  { label: "Instagram", href: null as string | null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" /><circle cx="12" cy="12" r="4.25" /><circle cx="17.7" cy="6.4" r="1" fill="currentColor" stroke="none" /></svg> },
  { label: "X", href: null as string | null, icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.64 7.584H.47l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.49h2.039L6.486 3.24H4.298l13.313 17.402Z" /></svg> },
  { label: "Facebook", href: null as string | null, icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 22v-8h2.8l.4-3.5h-3.2V8.3c0-1 .3-1.7 1.8-1.7H17V3.5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.7-4.5 4.8v2.3H7v3.5h2.8v8h3.7Z" /></svg> },
];

function LinkList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <nav aria-label={`${title} links`} className="flex flex-col items-start gap-3.5">
      <h2 className="mb-2 text-lg font-semibold tracking-[.08em] text-[#007d93] uppercase">{title}</h2>
      {items.map((item) => <Link prefetch={false} key={`${item.label}-${item.href}`} href={item.href} className={linkClass}>{item.label}</Link>)}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="copy-on-light border-t border-[#d7e6ea] bg-white text-[#0b2e42]">
      <div className={shell}>
        <div className="grid gap-x-8 gap-y-12 py-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.7fr)_minmax(0,.95fr)_minmax(0,1fr)_minmax(20rem,1.4fr)] xl:gap-x-6 xl:py-16 2xl:gap-x-8">
          <div className="min-w-0 sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <Link prefetch={false} href="/" aria-label="TruMinds Clinical home" className="inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]">
              <Image src="/logo.png" alt="TruMinds Clinical" width={205} height={57} className="h-auto w-48" />
            </Link>
            <p className="mt-5 max-w-72 text-lg leading-relaxed text-[#526d7d]">Connected clinical research expertise for the work that matters.</p>
            <div className="mt-6 flex items-center gap-3" aria-label="Social media profiles">
              {socialProfiles.map((profile) => profile.href ? (
                <a key={profile.label} href={profile.href} aria-label={profile.label} target="_blank" rel="noopener noreferrer" className={`${socialClass} cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]`}>{profile.icon}</a>
              ) : (
                <span key={profile.label} role="img" aria-label={`${profile.label} profile link coming soon`} title={`${profile.label} link coming soon`} className={socialClass}>{profile.icon}</span>
              ))}
            </div>
          </div>
          <LinkList title="Company" items={company} />
          <LinkList title="Explore" items={explore} />
          <div className="flex flex-col items-start gap-3.5">
            <h2 className="mb-2 text-lg font-semibold tracking-[.08em] text-[#007d93] uppercase">Services</h2>
            {serviceLinks.map((item) => <Link prefetch={false} key={item.label} href={item.href} className={linkClass}>{item.label}</Link>)}
          </div>
          <section aria-labelledby="footer-contact-title" className="min-w-0 sm:col-span-2 lg:col-span-3 xl:col-span-1">
            <h2 id="footer-contact-title" className="mb-5 text-lg font-semibold tracking-[.08em] text-[#007d93] uppercase">Contact</h2>
            <Link prefetch={false} href="/contact-us" className={`${linkClass} group mb-5 inline-flex min-h-8 items-center gap-2`}>Contact Our Team<ArrowUpRight size={19} className="shrink-0 text-[#007f9a] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" /></Link>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-[minmax(20rem,1.1fr)_minmax(0,.8fr)_minmax(0,1fr)] xl:grid-cols-1">
              <a href="mailto:services@trumindsclinical.com" className={`${linkClass} flex max-w-full items-start gap-3 md:col-span-2 lg:col-span-1`}><Mail className="mt-0.5 shrink-0 text-[#007f9a]" size={20} strokeWidth={1.7} aria-hidden="true" /><span className="min-w-0 break-normal">services@<wbr />trumindsclinical.com</span></a>
              <a href="tel:+14698501383" className={`${linkClass} flex items-start gap-3`}><Phone className="mt-0.5 shrink-0 text-[#007f9a]" size={20} strokeWidth={1.7} aria-hidden="true" /><span className="whitespace-nowrap">+1 (469) 850-1383</span></a>
              <address className="flex min-w-0 items-start gap-3 text-lg font-medium leading-relaxed text-black not-italic"><MapPin className="mt-1 shrink-0 text-[#007f9a]" size={20} strokeWidth={1.7} aria-hidden="true" /><span className="min-w-0"><span className="block">14800 Quorum Dr, <span className="whitespace-nowrap">Suite 550</span></span><span className="block whitespace-nowrap">Dallas, TX 75254</span></span></address>
            </div>
          </section>
        </div>
        <nav aria-label="All service pages" className="border-t border-[#dce7eb] py-9">
          <h2 className="mb-5 text-lg font-semibold tracking-[.08em] text-[#007d93] uppercase">Explore every service and solution</h2>
          <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {services.map((item) => <Link prefetch={false} key={item.slug} href={`/services/${item.slug}`} className={linkClass}>{item.title}</Link>)}
            {aiServices.map((item) => <Link prefetch={false} key={item.slug} href={`/truminds-ai/${item.slug}`} className={linkClass}>{item.title}</Link>)}
          </div>
        </nav>
        <div className="flex flex-col gap-4 border-t border-[#dce7eb] py-6 text-lg font-medium text-[#587084] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} TruMinds Clinical. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-6 gap-y-2">{legal.map((item) => <Link prefetch={false} key={item.label} href={item.href} className="font-medium hover:text-[#0068a5]">{item.label}</Link>)}</nav>
        </div>
      </div>
    </footer>
  );
}
