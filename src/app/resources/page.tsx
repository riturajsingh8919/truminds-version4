import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import {
  InteriorContact,
  InteriorHero,
} from "@/components/layout/InteriorPage";
import { ResourceCategoryGrid } from "@/components/resources/ResourceNavigation";
import { resourceContent } from "@/lib/resources";
import { bodyCopy, shell } from "@/lib/site-styles";

export const metadata: Metadata = {
  title: "Resources & Insights | TruMinds Clinical",
  description:
    "Perspectives on clinical data, study delivery and technology from TruMinds Clinical.",
};

const topics = resourceContent.legacyInsights;

export default function ResourcesPage() {
  return (
    <>
      <InteriorHero
        pagePath="/resources"
        label="Resources"
        title={resourceContent.hub.title}
        description={resourceContent.hub.description}
      />
      <ResourceCategoryGrid />
      <section id="insights" className="scroll-mt-40 py-20">
        <div className={shell}>
          <h2 className="sr-only">Explore perspectives</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {topics.map((topic) => (
              <Link
                className="group flex min-h-40 flex-col justify-between border-t-2 border-[#02aaa8] bg-[#f2f8f9] p-6 text-[#0a2940] transition-colors hover:bg-[#e1f3f2]"
                href={"#" + topic.id}
                key={topic.id}
              >
                <span className="text-lg font-medium text-[#006b78]">
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
            className={`copy-on-light scroll-mt-28 py-20 md:py-28 ${index % 2 ? "bg-[#f2f8f9]" : "bg-white"}`}
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
                <h2 className="text-3xl md:text-4xl xl:text-5xl leading-[1.1] font-semibold tracking-tight text-[#0a2940]">
                  {topic.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#294b5d]">
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
