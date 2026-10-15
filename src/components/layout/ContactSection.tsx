"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { shell } from "@/lib/site-styles";

const input = "mt-2 min-h-13 w-full rounded-xl border border-[#bdd5dc] bg-white px-4 py-3 text-base text-[#12364a] outline-none transition-[border-color,box-shadow] placeholder:text-[#7b929d] focus:border-[#0068a5] focus:shadow-[0_0_0_3px_rgba(0,104,165,.12)]";

export function ContactSection() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submitEnquiry(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "contact",
          name: data.get("name"),
          email: data.get("email"),
          organization: data.get("organization"),
          phone: data.get("phone"),
          interest: data.get("interest"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your request.");
      form.reset();
      setMessage("Thank you. Your enquiry has been submitted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Unable to send your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 bg-[#082b3e] py-16 text-white md:py-20">
      <div className={`${shell} grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-16`}>
        <div>
          <span className="text-sm font-semibold tracking-[.14em] text-[#80dbdc] uppercase">Contact our team</span>
          <h2 id="contact-title" className="mt-4 text-[clamp(2.4rem,3.6vw,4rem)] leading-[1.1] font-semibold tracking-[-.025em]">Let&apos;s move research forward.</h2>
          <p className="mt-6 max-w-125 text-lg leading-relaxed text-[#c2dce2]">Tell us what you are working on. We will help connect you with the right clinical, data or technology expertise.</p>
          <div className="mt-8 grid gap-4 text-base font-medium">
            <a href="mailto:services@trumindsclinical.com" className="inline-flex w-fit items-center gap-3 text-white hover:text-[#9de6e1]"><Mail size={19} aria-hidden="true" /> services@trumindsclinical.com</a>
            <a href="tel:+14698501383" className="inline-flex w-fit items-center gap-3 text-white hover:text-[#9de6e1]"><Phone size={19} aria-hidden="true" /> +1 (469) 850-1383</a>
          </div>
        </div>
        <form onSubmit={submitEnquiry} className="rounded-[1.75rem] bg-[#f4f9fa] p-6 text-[#12364a] shadow-[0_24px_60px_rgba(0,0,0,.14)] sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-base font-semibold">Full name <span className="text-[#0068a5]">*</span><input className={input} name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label className="text-base font-semibold">Work email <span className="text-[#0068a5]">*</span><input className={input} name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
            <label className="text-base font-semibold">Organization<input className={input} name="organization" autoComplete="organization" placeholder="Company or organization" /></label>
            <label className="text-base font-semibold">Phone<input className={input} name="phone" type="tel" autoComplete="tel" placeholder="Phone number" /></label>
          </div>
          <label className="mt-5 block text-base font-semibold">What can we help with?
            <select className={input} name="interest" defaultValue="Clinical research services">
              <option>Clinical research services</option><option>FSP services</option><option>Clinical staffing</option><option>TruMinds AI and TruForm</option><option>Other enquiry</option>
            </select>
          </label>
          <label className="mt-5 block text-base font-semibold">Your message <span className="text-[#0068a5]">*</span><textarea className={`${input} min-h-32 resize-y`} name="message" required rows={4} placeholder="Tell us about your project or question" /></label>
          <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-[#55717f]"><input type="checkbox" required className="mt-1 size-4 shrink-0 accent-[#0068a5]" /><span>I agree to the handling of my details as described in the <a className="font-semibold text-[#0068a5] underline" href="/privacy-policy">Privacy Policy</a>.</span></label>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#d4e4e8] pt-6">
            <p className="max-w-100 text-sm leading-relaxed text-[#617b88]">We will contact you using the details provided.</p>
            <button type="submit" disabled={submitting} className="inline-flex min-h-13 cursor-pointer items-center gap-3 rounded-full bg-[#0068a5] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#005480] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]">{submitting ? "Submitting…" : "Submit"} <ArrowUpRight size={19} aria-hidden="true" /></button>
          </div>
          {message && <p role="status" className="mt-4 text-sm font-medium text-[#006779]">{message}</p>}
        </form>
      </div>
    </section>
  );
}
