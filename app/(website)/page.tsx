import Hero from "@/components/sections/hero";
import WorkspacePreview from "@/components/sections/WorkspacePreview";
import PopularTools from "@/components/sections/PopularTools";
import Categories from "@/components/sections/Categories";
import WhyChoose from "@/components/sections/WhyChoose";
import TrustStats from "@/components/sections/TrustStats";
import FeaturedAITools from "@/components/sections/FeaturedAITools";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* NEW */}
      <WorkspacePreview />

      {/* Homepage Sections */}
      <PopularTools />
      <Categories />
      <WhyChoose />
      <TrustStats />
      <FeaturedAITools />
      <FAQ />
      <CTA />
    </>
  );
}