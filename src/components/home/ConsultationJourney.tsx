"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Dna,
  FileSearch,
  Plus,
} from "lucide-react";
import { shell, title } from "@/lib/site-styles";

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
const steps = ["Your needs", "Your project", "Get in touch"];

const choiceBase =
  "inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-base font-medium transition-[background-color,border-color,color,transform,box-shadow] duration-300 hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-[#0068a5] focus-within:ring-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068a5] motion-reduce:transition-none";
const choiceActive =
  "border-[#0068a5] bg-[#0068a5] text-white shadow-[0_6px_16px_rgba(0,104,165,.14)]";
const choiceIdle =
  "border-[#c8d9e0] bg-white text-[#294c5e] hover:border-[#0068a5] hover:bg-[#f5fbfc]";
const field =
  "mt-1 block min-h-12 w-full rounded-none border-0 border-b-2 border-[#c8d9e0] bg-transparent px-0 py-2.5 text-base text-[#0a2b40] outline-none transition-colors placeholder:text-[#849ba5] focus:border-[#0068a5]";
const primaryAction =
  "group inline-flex min-h-12 cursor-pointer items-center justify-center gap-3 rounded-full bg-[#0068a5] px-6 py-2.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(0,104,165,.15)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#005480] hover:shadow-[0_12px_25px_rgba(0,104,165,.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5] motion-reduce:transition-none";
const backAction =
  "inline-flex cursor-pointer items-center gap-2 text-base font-semibold text-[#476b7c] transition-colors hover:text-[#0068a5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]";
const stepHeading =
  "scroll-mt-32 text-[clamp(1.75rem,2.4vw,2.5rem)] leading-tight font-semibold tracking-[-.04em] text-[#0a2038] outline-none";

function MultiChoice({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className={`${choiceBase} ${checked ? choiceActive : choiceIdle}`}>
      <input
        className="sr-only"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span
        aria-hidden="true"
        className={`grid size-4 place-items-center rounded-full border ${checked ? "border-white bg-white text-[#0068a5]" : "border-[#91b1be]"}`}
      >
        {checked && <Check size={12} strokeWidth={3} />}
      </span>
      {label}
    </label>
  );
}

function SingleChoice({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`${choiceBase} ${selected ? choiceActive : choiceIdle}`}
      type="button"
      aria-pressed={selected}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

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
  const headingRef = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(step);

  useEffect(() => {
    if (previousStep.current === step) return;
    previousStep.current = step;
    headingRef.current?.focus({ preventScroll: true });
    headingRef.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  }, [step]);

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

  return (
    <section
      id="consultation"
      aria-labelledby="consultation-title"
      className="bg-white py-18 md:py-24 xl:py-28"
    >
      <div className={shell}>
        <div className="mx-auto grid max-w-300 gap-4 border-b border-[#d9e5e9] pb-8 lg:grid-cols-[1.05fr_.95fr] lg:items-end lg:gap-12">
          <h2
            id="consultation-title"
            className={title}
          >
            How to <span className="text-[#0068a5]">get started.</span>
          </h2>
          <p className="max-w-125 text-base leading-relaxed text-[#47687b] md:text-lg">
            Tell us about your study and the support you need. Your choices
            become an email draft you can review and send to our team.
          </p>
        </div>

        <nav aria-label="Enquiry progress" className="mx-auto mt-6 max-w-300">
          <ol className="grid grid-cols-3 gap-2 sm:gap-4">
            {steps.map((label, index) => {
              const stage = index + 1;
              const current = stage === step;
              const complete = stage < step;
              return (
                <li key={label}>
                  <button
                    type="button"
                    disabled={!current && !complete}
                    onClick={() => {
                      setError("");
                      setStep(stage);
                    }}
                    aria-current={current ? "step" : undefined}
                    className={`flex min-h-13 w-full items-center gap-2 border-b-2 px-1 pb-2 text-left transition-[border-color,color] duration-300 sm:gap-3 sm:px-2 ${current ? "border-[#0068a5] text-[#0a2038]" : complete ? "cursor-pointer border-[#00aaa9] text-[#2a596a] hover:text-[#0068a5]" : "cursor-not-allowed border-[#d9e5e9] text-[#8ba2ae]"}`}
                  >
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full text-xs font-bold sm:size-9 sm:text-sm ${current ? "bg-[#0068a5] text-white" : complete ? "bg-[#d5efee] text-[#006b7e]" : "bg-[#eef2f4] text-[#8299a4]"}`}
                    >
                      {complete ? (
                        <Check size={18} aria-hidden="true" />
                      ) : (
                        String(stage).padStart(2, "0")
                      )}
                    </span>
                    <span className="text-sm leading-tight font-semibold sm:text-base">
                      {label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mx-auto max-w-300 pt-8 md:pt-10">
          {step === 1 && (
            <div>
              <h3 ref={headingRef} tabIndex={-1} className={stepHeading}>
                Welcome. Let&apos;s find your fit.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5b7887] md:text-lg">
                Start with a few details about your organization and study.
              </p>

              <div className="mt-7" role="group" aria-label="Organization type">
                <p className="mb-3 text-base font-semibold text-[#153b50]">
                  Your company
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {companyTypes.map(({ label, icon: Icon }) => (
                    <button
                      className={`${choiceBase} min-w-34 justify-center ${company === label ? choiceActive : choiceIdle}`}
                      type="button"
                      onClick={() => setCompany(label)}
                      aria-pressed={company === label}
                      key={label}
                    >
                      <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <fieldset className="mt-7">
                <legend className="mb-3 text-base font-semibold text-[#153b50]">
                  Areas of focus{" "}
                  <span className="font-normal text-[#6c8794]">
                    (choose as many as apply)
                  </span>
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {focusAreas.map((area) => (
                    <MultiChoice
                      label={area}
                      checked={selectedFocus.includes(area)}
                      onChange={() =>
                        toggle(area, selectedFocus, setSelectedFocus)
                      }
                      key={area}
                    />
                  ))}
                </div>
              </fieldset>

              <div className="mt-7" role="group" aria-label="Study or project phase">
                <p className="mb-3 text-base font-semibold text-[#153b50]">
                  Study or project phase
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {phases.map((item) => (
                    <SingleChoice
                      label={item}
                      selected={phase === item}
                      onClick={() => {
                        setPhase(item);
                        setError("");
                      }}
                      key={item}
                    />
                  ))}
                </div>
              </div>

              {error && (
                <p className="mt-6 text-base font-semibold text-[#a12f39]" role="alert">
                  {error}
                </p>
              )}
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#d9e5e9] pt-6">
                <span className="text-base text-[#6c8794]">Your needs</span>
                <button className={primaryAction} type="button" onClick={next}>
                  Continue
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 ref={headingRef} tabIndex={-1} className={stepHeading}>
                What can we help move forward?
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5b7887] md:text-lg">
                Choose the expertise you would like to explore with our team.
              </p>

              <fieldset className="mt-7">
                <legend className="mb-3 text-base font-semibold text-[#153b50]">
                  Support you need{" "}
                  <span className="font-normal text-[#6c8794]">
                    (choose as many as apply)
                  </span>
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {needs.map((need) => (
                    <MultiChoice
                      label={need}
                      checked={selectedNeeds.includes(need)}
                      onChange={() =>
                        toggle(need, selectedNeeds, setSelectedNeeds)
                      }
                      key={need}
                    />
                  ))}
                </div>
              </fieldset>

              <div className="mt-7" role="group" aria-label="Engagement type">
                <p className="mb-3 text-base font-semibold text-[#153b50]">
                  How would you like to work together?
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {engagements.map((item) => (
                    <SingleChoice
                      label={item}
                      selected={engagement === item}
                      onClick={() => {
                        setEngagement(item);
                        setError("");
                      }}
                      key={item}
                    />
                  ))}
                </div>
              </div>

              {error && (
                <p className="mt-6 text-base font-semibold text-[#a12f39]" role="alert">
                  {error}
                </p>
              )}
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#d9e5e9] pt-6">
                <button className={backAction} type="button" onClick={() => setStep(1)}>
                  <ArrowLeft size={18} aria-hidden="true" /> Back
                </button>
                <button className={primaryAction} type="button" onClick={next}>
                  Continue
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={19} aria-hidden="true" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <form onSubmit={openEmail}>
              <h3 ref={headingRef} tabIndex={-1} className={stepHeading}>
                Let&apos;s start a conversation.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#5b7887] md:text-lg">
                Add your details and we will prepare an email with your choices.
              </p>
              <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <label className="text-base font-semibold text-[#153b50]">
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
                <label className="text-base font-semibold text-[#153b50]">
                  Organization
                  <input
                    className={field}
                    required
                    autoComplete="organization"
                    value={contact.organization}
                    onChange={(event) =>
                      setContact({ ...contact, organization: event.target.value })
                    }
                    placeholder="Company or organization"
                  />
                </label>
                <label className="text-base font-semibold text-[#153b50]">
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
                <label className="text-base font-semibold text-[#153b50]">
                  Phone <span className="font-normal text-[#6c8794]">(optional)</span>
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
              <label className="mt-7 block text-base font-semibold text-[#153b50]">
                Anything else we should know?{" "}
                <span className="font-normal text-[#6c8794]">(optional)</span>
                <textarea
                  className={field}
                  rows={3}
                  value={contact.message}
                  onChange={(event) =>
                    setContact({ ...contact, message: event.target.value })
                  }
                  placeholder="Tell us about your goals or timeline"
                />
              </label>
              <p className="mt-6 max-w-170 text-base leading-relaxed text-[#587684]">
                Your email application will open with this request ready to
                review and send. Nothing is submitted from this page.
              </p>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-[#d9e5e9] pt-6">
                <button className={backAction} type="button" onClick={() => setStep(2)}>
                  <ArrowLeft size={18} aria-hidden="true" /> Back
                </button>
                <button className={primaryAction} type="submit">
                  Prepare email
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={19} aria-hidden="true" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
