import HeroSection from "@/components/hero-sections-01";
import StatSection from "@/components/stats-section-02";

export default function Home() {
  return (
    <div className="flex flex-col gap-2.5">
      <HeroSection />
      <StatSection />
    </div>
  );
}
