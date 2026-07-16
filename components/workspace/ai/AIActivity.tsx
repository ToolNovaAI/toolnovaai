"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock3,
  FileText,
  Sparkles,
  Wand2,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Blog Article Generated",
    description: "AI created a 2,000-word SEO blog draft.",
    time: "12 min ago",
    icon: FileText,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 2,
    title: "Prompt Optimized",
    description: "Prompt quality improved for better AI responses.",
    time: "38 min ago",
    icon: Wand2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: 3,
    title: "Content Humanized",
    description: "AI text rewritten with a natural writing style.",
    time: "1 hour ago",
    icon: Sparkles,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    id: 4,
    title: "Automation Completed",
    description: "Weekly SEO content workflow finished successfully.",
    time: "Yesterday",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function AIActivity() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
            <Bot
              size={24}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              AI Activity
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Recent AI actions in your workspace.
            </p>
          </div>
        </div>

        <Link
          href="/workspace/ai/activity"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          View All
        </Link>
      </div>

      {/* Timeline */}
      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${activity.bg}`}
              >
                <Icon
                  size={22}
                  className={activity.color}
                />
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white">
                      {activity.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {activity.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
                      <Clock3 size={14} />
                      {activity.time}
                    </div>
                  </div>

                  <ArrowRight className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
        <h3 className="font-semibold text-cyan-300">
          AI Workspace Status
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-300">
          All AI services are operational. Your workspace is synchronized and
          ready for new requests.
        </p>
      </div>
    </section>
  );
}