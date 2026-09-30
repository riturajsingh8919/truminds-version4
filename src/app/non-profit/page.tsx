import type { Metadata } from "next";
import {
  InteriorContact,
  InteriorHero,
  InteriorStory,
} from "@/components/layout/InteriorPage";

export const metadata: Metadata = {
  title: "Non-profit | TruMinds Clinical",
  description:
    "Learn about the community-focused values guiding TruMinds Clinical.",
};

export default function NonProfitPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Non-profit"
        title="A wider view of impact."
        description="A space for the values and partnerships that can help progress reach more people."
        image="/images/editorial/non-profit.jpg"
        imageAlt="Volunteers organizing supplies for a community"
      />
      <InteriorStory
        kicker="Why it matters"
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
