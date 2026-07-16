"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Sparkles,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

const aiFeed = [
  {
    id: 1,
    title: "5 SEO Improvements Found",
    description:
      "AI detected missing meta descriptions and duplicate headings.",
    icon: Sparkles,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    href: "/workspace/seo",
  },
  {
    id: 2,
    title: "Organic Traffic Trending Up",
    description:
      "Your optimized pages show positive ranking signals.",
    icon: TrendingUp,
    color: "text-green-400",
    bg: "bg-green-500/10",
    href: "/analytics",
  },
  {
    id: 3,
    title: "Schema Recommendation",
    description:
      "AI recommends adding FAQ schema to improve visibility.",
    icon: TriangleAlert,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    href: "/tools/schema-generator",
  },
];

export default function AIFeed() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
          <Bot className="text-cyan-400" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Feed
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Smart insights from your workspace.
          </p>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4">
        {aiFeed.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.id}
              href={item.href}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
            >
              <div className="flex gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
                >
                  <Icon
                    size={20}
                    className={item.color}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <ArrowRight
                      size={18}
                      className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Footer */}
      <Link
        href="/workspace/ai"
        className="mt-6 flex items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
      >
        Open AI Workspace
      </Link>
    </section>
  );
}