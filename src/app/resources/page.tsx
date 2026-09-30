import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import {
  InteriorContact,
  InteriorHero,
} from "@/components/layout/InteriorPage";
import { bodyCopy, eyebrow, eyebrowLine, shell } from "@/lib/site-styles";

export const metadata: Metadata = {
  title: "Resources & Insights | TruMinds Clinical",
  description:
    "Perspectives on clinical data, study delivery and technology from TruMinds Clinical.",
};

const topics = [
  {
    id: "clinical-data",
    number: "01",
    category: "Clinical data",
    title: "Making clinical data ready for the next decision",
    image: "/images/editorial/resources.jpg",
    alt: "Researcher examining a sample with a microscope",
    intro:
      "Useful clinical data is more than information collected on time. It needs a shared structure, clear definitions and a quality process that helps teams understand what the data can support.",
    paragraphs: [
      "When data standards are considered early, study teams can reduce avoidable rework later. A clear path from capture through review and analysis helps clinical, data and statistical teams work from the same understanding.",
      "The practical starting point is alignment: agree on the questions the study needs to answer, define what must be collected and establish how it will be checked. Technology is most valuable when it supports that discipline.",
    ],
  },
  {
    id: "study-delivery",
    number: "02",
    category: "Study delivery",
    title: "The value of connected clinical operations",
    image: "/images/editorial/services-fsp.jpg",
    alt: "Researchers discussing their work in a laboratory",
    intro:
      "A clinical program depends on many specialist functions. Strong delivery comes from the way those functions stay connected as plans change and evidence develops.",
    paragraphs: [
      "Clear ownership, regular communication and visibility into decisions help teams spot issues earlier. They also make it easier to adjust resources without losing the context behind the work.",
      "Whether a sponsor needs full-service support or an embedded specialist team, a shared operating rhythm can make collaboration simpler and more predictable.",
    ],
  },
  {
    id: "technology",
    number: "03",
    category: "Technology",
    title: "Where technology can simplify trial work",
    image: "/images/editorial/services-ai.jpg",
    alt: "Clinical researchers working at a computer",
    intro:
      "The most useful technology solves a specific problem for the people doing the work. In clinical research, that often means reducing repeated manual steps and making information easier to trace.",
    paragraphs: [
      "Connected workflows can help study teams move between data capture, management, analysis and reporting with fewer handoffs. The opportunity is not automation for its own sake; it is more time for review, interpretation and decisions.",
      "Teams should start with a clear process, identify where friction occurs and select tools that fit the clinical and operational context.",
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Resources & insights"
        title="Ideas for better research."
        description="Perspectives on the people, processes and technology behind confident clinical decisions."
        image="/images/editorial/about-lab.jpg"
        imageAlt="Scientists working together in a research laboratory"
      />
      <section className="py-20">
        <div className={shell}>
          <p className={eyebrow}>
            <span className={eyebrowLine} />
            Explore perspectives
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {topics.map((topic) => (
              <Link
                className="group flex min-h-40 flex-col justify-between border-t-2 border-[#02aaa8] bg-[#f2f8f9] p-6 text-[#0a2940] transition-colors hover:bg-[#e1f3f2]"
                href={"#" + topic.id}
                key={topic.id}
              >
                <span className="text-xs font-bold text-[#008c98]">
                  {topic.number}
                </span>
                <strong className="text-xl leading-snug">{topic.title}</strong>
                <ArrowDownRight
                  className="self-end text-[#008c98] transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <div>
        {topics.map((topic, index) => (
          <article
            className={`scroll-mt-28 py-20 md:py-28 ${index % 2 ? "bg-[#f2f8f9]" : "bg-white"}`}
            id={topic.id}
            key={topic.id}
          >
            <div
              className={`${shell} grid items-start gap-10 md:grid-cols-[.85fr_1.15fr] md:gap-16`}
            >
              <div className="relative aspect-[1.18] overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-extrabold tracking-widest text-[#008795] uppercase">
                  {topic.number} / {topic.category}
                </span>
                <h2 className="mt-4 text-[clamp(2rem,3.2vw,3.5rem)] leading-[1.1] font-semibold tracking-tight text-[#0a2940]">
                  {topic.title}
                </h2>
                <p className="mt-6 text-xl leading-relaxed text-[#294b5d]">
                  {topic.intro}
                </p>
                {topic.paragraphs.map((paragraph) => (
                  <p className={`${bodyCopy} mt-5`} key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <InteriorContact />
    </>
  );
}
