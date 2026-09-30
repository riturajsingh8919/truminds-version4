"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Dna,
  FileSearch,
  Plus,
} from "lucide-react";
import {
  eyebrow,
  eyebrowLine,
  section,
  shell,
  tealButton,
  title,
} from "@/lib/site-styles";

const companyTypes = [
  { label: "Pharma", icon: Building2 },
  { label: "Biotech", icon: Dna },
  { label: "CRO", icon: FileSearch },
  { label: "Other", icon: Plus },
];
const focusAreas = [
  "Oncology",
  "Cardiovascular",
  "Infectious diseases",
  "Neuroscience",
  "Rare diseases",
  "Immunology",
  "Ophthalmology",
  "Metabolic health",
  "Other",
];
const phases = [
  "Phase I",
  "Phase II",
  "Phase III",
  "Phase IV",
  "Observational",
  "Other",
];
const needs = [
  "Full-service CRO",
  "FSP support",
  "Clinical staffing",
  "Data management",
  "Biostatistics",
  "Statistical programming",
  "TruForm platform",
  "Other",
];
const engagements = [
  "A specific study",
  "Ongoing support",
  "Exploring options",
];

export function ConsultationJourney() {
  const [step, setStep] = useState(1);
  const [company, setCompany] = useState("Biotech");
  const [selectedFocus, setSelectedFocus] = useState<string[]>([]);
  const [phase, setPhase] = useState("");
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([]);
  const [engagement, setEngagement] = useState("");
  const [error, setError] = useState("");
  const [contact, setContact] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  function toggle(
    value: string,
    current: string[],
    update: (next: string[]) => void,
  ) {
    update(
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
    setError("");
  }

  function next() {
    if (step === 1 && (!selectedFocus.length || !phase)) {
      setError("Choose at least one area of focus and a study phase.");
      return;
    }
    if (step === 2 && (!selectedNeeds.length || !engagement)) {
      setError(
        "Choose at least one need and how you would like to work together.",
      );
      return;
    }
    setError("");
    setStep(step + 1);
  }

  function openEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [
      "Hello TruMinds Clinical,",
      "",
      "I would like to discuss a clinical research project.",
      "",
      "Organization type: " + company,
      "Areas of focus: " + selectedFocus.join(", "),
      "Study phase: " + phase,
      "Support needed: " + selectedNeeds.join(", "),
      "Engagement: " + engagement,
      "",
      "Name: " + contact.name.trim(),
      "Organization: " + contact.organization.trim(),
      "Email: " + contact.email.trim(),
      "Phone: " + (contact.phone.trim() || "Not provided"),
      "",
      "Project details:",
      contact.message.trim() ||
        "I would welcome a conversation about my project.",
    ].join("\n");
    window.location.href =
      "mailto:services@trumindsclinical.com?subject=" +
      encodeURIComponent("New clinical research enquiry") +
      "&body=" +
      encodeURIComponent(body);
  }

  const field =
    "mt-2 block min-h-12 w-full rounded-sm border border-[#d4e2e7] bg-white px-4 py-3 text-[#0a2b40] outline-none focus:border-[#009d9d]";
  const choice =
    "inline-flex min-h-11 cursor-pointer items-center gap-2.5 border border-[#d8e6e9] bg-white px-4 py-2 text-sm font-semibold text-[#294c5e] transition hover:border-[#009e9d] has-checked:border-[#009e9d] has-checked:bg-[#e7f7f6]";
  const pill =
    "min-h-10 border border-[#d8e6e9] px-4 py-2 text-sm font-semibold text-[#294c5e] transition hover:border-[#009e9d]";
  const actionRow =
    "mt-8 flex items-center justify-between gap-3 border-t border-[#e3ebee] pt-6";
  const back =
    "inline-flex items-center gap-2 text-sm font-bold text-[#477084] hover:text-[#0068a5]";
  return (
    <section
      id="consultation"
      aria-labelledby="consultation-title"
      className={`${section} bg-[#07283b]`}
    >
      <div
        className={`${shell} grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20`}
      >
        <div className="lg:sticky lg:top-36">
          <p className={`${eyebrow} text-[#80e6df]`}>
            <span className={eyebrowLine} />
            How to get started
          </p>
          <h2 id="consultation-title" className={`${title} text-white`}>
            Every project starts
            <br />
            <span className="text-[#6addd8]">with a conversation.</span>
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#c1d3dc]">
            Tell us a little about your organization and your goals. We will
            help you find the right people, services and technology for the next
            step.
          </p>
          <div className="mt-12 hidden flex-wrap items-center gap-3 text-xs font-bold tracking-wider text-[#9cc5cf] uppercase lg:flex">
            <span>01 Share your needs</span>
            <span className="h-px w-5 bg-white/30" />
            <span>02 Choose your support</span>
            <span className="h-px w-5 bg-white/30" />
            <span>03 Get in touch</span>
          </div>
        </div>
        <div className="overflow-hidden bg-[#f8fbfc] shadow-[0_25px_80px_rgba(0,0,0,.16)]">
          <div
            className="grid grid-cols-3 border-b border-[#dfebee] bg-white px-4 py-5 sm:px-8"
            aria-label={"Step " + step + " of 3"}
          >
            {["Your needs", "Your project", "Get in touch"].map(
              (label, index) => (
                <div
                  className={`flex items-center gap-2 text-xs font-bold sm:gap-3 sm:text-sm ${index + 1 <= step ? "text-[#0068a5]" : "text-[#9aadb6]"}`}
                  key={label}
                >
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full text-[.65rem] sm:size-8 ${index + 1 <= step ? "bg-[#02bbb4] text-[#073044]" : "bg-[#e9f0f2]"}`}
                  >
                    {index + 1 < step ? (
                      <Check size={15} />
                    ) : (
                      String(index + 1).padStart(2, "0")
                    )}
                  </span>
                  <strong>{label}</strong>
                </div>
              ),
            )}
          </div>
          {step === 1 && (
            <div className="p-6 sm:p-9">
              <span className="text-xs font-extrabold tracking-widest text-[#008b96] uppercase">
                01 / Your needs
              </span>
              <h3 className="mt-3 text-[clamp(1.7rem,2.3vw,2.35rem)] font-semibold tracking-tight text-[#0a2b40]">
                Welcome. Let&apos;s find your fit.
              </h3>
              <p className="mt-2 text-[#657f8a]">
                Tell us about your organization.
              </p>
              <div
                className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4"
                role="group"
                aria-label="Organization type"
              >
                {companyTypes.map(({ label, icon: Icon }) => (
                  <button
                    className={`flex min-h-24 flex-col items-center justify-center gap-2 border p-2 text-sm font-bold transition ${company === label ? "border-[#00a8a8] bg-[#e5f7f6] text-[#006d7e]" : "border-[#d9e7ea] bg-white text-[#34586a] hover:border-[#00a8a8]"}`}
                    type="button"
                    onClick={() => setCompany(label)}
                    aria-pressed={company === label}
                    key={label}
                  >
                    <Icon size={24} strokeWidth={1.5} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
              <p className="mt-7 mb-3 text-sm font-bold text-[#143c50]">
                Select your areas of focus{" "}
                <span className="font-normal text-[#7e98a3]">
                  (choose as many as apply)
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <label className={choice} key={area}>
                    <input
                      className="accent-[#009e9d]"
                      type="checkbox"
                      checked={selectedFocus.includes(area)}
                      onChange={() =>
                        toggle(area, selectedFocus, setSelectedFocus)
                      }
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
              <p className="mt-7 mb-3 text-sm font-bold text-[#143c50]">
                Study or project phase
              </p>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Study or project phase"
              >
                {phases.map((item) => (
                  <button
                    className={`${pill} ${phase === item ? "border-[#009e9d] bg-[#e7f7f6] text-[#007587]" : "bg-white"}`}
                    type="button"
                    aria-pressed={phase === item}
                    onClick={() => {
                      setPhase(item);
                      setError("");
                    }}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {error && (
                <p
                  className="mt-4 text-sm font-semibold text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              )}
              <div className={actionRow}>
                <span className="text-xs text-[#78939f]">Step 1 of 3</span>
                <button className={tealButton} type="button" onClick={next}>
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="p-6 sm:p-9">
              <span className="text-xs font-extrabold tracking-widest text-[#008b96] uppercase">
                02 / Your project
              </span>
              <h3 className="mt-3 text-[clamp(1.7rem,2.3vw,2.35rem)] font-semibold tracking-tight text-[#0a2b40]">
                What can we help move forward?
              </h3>
              <p className="mt-2 text-[#657f8a]">
                Select the support you are interested in. We will use your
                choices to shape the conversation.
              </p>
              <div className="mt-7 grid gap-2 sm:grid-cols-2">
                {needs.map((need) => (
                  <label className={choice} key={need}>
                    <input
                      className="accent-[#009e9d]"
                      type="checkbox"
                      checked={selectedNeeds.includes(need)}
                      onChange={() =>
                        toggle(need, selectedNeeds, setSelectedNeeds)
                      }
                    />
                    <span>{need}</span>
                  </label>
                ))}
              </div>
              <p className="mt-7 mb-3 text-sm font-bold text-[#143c50]">
                How would you like to work together?
              </p>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Engagement type"
              >
                {engagements.map((item) => (
                  <button
                    className={`${pill} ${engagement === item ? "border-[#009e9d] bg-[#e7f7f6] text-[#007587]" : "bg-white"}`}
                    type="button"
                    aria-pressed={engagement === item}
                    onClick={() => {
                      setEngagement(item);
                      setError("");
                    }}
                    key={item}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {error && (
                <p
                  className="mt-4 text-sm font-semibold text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              )}
              <div className={actionRow}>
                <button
                  className={back}
                  type="button"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button className={tealButton} type="button" onClick={next}>
                  Continue <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
          {step === 3 && (
            <form className="p-6 sm:p-9" onSubmit={openEmail}>
              <span className="text-xs font-extrabold tracking-widest text-[#008b96] uppercase">
                03 / Get in touch
              </span>
              <h3 className="mt-3 text-[clamp(1.7rem,2.3vw,2.35rem)] font-semibold tracking-tight text-[#0a2b40]">
                Let&apos;s start a conversation.
              </h3>
              <p className="mt-2 text-[#657f8a]">
                Share your details and we will prepare an email draft with your
                selections.
              </p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold text-[#143c50]">
                  Full name
                  <input
                    className={field}
                    required
                    autoComplete="name"
                    value={contact.name}
                    onChange={(event) =>
                      setContact({ ...contact, name: event.target.value })
                    }
                    placeholder="Your name"
                  />
                </label>
                <label className="text-sm font-bold text-[#143c50]">
                  Organization
                  <input
                    className={field}
                    required
                    autoComplete="organization"
                    value={contact.organization}
                    onChange={(event) =>
                      setContact({
                        ...contact,
                        organization: event.target.value,
                      })
                    }
                    placeholder="Company or organization"
                  />
                </label>
                <label className="text-sm font-bold text-[#143c50]">
                  Work email
                  <input
                    className={field}
                    required
                    type="email"
                    autoComplete="email"
                    value={contact.email}
                    onChange={(event) =>
                      setContact({ ...contact, email: event.target.value })
                    }
                    placeholder="you@company.com"
                  />
                </label>
                <label className="text-sm font-bold text-[#143c50]">
                  Phone{" "}
                  <span className="font-normal text-[#7e98a3]">(optional)</span>
                  <input
                    className={field}
                    type="tel"
                    autoComplete="tel"
                    value={contact.phone}
                    onChange={(event) =>
                      setContact({ ...contact, phone: event.target.value })
                    }
                    placeholder="Phone number"
                  />
                </label>
              </div>
              <label className="mt-5 block text-sm font-bold text-[#143c50]">
                Anything else we should know?{" "}
                <span className="font-normal text-[#7e98a3]">(optional)</span>
                <textarea
                  className={field}
                  rows={4}
                  value={contact.message}
                  onChange={(event) =>
                    setContact({ ...contact, message: event.target.value })
                  }
                  placeholder="Tell us about your goals or timeline"
                />
              </label>
              <p className="mt-5 text-xs leading-relaxed text-[#6e8995]">
                Your email application will open with your request ready for you
                to review and send. Nothing is submitted from this page.
              </p>
              <div className={actionRow}>
                <button
                  className={back}
                  type="button"
                  onClick={() => setStep(2)}
                >
                  <ArrowLeft size={18} /> Back
                </button>
                <button className={tealButton} type="submit">
                  Open email draft <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
