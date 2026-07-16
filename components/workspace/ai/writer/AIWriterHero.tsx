"use client";

import Link from "next/link";
import {
  Sparkles,
  PenSquare,
  ArrowRight,
  FileText,
  Clock3,
  Wand2,
} from "lucide-react";

export default function AIWriterHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#0B1220] to-[#050816] p-8 lg:p-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-10 xl:flex-row xl:items-center xl:justify-between">
        {/* Left */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            <Sparkles size={14} />
            AI Writer Workspace
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl xl:text-6xl">
            Write Faster with
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Content
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Generate blogs, emails, social media posts, landing pages,
            product descriptions and marketing copy from a single
            professional AI workspace.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#editor"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Start Writing
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/workspace/ai/prompts"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-500/40"
            >
              Browse Prompts
            </Link>
          </div>
        </div>

        {/* Right Card */}
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
              <PenSquare
                size={24}
                className="text-cyan-400"
              />
            </div>

            <div>
              <h2 className="font-semibold text-white">
                Today's Writing
              </h2>

              <p className="text-sm text-zinc-400">
                Workspace Overview
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <FileText
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-sm text-zinc-300">
                  Documents
                </span>
              </div>

              <span className="font-semibold text-white">
                24
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <Clock3
                  size={18}
                  className="text-orange-400"
                />

                <span className="text-sm text-zinc-300">
                  Saved Time
                </span>
              </div>

              <span className="font-semibold text-white">
                18 hrs
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
              <div className="flex items-center gap-3">
                <Wand2
                  size={18}
                  className="text-green-400"
                />

                <span className="text-sm text-zinc-300">
                  AI Generations
                </span>
              </div>

              <span className="font-semibold text-white">
                182
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
            <p className="text-sm leading-6 text-cyan-100">
              💡 <strong>AI Tip:</strong> Use detailed prompts with
              goals, audience and tone to generate more accurate,
              high-quality content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}