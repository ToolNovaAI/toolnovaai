"use client";

import {
  Bot,
  Sparkles,
  Clock3,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "AI Requests",
    value: "1,248",
    change: "+18%",
    icon: Bot,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Prompts Used",
    value: "386",
    change: "+12%",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Time Saved",
    value: "42 hrs",
    change: "+8%",
    icon: Clock3,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Productivity",
    value: "94%",
    change: "+6%",
    icon: TrendingUp,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function AIUsageStats() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          AI Usage Statistics
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Your AI productivity overview.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#10192d]"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}
                >
                  <Icon
                    size={22}
                    className={stat.color}
                  />
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                  {stat.change}
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}