import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NonProfitVisual } from "@/components/home/NonProfitVisual";
import {
  InteriorContact,
  InteriorStory,
} from "@/components/layout/InteriorPage";
import { shell } from "@/lib/site-styles";

export const metadata: Metadata = {
  title: "Non-profit | TruMinds Clinical",
  description:
    "Learn about the community-focused values guiding TruMinds Clinical.",
};

export default function NonProfitPage() {
  return (
    <>
      <section className="bg-[#f4f9fa] py-16 md:py-24 lg:py-28">
        <div className={`${shell} grid items-center gap-12 lg:grid-cols-[minmax(0,.78fr)_minmax(0,1.22fr)] lg:gap-8 xl:gap-10`}>
          <div className="max-w-155">
            <Link
              href="/"
              className="mb-12 inline-flex items-center gap-2 text-base text-[#0068a5] transition-colors hover:text-[#004f80] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0068a5]"
            >
              <ArrowLeft size={18} aria-hidden="true" /> Back to home
            </Link>
            <h1 className="text-[clamp(3rem,5.5vw,5.75rem)] leading-[1.04] font-semibold tracking-[-.055em] text-[#0a2038]">
              A wider view
              <br />
              <span className="text-[#0068a5]">of impact.</span>
            </h1>
            <p className="mt-8 max-w-140 text-[clamp(1.15rem,1.6vw,1.45rem)] leading-relaxed text-[#38546a]">
              A space for the values and partnerships that can help progress
              reach more people.
            </p>
          </div>
          <NonProfitVisual eager className="lg:mx-0 lg:justify-self-start" />
        </div>
      </section>
      <InteriorStory
        title="Purpose belongs in the work."
        paragraphs={[
          "Better health depends on more than innovation alone. It also depends on people having the support, knowledge and opportunity to benefit from progress.",
          "Our non-profit focus gives that belief a dedicated place within the TruMinds story. We are committed to sharing specific initiatives here as they are established and ready to be described accurately.",
        ]}
        values={[
          {
            title: "People",
            text: "Keep the needs and experiences of people at the center of every effort.",
          },
          {
            title: "Partnership",
            text: "Work with others whose expertise and perspective can make an effort stronger.",
          },
          {
            title: "Access",
            text: "Look for practical ways to broaden opportunity and understanding.",
          },
        ]}
      />
      <InteriorContact />
    </>
  );
}
