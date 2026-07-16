"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function AIHero() {
  return (
    <section className="overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#0B1220] to-[#050816] p-8">
      <div className="grid gap-10 xl:grid-cols-2 xl:items-center">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            <Bot size={14} />
            AI Workspace
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
            Build with
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Artificial Intelligence
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Write faster, optimize smarter, create better prompts and automate
            your workflow with ToolNovaAI's intelligent workspace.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
            >
              Explore AI Tools
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center rounded-2xl border border-white/10 px-6 py-3 font-semibold text-white transition hover:border-cyan-500/40"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              Workspace Overview
            </h3>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
              Live
            </span>
          </div>

          <div className="space-y-5">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#10192d] p-4">
              <div className="flex items-center gap-3">
                <Sparkles className="text-cyan-400" size={22} />
                <span className="text-white">AI Suggestions</span>
              </div>

              <span className="font-bold text-cyan-400">14</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#10192d] p-4">
              <div className="flex items-center gap-3">
                <Zap className="text-yellow-400" size={22} />
                <span className="text-white">Automations</span>
              </div>

              <span className="font-bold text-yellow-400">8</span>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#10192d] p-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-green-400" size={22} />
                <span className="text-white">Productivity</span>
              </div>

              <span className="font-bold text-green-400">+37%</span>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
              <p className="text-sm text-zinc-300">
                <strong className="text-cyan-400">AI Insight:</strong>
              </p>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Your recent projects show opportunities to improve SEO metadata,
                generate optimized content and automate repetitive tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}