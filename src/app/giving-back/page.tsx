import type { Metadata } from "next";
import {
  InteriorContact,
  InteriorHero,
  InteriorStory,
} from "@/components/layout/InteriorPage";
import { shell } from "@/lib/site-styles";

const givingBackAreas = [
  {
    id: "non-profit-research-organizations",
    title: "Non-profit Research Organizations",
    description: "Opportunities to connect with mission-driven research organizations.",
  },
  {
    id: "employee-volunteer-programs",
    title: "Employee Volunteer Programs",
    description: "Ways for team members to contribute their time and skills.",
  },
  {
    id: "community-outreach",
    title: "Community Outreach",
    description: "Community-centered efforts that bring people and resources together.",
  },
  {
    id: "mentorship-programs",
    title: "Mentorship Programs",
    description: "Opportunities to share experience and support future talent.",
  },
];

export const metadata: Metadata = {
  title: "Giving Back | TruMinds Clinical",
  description:
    "Explore the people-first purpose behind Giving Back at TruMinds Clinical.",
};

export default function GivingBackPage() {
  return (
    <>
      <InteriorHero
        title="Progress means more together."
        description="Our commitment to better health begins with people and reaches beyond the study."
        image="/images/editorial/giving-back.jpg"
        imageAlt="Community volunteers sharing supplies"
      />
      <InteriorStory
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
      <section className="bg-white py-20 md:py-28" aria-labelledby="giving-back-areas-title">
        <div className={shell}>
          <h2 id="giving-back-areas-title" className="max-w-187.5 text-[clamp(2.2rem,3.3vw,3.7rem)] leading-[1.1] font-semibold tracking-tight text-[#0a2940]">
            Areas of focus
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {givingBackAreas.map((area) => (
              <article
                id={area.id}
                key={area.id}
                className="scroll-mt-28 border-t-2 border-[#02aaa8] bg-[#f2f8f9] p-7"
              >
                <h3 className="text-2xl font-semibold text-[#0a2940]">{area.title}</h3>
                <p className="mt-3 leading-relaxed text-[#607a88]">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InteriorContact />
    </>
  );
}
