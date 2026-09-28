import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { TherapeuticAreasSection } from "@/components/home/TherapeuticAreasSection";
import { CareersSection } from "@/components/home/CareersSection";
import { GetStartedSection } from "@/components/home/GetStartedSection";
import { InsightsSection } from "@/components/home/InsightsSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* 3D Video Hero Section matching reference layout */}
      <HeroSection />

      {/* About Section with Molecular Organic Parallax Image */}
      <AboutSection />

      {/* Services Section with 2x2 Interactive Animated Cards & Dark Brand Theme */}
      <ServicesSection />

      {/* Products Section with Video Background, Interactive Slide Drawer Tabs & Full Suite Showcase */}
      <ProductsSection />

      {/* Therapeutic Areas Section with Ultra-Premium Glass Drawer Cards */}
      <TherapeuticAreasSection />

      {/* Careers Section with Clean White Background, Subtle Gray Brand Shapes & Featured Openings */}
      <CareersSection />

      {/* Interactive Multi-Step Onboarding Form: "How to get started" */}
      <GetStartedSection />

      {/* TruMinds Insights Section with 3 Editorial Article Cards & Conference Recaps */}
      <InsightsSection />
    </div>
  );
}

