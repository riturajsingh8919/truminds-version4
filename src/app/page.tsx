import {
  AboutSection,
  GivingBackSection,
  HeroSection,
  InsightsSection,
  PlatformSection,
  PurposeSection,
  ServicesSection,
  TherapeuticSection,
} from "@/components/home/HomeContent";
import { ConsultationJourney } from "@/components/home/ConsultationJourney";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PlatformSection />
      <TherapeuticSection />
      <GivingBackSection />
      <PurposeSection />
      <ConsultationJourney />
      <InsightsSection />
    </>
  );
}
