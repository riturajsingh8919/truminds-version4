import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { TherapeuticAreasSection } from "@/components/home/TherapeuticAreasSection";

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

      {/* Therapeutic Areas Section with 3D Flip Showcase Cards & Full 20 Subpages Directory */}
      <TherapeuticAreasSection />
    </div>
  );
}

