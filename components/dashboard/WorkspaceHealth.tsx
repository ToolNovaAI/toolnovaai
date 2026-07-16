"use client";

import { Activity, CheckCircle2, TrendingUp } from "lucide-react";

interface WorkspaceHealthProps {
  score?: number;
}

export default function WorkspaceHealth({
  score = 92,
}: WorkspaceHealthProps) {
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (score / 100) * circumference;

  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-400">
            Workspace Health
          </p>

          <h2 className="mt-1 text-2xl font-bold text-white">
            Excellent
          </h2>
        </div>

        <Activity className="text-cyan-400" size={28} />
      </div>

      {/* Circular Score */}
      <div className="mt-8 flex justify-center">
        <div className="relative h-36 w-36">
          <svg
            className="-rotate-90"
            width="144"
            height="144"
          >
            <circle
              cx="72"
              cy="72"
              r="52"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="10"
              fill="none"
            />

            <circle
              cx="72"
              cy="72"
              r="52"
              stroke="#06B6D4"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-700"
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {score}%
            </span>

            <span className="text-sm text-zinc-400">
              Health Score
            </span>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
          <CheckCircle2
            className="text-green-400"
            size={18}
          />

          <span className="text-sm text-zinc-300">
            SEO structure looks healthy.
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
          <TrendingUp
            className="text-cyan-400"
            size={18}
          />

          <span className="text-sm text-zinc-300">
            AI recommends improving internal linking.
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-3">
          <CheckCircle2
            className="text-green-400"
            size={18}
          />

          <span className="text-sm text-zinc-300">
            Core workspace performance is stable.
          </span>
        </div>
      </div>
    </section>
  );
}