"use client";

import {
  BookOpen,
  Brain,
  Clock3,
  FileText,
  Gauge,
  Mic,
  Sparkles,
  Type,
} from "lucide-react";

import { useAIWriterContext } from "./AIWriterProvider";

export default function AIWriterStats() {
  const { stats } = useAIWriterContext();

  const cards = [
    {
      title: "Words",
      value: stats.words,
      icon: FileText,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Characters",
      value: stats.characters,
      icon: Type,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      title: "Reading Time",
      value: `${stats.readingTime} min`,
      icon: BookOpen,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },
    {
      title: "Speaking Time",
      value: `${Math.max(
        1,
        Math.ceil(stats.words / 130)
      )} min`,
      icon: Mic,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      title: "SEO Score",
      value:
        stats.words >= 300
          ? "95"
          : stats.words >= 100
          ? "82"
          : "65",
      icon: Gauge,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      title: "AI Quality",
      value:
        stats.words >= 300
          ? "96%"
          : stats.words >= 100
          ? "88%"
          : "72%",
      icon: Brain,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Writing Analytics
          </h2>

          <p className="mt-2 text-zinc-400">
            Live statistics generated from your current document.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
          <Sparkles size={16} />
          Live
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-3xl border border-white/10 bg-[#0B1220] p-6 transition hover:border-cyan-500/30"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.bg}`}
                >
                  <Icon
                    size={24}
                    className={card.color}
                  />
                </div>

                <Clock3
                  size={16}
                  className="text-zinc-600"
                />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-white">
                {card.value}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {card.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Insight */}
      <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#0B1220] to-[#050816] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
            <Brain
              size={28}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              AI Writing Insight
            </h3>

            <p className="mt-3 leading-7 text-zinc-300">
              {stats.words === 0 &&
                "Start writing to receive live analytics and AI recommendations."}

              {stats.words > 0 &&
                stats.words < 100 &&
                "Your draft has started well. Add more detail to improve readability and SEO."}

              {stats.words >= 100 &&
                stats.words < 300 &&
                "Your content is developing nicely. Consider adding headings and examples."}

              {stats.words >= 300 &&
                "Great progress! Your document has enough content for deeper AI analysis and SEO recommendations."}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}