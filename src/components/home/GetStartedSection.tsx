"use client";

import React, { useState, useRef } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Paperclip,
  X,
  AlertCircle,
  Sparkles,
  Building,
  Mail,
  User,
  Phone,
  MessageSquare,
  FileCheck2,
} from "lucide-react";

// Option sets tailored to TruMinds Clinical & Biometrics domain
const COMPANY_TYPES = [
  "Pharma",
  "Biotech",
  "CRO",
  "Medical Device",
  "Diagnostic",
  "Other",
];

const THERAPEUTIC_AREAS = [
  "Oncology & Hematology",
  "Cardiovascular",
  "Neuroscience (CNS)",
  "Immunology",
  "Infectious Diseases",
  "Endocrinology & Metabolic",
  "Ophthalmology",
  "Rare Diseases",
  "Pediatric",
  "Pulmonology",
  "Dermatology",
  "Other",
];

const STUDY_TYPES = [
  "Phase I",
  "Phase II",
  "Phase III",
  "Phase IV",
  "Observational / RWE",
  "Pre-Clinical / Discovery",
  "Other",
];

const BUSINESS_NEEDS = [
  "Statistical programming (SAS / R)",
  "Clinical data management",
  "Biostatistics & Study Design",
  "CDISC migration (SDTM / ADaM)",
  "TruMinds AI Solutions",
  "Full-service CRO outsourcing",
  "FSP model",
  "Clinical staffing solutions",
  "TruForm platform suite",
  "Cut operational cost",
  "Time sensitive delivery",
  "Regulatory submission support",
  "Nearshore / Global hybrid delivery",
  "Formal proposal / RFP required",
  "Rescue study support",
  "Software development & validation",
];

const ENGAGEMENT_TYPES = [
  "Short-term project",
  "Long-term FSP",
  "Strategic partnership",
  "Ad-hoc / On-demand consulting",
];

export function GetStartedSection() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form state
  const [selectedCompany, setSelectedCompany] = useState<string>("Pharma");
  const [selectedTherapeutic, setSelectedTherapeutic] = useState<string[]>([
    "Oncology & Hematology",
  ]);
  const [selectedStudyType, setSelectedStudyType] =
    useState<string>("Phase II");
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    "Statistical programming (SAS / R)",
    "Clinical data management",
  ]);
  const [selectedEngagement, setSelectedEngagement] =
    useState<string>("Long-term FSP");

  // Step 3 Contact form inputs
  const [name, setName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneCountry, setPhoneCountry] = useState<string>("+1");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [agreedToPrivacy, setAgreedToPrivacy] = useState<boolean>(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [ticketId, setTicketId] = useState<string>("TM-REQ-2026-8492");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Toggle helpers
  const toggleTherapeutic = (item: string) => {
    setSelectedTherapeutic((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const toggleNeed = (item: string) => {
    setSelectedNeeds((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Step validation
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "This field is required";
    if (!companyName.trim()) newErrors.companyName = "This field is required";
    if (!email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message.trim()) newErrors.message = "This field is required";
    if (!agreedToPrivacy)
      newErrors.privacy = "You must agree to the privacy policy to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (selectedTherapeutic.length === 0) {
        alert("Please pick at least one therapeutic area.");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (selectedNeeds.length === 0) {
        alert("Please pick at least one business need.");
        return;
      }
      setCurrentStep(3);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setTicketId(`TM-REQ-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setName("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setAttachedFile(null);
    setAgreedToPrivacy(false);
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="get-started"
      className="relative bg-[#0B192C] text-slate-900 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* =========================================================================
          AMBIENT BACKGROUND SHAPES & BRAND THEME (DARK NAVY FRAME)
          ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Radial Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-125 bg-radial from-[#0068a5]/30 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute -top-32 -right-32 w-150 h-150 bg-radial from-[#0068a5]/35 via-[#0284c7]/15 to-transparent rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -left-32 w-150 h-150 bg-radial from-[#0284c7]/30 via-[#0068a5]/15 to-transparent rounded-full blur-3xl opacity-50" />

        {/* Top-Right Massive Organic TruMinds Curve */}
        <svg
          className="absolute -top-16 -right-16 w-137.5 sm:w-175 lg:w-212.5 h-auto opacity-35"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="startGradTop"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0068a5" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0B192C" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="startStrokeTop"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.30" />
              <stop offset="100%" stopColor="#0068a5" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M 60 520 C 45 610 65 700 130 750 C 195 800 270 765 340 700 C 420 625 500 580 600 580 C 700 580 780 625 860 700 C 930 765 1005 800 1070 750 C 1135 700 1155 610 1140 520 C 1120 380 1060 250 950 160 C 850 80 730 40 600 40 C 470 40 350 80 250 160 C 140 250 80 380 60 520 Z"
            fill="url(#startGradTop)"
            stroke="url(#startStrokeTop)"
            strokeWidth="2"
          />
        </svg>

        {/* Bottom-Left Flowing Organic Wave Ribbon */}
        <svg
          className="absolute -bottom-24 -left-24 w-125 sm:w-162.5 lg:w-200 h-auto opacity-30"
          viewBox="0 0 1200 970"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="startGradBottom"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.40" />
              <stop offset="50%" stopColor="#0068a5" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#0B192C" stopOpacity="0.02" />
            </linearGradient>
            <linearGradient
              id="startStrokeBottom"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.50" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#004a98" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path
            d="M 60 520 C 45 610 65 700 130 750 C 195 800 270 765 340 700 C 420 625 500 580 600 580 C 700 580 780 625 860 700 C 930 765 1005 800 1070 750 C 1135 700 1155 610 1140 520 C 1120 380 1060 250 950 160 C 850 80 730 40 600 40 C 470 40 350 80 250 160 C 140 250 80 380 60 520 Z"
            fill="url(#startGradBottom)"
            stroke="url(#startStrokeBottom)"
            strokeWidth="2"
            transform="rotate(180 600 485)"
          />
        </svg>

        {/* Neural Network Arcs & Connected Nodes */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 80 220 Q 420 90 850 290 T 1550 160"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.5"
            strokeDasharray="8 8"
          />
          <path
            d="M 180 820 Q 680 640 1220 760"
            fill="none"
            stroke="#0284c7"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />
          <circle cx="420" cy="90" r="5" fill="#38bdf8" />
          <circle cx="850" cy="290" r="6" fill="#0284c7" />
          <circle cx="680" cy="640" r="5" fill="#38bdf8" />
          <circle cx="1220" cy="760" r="6" fill="#0284c7" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* =========================================================================
            WHITE INTERACTIVE MULTI-STEP CARD
            ========================================================================= */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-100 transition-all duration-300">
          {!isSubmitted ? (
            <div>
              {/* Form Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
                How to get started
              </h2>

              {/* =====================================================================
                  STEPPER PROGRESS BAR (Matching reference layout with TruMinds theme)
                  ===================================================================== */}
              <div className="rounded-full bg-slate-50 border border-slate-200/80 p-2 sm:p-3 mb-8 shadow-xs">
                <div className="flex items-center justify-between sm:justify-around px-2 sm:px-4">
                  {/* Step 1 */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center transition-all duration-300 ${
                        currentStep === 1
                          ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                          : currentStep > 1
                            ? "bg-primary/90 text-white"
                            : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {currentStep > 1 ? (
                        <Check className="w-4 h-4 stroke-3" />
                      ) : (
                        "1"
                      )}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold tracking-tight ${
                        currentStep === 1 ? "text-slate-900" : "text-slate-500"
                      }`}
                    >
                      Your needs
                    </span>
                  </div>

                  {/* Arrow 1 */}
                  <div className="hidden sm:flex items-center w-12 sm:w-16 lg:w-20 text-slate-300">
                    <div className="h-0.5 bg-slate-200 flex-1 relative">
                      <div
                        className={`h-0.5 bg-primary transition-all duration-500 ${
                          currentStep >= 2 ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 -ml-1" />
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center transition-all duration-300 ${
                        currentStep === 2
                          ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                          : currentStep > 2
                            ? "bg-primary/90 text-white"
                            : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {currentStep > 2 ? (
                        <Check className="w-4 h-4 stroke-3" />
                      ) : (
                        "2"
                      )}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold tracking-tight ${
                        currentStep === 2 ? "text-slate-900" : "text-slate-500"
                      }`}
                    >
                      Tell us more
                    </span>
                  </div>

                  {/* Arrow 2 */}
                  <div className="hidden sm:flex items-center w-12 sm:w-16 lg:w-20 text-slate-300">
                    <div className="h-0.5 bg-slate-200 flex-1 relative">
                      <div
                        className={`h-0.5 bg-primary transition-all duration-500 ${
                          currentStep >= 3 ? "w-full" : "w-0"
                        }`}
                      />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 -ml-1" />
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center transition-all duration-300 ${
                        currentStep === 3
                          ? "bg-primary text-white shadow-md shadow-primary/25 scale-105"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      3
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-bold tracking-tight ${
                        currentStep === 3 ? "text-slate-900" : "text-slate-500"
                      }`}
                    >
                      Get started
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Sub-Navigation (Previous / Next) */}
              <div className="flex items-center justify-between py-2 border-b border-slate-100 mb-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <span className="text-sm font-semibold text-slate-300 flex items-center gap-1.5 cursor-not-allowed">
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </span>
                )}

                {currentStep < 3 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer group"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

              {/* =====================================================================
                  STEP 1 CONTENT: YOUR NEEDS
                  ===================================================================== */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Question 1: Your company */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3.5">
                      Your company
                    </h3>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {COMPANY_TYPES.map((type) => {
                        const isSelected = selectedCompany === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedCompany(type)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-primary text-white border border-primary shadow-sm shadow-primary/20 scale-[1.02]"
                                : "bg-[#fbf7f0] text-slate-800 hover:bg-[#f5ede0] border border-[#f0e3cc]"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Question 2: Therapeutic areas (pick multiple) */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3.5">
                      Therapeutic areas{" "}
                      <span className="text-xs sm:text-sm font-normal text-slate-500">
                        (pick multiple)
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {THERAPEUTIC_AREAS.map((area) => {
                        const isSelected = selectedTherapeutic.includes(area);
                        return (
                          <button
                            key={area}
                            type="button"
                            onClick={() => toggleTherapeutic(area)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-primary text-white border border-primary shadow-sm shadow-primary/20 scale-[1.02]"
                                : "bg-[#fbf7f0] text-slate-800 hover:bg-[#f5ede0] border border-[#f0e3cc]"
                            }`}
                          >
                            {area}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Question 3: Type of study / project */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3.5">
                      Type of study / project
                    </h3>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {STUDY_TYPES.map((study) => {
                        const isSelected = selectedStudyType === study;
                        return (
                          <button
                            key={study}
                            type="button"
                            onClick={() => setSelectedStudyType(study)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-primary text-white border border-primary shadow-sm shadow-primary/20 scale-[1.02]"
                                : "bg-[#fbf7f0] text-slate-800 hover:bg-[#f5ede0] border border-[#f0e3cc]"
                            }`}
                          >
                            {study}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Next Button */}
                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-md shadow-primary/25 cursor-pointer active:scale-95 group"
                    >
                      <span>Continue to Details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* =====================================================================
                  STEP 2 CONTENT: TELL US MORE
                  ===================================================================== */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fadeIn">
                  {/* Question 1: Your business needs (pick multiple) */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3.5">
                      Your business needs{" "}
                      <span className="text-xs sm:text-sm font-normal text-slate-500">
                        (pick multiple)
                      </span>
                    </h3>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {BUSINESS_NEEDS.map((need) => {
                        const isSelected = selectedNeeds.includes(need);
                        return (
                          <button
                            key={need}
                            type="button"
                            onClick={() => toggleNeed(need)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-primary text-white border border-primary shadow-sm shadow-primary/20 scale-[1.02]"
                                : "bg-[#fbf7f0] text-slate-800 hover:bg-[#f5ede0] border border-[#f0e3cc]"
                            }`}
                          >
                            {need}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Question 2: Type of engagement */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3.5">
                      Type of engagement
                    </h3>
                    <div className="flex flex-wrap gap-2.5 sm:gap-3">
                      {ENGAGEMENT_TYPES.map((engagement) => {
                        const isSelected = selectedEngagement === engagement;
                        return (
                          <button
                            key={engagement}
                            type="button"
                            onClick={() => setSelectedEngagement(engagement)}
                            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                              isSelected
                                ? "bg-primary text-white border border-primary shadow-sm shadow-primary/20 scale-[1.02]"
                                : "bg-[#fbf7f0] text-slate-800 hover:bg-[#f5ede0] border border-[#f0e3cc]"
                            }`}
                          >
                            {engagement}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom Next Button */}
                  <div className="pt-6 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 hover:text-slate-900 font-semibold text-sm transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-md shadow-primary/25 cursor-pointer active:scale-95 group"
                    >
                      <span>Proceed to Contact Info</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* =====================================================================
                  STEP 3 CONTENT: GET STARTED (CONTACT FORM)
                  ===================================================================== */}
              {currentStep === 3 && (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 animate-fadeIn"
                >
                  {/* Selected Summary Pill for context */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-2">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      Your Selected Requirements:
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      <span className="font-bold text-slate-900">
                        {selectedCompany}
                      </span>{" "}
                      • {selectedStudyType} • {selectedEngagement} •{" "}
                      {selectedTherapeutic.slice(0, 3).join(", ")}
                      {selectedTherapeutic.length > 3 &&
                        ` +${selectedTherapeutic.length - 3} more`}
                    </p>
                  </div>

                  {/* Form Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {/* Name (Important / Required) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Your Full Name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name)
                              setErrors((prev) => ({ ...prev, name: "" }));
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-colors ${
                            errors.name
                              ? "border-red-500 bg-red-50/20 focus:border-red-500"
                              : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                          }`}
                        />
                        <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                      {errors.name && (
                        <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Company (Important / Required) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Company or Organization"
                          value={companyName}
                          onChange={(e) => {
                            setCompanyName(e.target.value);
                            if (errors.companyName)
                              setErrors((prev) => ({
                                ...prev,
                                companyName: "",
                              }));
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-colors ${
                            errors.companyName
                              ? "border-red-500 bg-red-50/20 focus:border-red-500"
                              : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                          }`}
                        />
                        <Building className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                      {errors.companyName && (
                        <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email (Important / Required) */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email)
                              setErrors((prev) => ({ ...prev, email: "" }));
                          }}
                          className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-colors ${
                            errors.email
                              ? "border-red-500 bg-red-50/20 focus:border-red-500"
                              : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                          }`}
                        />
                        <Mail className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number with country prefix */}
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                        Phone Number
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={phoneCountry}
                          onChange={(e) => setPhoneCountry(e.target.value)}
                          className="px-3 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm bg-slate-50 focus:outline-none focus:border-primary font-medium"
                        >
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1-ca">🇨🇦 +1</option>
                        </select>
                        <div className="relative flex-1">
                          <input
                            type="tel"
                            placeholder="(555) 000-0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                          />
                          <Phone className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message (Important / Required) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5">
                      Message / Project Details{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        placeholder="Please describe your clinical trial requirements, target timelines, therapeutic specifics, or required CDISC/biometrics standards..."
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message)
                            setErrors((prev) => ({ ...prev, message: "" }));
                        }}
                        className={`w-full px-4 py-3 rounded-xl border text-slate-900 text-sm focus:outline-none transition-colors resize-none ${
                          errors.message
                            ? "border-red-500 bg-red-50/20 focus:border-red-500"
                            : "border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary"
                        }`}
                      />
                      <MessageSquare className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                    {errors.message && (
                      <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* File Attachment Button */}
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      className="hidden"
                      id="file-attachment"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.zip"
                    />

                    {!attachedFile ? (
                      <label
                        htmlFor="file-attachment"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-primary transition-colors cursor-pointer group"
                      >
                        <Paperclip className="w-4 h-4 text-slate-700 group-hover:text-primary" />
                        <span className="underline decoration-slate-300 group-hover:decoration-primary underline-offset-4">
                          Add an attachment
                        </span>
                        <span className="text-xs font-normal text-slate-400">
                          (RFP, Protocol, or NDA - max 25MB)
                        </span>
                      </label>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800">
                        <Paperclip className="w-3.5 h-3.5 text-primary" />
                        <span className="truncate max-w-xs">
                          {attachedFile.name}
                        </span>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="text-slate-400 hover:text-red-500 p-0.5 rounded cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Privacy Policy Toggle / Consent (Required) */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={agreedToPrivacy}
                        onChange={(e) => {
                          setAgreedToPrivacy(e.target.checked);
                          if (errors.privacy)
                            setErrors((prev) => ({ ...prev, privacy: "" }));
                        }}
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                      />
                      <span className="text-xs sm:text-[13px] text-slate-600 leading-snug">
                        By using this form you agree with the storage and
                        handling of your data by this website. See our{" "}
                        <a
                          href="/privacy-policy"
                          className="text-primary underline hover:text-primary-hover font-semibold"
                        >
                          Privacy Policy
                        </a>
                        . <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.privacy}</span>
                      </p>
                    )}
                  </div>

                  {/* ReCAPTCHA note & Submit button */}
                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100">
                    <p className="text-[11px] text-slate-400 max-w-md leading-relaxed">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-9 py-3.5 rounded-full bg-primary hover:bg-primary-hover text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg shadow-primary/25 cursor-pointer active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting Request...</span>
                      ) : (
                        <>
                          <span>Send</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* =====================================================================
               STEP 4: SUBMISSION SUCCESS CONFIRMATION
               ===================================================================== */
            <div className="text-center py-10 sm:py-14 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <FileCheck2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <div className="max-w-xl mx-auto space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Thank You, {name}!
                </h3>
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  Your clinical project requirements have been successfully
                  submitted to the TruMinds Clinical operations and biometrics
                  leadership team.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-mono text-slate-600 inline-block">
                  Reference Ticket:{" "}
                  <span className="font-bold text-slate-900">{ticketId}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                Our directors will review your trial scope and deliver a
                tailored feasibility and resourcing response within 24 business
                hours.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition-all cursor-pointer"
                >
                  <span>Submit Another Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
