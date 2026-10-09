import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { shell, title } from "@/lib/site-styles";

type PolicySection = {
  heading: string;
  paragraphs: string[];
};

type PolicyPageProps = {
  heading: string;
  intro: string;
  sections: PolicySection[];
};

const related = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function PolicyPage({ heading, intro, sections }: PolicyPageProps) {
  return (
    <article className="bg-white text-[#0a2038]">
      <div className="border-b border-[#e1ebee] bg-[#f3f8f9] py-16 md:py-20">
        <div className={shell}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0068a5] transition-colors hover:text-[#003f68]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
          <h1 className={`${title} mt-7`}>{heading}</h1>
          <p className="mt-6 max-w-190 text-lg leading-[1.7] text-[#4e6879]">
            {intro}
          </p>
        </div>
      </div>

      <div className={`${shell} grid gap-12 py-16 md:py-22 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20`}>
        <div className="max-w-205 divide-y divide-[#e1ebee]">
          {sections.map((section) => (
            <section key={section.heading} className="py-7 first:pt-0">
              <h2 className="text-[clamp(1.35rem,2vw,1.7rem)] font-semibold tracking-[-.035em] text-[#0c3046]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-[1.8] text-[#526d7d]">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
          <section className="py-7">
            <h2 className="text-[clamp(1.35rem,2vw,1.7rem)] font-semibold tracking-[-.035em] text-[#0c3046]">
              Questions
            </h2>
            <p className="mt-4 text-base leading-[1.8] text-[#526d7d]">
              For questions about this page or information you have shared with us,
              contact TruMinds Clinical.
            </p>
            <a
              href="mailto:services@trumindsclinical.com"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-[#0068a5] hover:text-[#003f68]"
            >
              <Mail size={17} aria-hidden="true" />
              services@trumindsclinical.com
            </a>
          </section>
        </div>

        <nav className="h-fit border-t border-[#dae8ec] pt-6 lg:sticky lg:top-32" aria-label="Related policies">
          <h2 className="text-sm font-semibold tracking-[.13em] text-[#008995] uppercase">
            Website policies
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            {related.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="group flex items-center justify-between gap-2 text-base text-[#38576b] transition-colors hover:text-[#0068a5]"
              >
                {item.label}
                <ArrowUpRight size={16} className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </article>
  );
}
