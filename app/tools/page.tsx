import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";
import ToolsDirectory from "@/components/sections/ToolsDirectory";
import Container from "@/components/ui/container";

import { allTools } from "@/constants/allTools";

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              {allTools.length}+ Professional Tools
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
              Free AI, SEO & Developer Tools
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Discover premium tools built for developers, marketers,
              creators and businesses. Fast, free and designed for
              productivity.
            </p>
          </div>
        </Container>
      </section>

      {/* Tools Directory */}
      <ToolsDirectory />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <Footer />
    </>
  );
}