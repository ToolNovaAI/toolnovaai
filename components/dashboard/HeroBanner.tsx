"use client";

import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-[#0B1220] to-[#050816] p-10">
      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          <Sparkles size={16} />
          AI Powered Workspace
        </div>

        <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
          Build.
          <br />
          Optimize.
          <br />
          Grow.
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          One premium workspace for AI, SEO, GEO, AEO, SMO,
          Developer and Productivity tools.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400">
            Open Workspace
          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-500">
            Explore Tools
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}