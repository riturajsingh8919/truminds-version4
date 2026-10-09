import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InteriorHero, InteriorStory } from "@/components/layout/InteriorPage";
import { shell } from "@/lib/site-styles";

export const metadata: Metadata = {
  title: "Careers | TruMinds Clinical",
  description: "Explore career opportunities with TruMinds Clinical.",
};

export default function CareersPage() {
  return (
    <>
      <InteriorHero
        title="Build what comes next."
        description="Join work that brings clinical expertise, technology and care together."
        image="/images/editorial/hero-team.jpg"
        imageAlt="Medical professionals working together"
      />
      <InteriorStory
        title="Your expertise can move research forward."
        paragraphs={[
          "TruMinds Clinical works across clinical operations, data management, statistical programming and specialized staffing. If you are looking for a role in life sciences, explore the openings published on our current careers site.",
        ]}
      />
      <div className={`${shell} -mt-12 pb-20 md:pl-[40%]`}>
        <Link
          className="inline-flex items-center gap-3 border-b border-[#0068a5] pb-2 font-bold text-[#0068a5]"
          href="https://trumindsclinical.com/careers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See current openings <ArrowUpRight size={19} />
        </Link>
      </div>
    </>
  );
}
