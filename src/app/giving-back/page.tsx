import type { Metadata } from "next";
import {
  InteriorContact,
  InteriorHero,
  InteriorStory,
} from "@/components/layout/InteriorPage";

export const metadata: Metadata = {
  title: "Giving Back | TruMinds Clinical",
  description:
    "Explore the people-first purpose behind Giving Back at TruMinds Clinical.",
};

export default function GivingBackPage() {
  return (
    <>
      <InteriorHero
        eyebrow="Giving back"
        title="Progress means more together."
        description="Our commitment to better health begins with people and reaches beyond the study."
        image="/images/editorial/giving-back.jpg"
        imageAlt="Community volunteers sharing supplies"
      />
      <InteriorStory
        kicker="A people-first purpose"
        title="Care has a wider reach."
        paragraphs={[
          "Clinical research is ultimately about the lives touched by better evidence and better care. That belief also guides how we think about giving back: with attention to people, meaningful connections and lasting opportunity.",
          "We want our community work to reflect the same qualities we bring to research: listening carefully, working together and staying focused on outcomes that matter.",
        ]}
        values={[
          {
            title: "Listen first",
            text: "Understand the people and communities a program is intended to serve.",
          },
          {
            title: "Work together",
            text: "Bring knowledge, time and partnership to a shared purpose.",
          },
          {
            title: "Think long term",
            text: "Look for thoughtful ways to make care and opportunity more accessible.",
          },
        ]}
      />
      <InteriorContact />
    </>
  );
}
