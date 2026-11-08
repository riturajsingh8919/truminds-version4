"use client";

import { usePathname } from "next/navigation";
import { ContactForm } from "@/components/contact/ContactForm";
import { CompactContactSection } from "@/components/contact/CompactContactSection";
import { Mail, Phone } from "lucide-react";
import { shell } from "@/lib/site-styles";

export function ContactSection() {
  const pathname = usePathname();
  if (pathname === "/contact-us") return null;
  if (pathname !== "/") return <CompactContactSection />;

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 bg-[#082b3e] py-16 text-white md:py-20">
      <div className={`${shell} grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16`}>
        <div className="flex flex-col lg:min-h-full lg:pr-4">
          <div>
            <span className="text-lg font-medium tracking-[.08em] text-[#80dbdc] uppercase">Contact our team</span>
            <h2 id="contact-title" className="mt-4 text-4xl md:text-5xl xl:text-6xl leading-[1.1] font-semibold tracking-[-.025em]">Let&apos;s move research forward.</h2>
            <p className="mt-6 max-w-125 text-lg leading-relaxed text-[#c2dce2]">Tell us what you are working on. We will help connect you with the right clinical, data or technology expertise.</p>
          </div>

          <div className="mt-10 border-t border-white/20 pt-7">
            <h3 className="text-xl font-semibold text-white">A clear next step</h3>
            <ol className="mt-6 space-y-5 border-l border-[#4d94a5]/60">
              <li className="relative pl-8">
                <span className="absolute -left-5 top-0 grid size-10 place-items-center rounded-full border border-[#66d8dc]/50 bg-[#0d4053] text-base font-semibold text-[#94e8e6]">01</span>
                <h4 className="text-lg font-semibold text-white">Share your priorities</h4>
                <p className="mt-1 text-lg leading-snug text-[#c2dce2]">Tell us about your study or question.</p>
              </li>
              <li className="relative pl-8">
                <span className="absolute -left-5 top-0 grid size-10 place-items-center rounded-full border border-[#66d8dc]/50 bg-[#0d4053] text-base font-semibold text-[#94e8e6]">02</span>
                <h4 className="text-lg font-semibold text-white">Connect with the right expertise</h4>
                <p className="mt-1 text-lg leading-snug text-[#c2dce2]">We will review your needs with our team.</p>
              </li>
              <li className="relative pl-8">
                <span className="absolute -left-5 top-0 grid size-10 place-items-center rounded-full border border-[#66d8dc]/50 bg-[#0d4053] text-base font-semibold text-[#94e8e6]">03</span>
                <h4 className="text-lg font-semibold text-white">Plan what comes next</h4>
                <p className="mt-1 text-lg leading-snug text-[#c2dce2]">Continue the conversation together.</p>
              </li>
            </ol>
          </div>

          <div className="mt-10 border-t border-white/20 pt-6 lg:mt-auto">
            <p className="mb-4 text-lg font-semibold text-[#94e8e6]">Prefer to reach us directly?</p>
            <div className="grid gap-3">
              <a href="mailto:services@trumindsclinical.com" className="inline-flex w-fit items-center gap-3 text-white transition-colors hover:text-[#9de6e1]"><Mail size={20} aria-hidden="true" /> services@trumindsclinical.com</a>
              <a href="tel:+14698501383" className="inline-flex w-fit items-center gap-3 text-white transition-colors hover:text-[#9de6e1]"><Phone size={20} aria-hidden="true" /> +1 (469) 850-1383</a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
