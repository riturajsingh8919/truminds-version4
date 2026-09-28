import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* 3D Video Hero Section matching reference layout */}
      <HeroSection />

      {/* About Section with Molecular Organic Parallax Image */}
      <AboutSection />
    </div>
  );
}
