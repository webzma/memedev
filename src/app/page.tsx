import HeroSection from "@/components/hero-section";
import TrendingMemesSection from "@/components/treding-memes-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <TrendingMemesSection />
      </main>
    </div>
  );
}
