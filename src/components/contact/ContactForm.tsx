"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const input = "mt-2 min-h-14 w-full rounded-xl border border-[#bdd5dc] bg-white px-4 py-3 text-lg font-medium text-[#12364a] outline-none transition-[border-color,box-shadow] placeholder:text-[#587181] focus:border-[#0068a5] focus:shadow-[0_0_0_3px_rgba(0,104,165,.12)]";

export function ContactForm({ heading = false }: { heading?: boolean }) {
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
        <form aria-label="Contact enquiry" aria-busy={submitting} onSubmit={submitEnquiry} className="copy-on-light rounded-[1.75rem] bg-[#f4f9fa] p-6 text-[#12364a] shadow-[0_24px_60px_rgba(0,0,0,.14)] sm:p-8">
          {heading && <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#d4e4e8] pb-6"><div><h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#0a2038] sm:text-4xl">Send an enquiry.</h2><p className="mt-3 text-lg font-medium leading-relaxed text-black">Tell us about your project and the support you need.</p></div><span className="text-lg font-medium text-[#365a70]">* Required fields</span></div>}
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-lg font-medium">Full name <span className="text-[#0068a5]">*</span><input className={input} name="name" autoComplete="name" required placeholder="Your name" /></label>
            <label className="text-lg font-medium">Work email <span className="text-[#0068a5]">*</span><input className={input} name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
            <label className="text-lg font-medium">Organization<input className={input} name="organization" autoComplete="organization" placeholder="Company or organization" /></label>
            <label className="text-lg font-medium">Phone<input className={input} name="phone" type="tel" autoComplete="tel" placeholder="Phone number" /></label>
          </div>
          <label className="mt-5 block text-lg font-medium">What can we help with?
            <select className={input} name="interest" defaultValue="Clinical research services">
              <option>Clinical research services</option><option>FSP services</option><option>Clinical staffing</option><option>TruMinds AI and TruForm</option><option>Other enquiry</option>
            </select>
          </label>
          <label className="mt-5 block text-lg font-medium">Your message <span className="text-[#0068a5]">*</span><textarea className={`${input} min-h-32 resize-y`} name="message" required rows={4} placeholder="Tell us about your project or question" /></label>
          <label className="mt-5 flex items-start gap-3 text-lg font-medium leading-relaxed text-[#294c5e]"><input name="consent" type="checkbox" required className="mt-1 size-5 shrink-0 accent-[#0068a5]" /><span>I agree to the handling of my details as described in the <a className="font-medium text-[#0068a5] underline" href="/privacy-policy">Privacy Policy</a>.</span></label>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#d4e4e8] pt-6">
            <p className="max-w-100 text-lg leading-relaxed text-[#617b88]">We will contact you using the details provided.</p>
            <button type="submit" disabled={submitting} className="inline-flex min-h-14 cursor-pointer items-center gap-3 rounded-full bg-[#0068a5] px-7 py-3 text-lg font-medium text-white transition-colors hover:bg-[#005480] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]">{submitting ? "Submitting…" : "Submit"} <ArrowUpRight size={21} aria-hidden="true" /></button>
          </div>
          {message && <p role="status" className="mt-4 text-lg font-medium text-[#006779]">{message}</p>}
        </form>
  );
}
