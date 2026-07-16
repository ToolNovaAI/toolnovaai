"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Sparkles,
} from "lucide-react";

export default function ContinueWorking() {
  const progress = 68;

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-[#0B1220] to-[#050816] p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Sparkles size={14} />
            Continue Working
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            SEO Audit Project
          </h2>

          <p className="mt-4 text-zinc-400">
            Continue optimizing your website. Your AI assistant has
            identified new opportunities to improve search rankings
            and metadata.
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
            <Clock3 size={16} />
            Last edited 18 minutes ago
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard/projects/seo-audit"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Continue
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/dashboard/projects"
              className="inline-flex items-center rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-500/40"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">
              Project Progress
            </span>

            <span className="font-semibold text-cyan-400">
              {progress}%
            </span>
          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-cyan-500 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">
                SEO Score
              </span>

              <span className="font-semibold text-green-400">
                92/100
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">
                Issues Fixed
              </span>

              <span className="font-semibold text-white">
                37
              </span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">
                Remaining
              </span>

              <span className="font-semibold text-orange-400">
                12
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}