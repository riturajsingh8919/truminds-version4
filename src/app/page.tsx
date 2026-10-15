import {
  AboutSection,
  GivingBackSection,
  HeroSection,
  InsightsSection,
  PlatformSection,
  ServicesSection,
  TherapeuticSection,
} from "@/components/home/HomeContent";
import { ConsultationJourney } from "@/components/home/ConsultationJourney";
import { GlobalPresenceSection } from "@/components/home/GlobalPresenceSection";
import { LeadershipSection } from "@/components/home/LeadershipSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PlatformSection />
      <TherapeuticSection />
      <GivingBackSection />
      <LeadershipSection />
      <ConsultationJourney />
      <InsightsSection />
      <GlobalPresenceSection />
    </>
  );
}
