"use client";

import { useId, useState } from "react";

const field = "mt-2 min-h-13 w-full rounded-xl border border-[#bdd5dc] bg-white px-4 py-3 text-lg font-medium text-[#12364a] outline-none transition-[border-color,box-shadow] placeholder:text-[#587181] focus:border-[#0068a5] focus:shadow-[0_0_0_3px_rgba(0,104,165,.12)]";

export function CompactContactForm() {
  const prefix = useId();
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);
    setSubmitting(true);
    setFailed(false);
    setStatus("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "contact", name: values.get("name"), email: values.get("email"), message: values.get("message") }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to send your request. Please try again.");
      form.reset();
      setStatus("Thank you. Your enquiry has been submitted.");
    } catch (error) {
      setFailed(true);
      setStatus(error instanceof Error ? error.message : "Unable to send your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form aria-label="Quick enquiry" aria-busy={submitting} onSubmit={submit} className="copy-on-light min-w-0 rounded-2xl border border-[#d5e6eb] bg-[#f4f9fa] p-5 text-[#12364a] sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-lg font-medium" htmlFor={`${prefix}-name`}>Full name <span className="text-[#0068a5]">*</span><input id={`${prefix}-name`} name="name" autoComplete="name" required maxLength={120} placeholder="Your name" className={field} /></label>
        <label className="text-lg font-medium" htmlFor={`${prefix}-email`}>Email <span className="text-[#0068a5]">*</span><input id={`${prefix}-email`} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" className={field} /></label>
      </div>
      <label className="mt-4 block text-lg font-medium" htmlFor={`${prefix}-message`}>Message <span className="text-[#0068a5]">*</span><textarea id={`${prefix}-message`} name="message" required maxLength={5000} rows={3} placeholder="Tell us how we can help" className={`${field} min-h-24 resize-y`} /></label>
      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <label className="flex min-w-0 items-start gap-3 text-lg font-medium leading-relaxed"><input name="consent" type="checkbox" required className="mt-1 size-5 shrink-0 accent-[#0068a5]" /><span>I agree to the <a href="/privacy-policy" className="text-[#0068a5] underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]">Privacy Policy</a>.</span></label>
        <button type="submit" disabled={submitting} className="inline-flex min-h-12 w-fit shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#0068a5] px-7 py-3 text-lg font-medium text-white transition-colors hover:bg-[#005480] disabled:cursor-wait disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0068a5]">{submitting ? "Submitting…" : "Submit"}</button>
      </div>
      {status && <p role={failed ? "alert" : "status"} className={`mt-4 text-lg font-medium leading-relaxed ${failed ? "text-[#9c2929]" : "text-[#006779]"}`}>{status}</p>}
    </form>
  );
}
