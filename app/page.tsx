import HeroSection from "@/components/hero-sections-01";
import Card_home from "@/components/home/card-home";
import StatSection from "@/components/stats-section-02";

export default function Home() {
  return (
    <div className="flex flex-col gap-2.5">
      <HeroSection />
      <StatSection />
      <Card_home />
    </div>
  );
}
