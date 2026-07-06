import Hero from "@/components/sections/hero";
import PopularTools from "@/components/sections/PopularTools";
import Categories from "@/components/sections/Categories";
import WhyChoose from "@/components/sections/WhyChoose";
import TrustStats from "@/components/sections/TrustStats";
import FeaturedAITools from "@/components/sections/FeaturedAITools";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularTools />
      <Categories />
      <WhyChoose />

<TrustStats />

<FeaturedAITools />

<FAQ />

<CTA />

<Footer />
    </>
  );
}