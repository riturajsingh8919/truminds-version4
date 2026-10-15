import type { Metadata } from "next";
import { InteriorHero, InteriorStory } from "@/components/layout/InteriorPage";
import { LeadershipSection } from "@/components/home/LeadershipSection";

export const metadata: Metadata = {
  title: "About Us | TruMinds Clinical",
  description: "Learn how TruMinds Clinical connects clinical operations, biometrics and technology across the research journey.",
};

export default function AboutUsPage() {
  return (
    <>
      <InteriorHero
        title="Experience that moves research forward."
        description="Clinical operations, biometrics and specialist teams connected around the needs of each study."
        image="/images/editorial/about-lab.jpg"
        imageAlt="Clinical research colleagues working together in a laboratory"
      />
      <InteriorStory
        title="The right expertise, working together."
        paragraphs={[
          "TruMinds Clinical brings clinical operations, biometrics and specialist teams together across phases I–IV. We shape the right expertise around each study so research moves forward with clarity.",
          "From full-service delivery to embedded support and connected technology, our work is organized around the questions each program needs to answer and the people responsible for answering them.",
        ]}
        values={[
          { title: "Connected teams", text: "Bring the right clinical, data and technical perspectives into each stage of a study." },
          { title: "Practical clarity", text: "Keep study needs, decisions and handoffs visible as programs evolve." },
          { title: "Flexible support", text: "Shape delivery around the people and capabilities a program needs most." },
        ]}
      />
      <LeadershipSection />
    </>
  );
}
