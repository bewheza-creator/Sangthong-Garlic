import React from "react";
import HeroSectionAbout from "@/components/about-me/hero-sections-about-me";
import CTASection from "@/components/about-me/cta-sections-02";
import CTASection2 from "@/components/about-me/cta-sections-03";
import CTASection1 from "@/components/about-me/cta-sections-1";

export default function AboutMePage() {
  return (
    <div className="flex flex-col">
      <HeroSectionAbout />
      <CTASection1 />
      <CTASection />
      <CTASection2 />
    </div>
  );
}
