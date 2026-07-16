"use client";

import {
  CheckCircle2,
  Clock3,
  FileText,
  Search,
  Sparkles,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Meta tags generated",
    description: "Homepage SEO metadata created successfully.",
    icon: FileText,
    color: "text-cyan-400",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "SEO Audit Completed",
    description: "Website health score increased to 92%.",
    icon: Search,
    color: "text-green-400",
    time: "12 min ago",
  },
  {
    id: 3,
    title: "AI Suggestion Applied",
    description: "Heading structure optimized automatically.",
    icon: Sparkles,
    color: "text-purple-400",
    time: "35 min ago",
  },
  {
    id: 4,
    title: "Workspace Synced",
    description: "All projects are synced successfully.",
    icon: CheckCircle2,
    color: "text-emerald-400",
    time: "1 hour ago",
  },
];

export default function RecentActivity() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Activity
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Latest updates across your workspace.
          </p>
        </div>

        <Clock3 className="text-cyan-400" size={24} />
      </div>

      {/* Timeline */}
      <div className="mt-8 space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.id}
              className="flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 ${activity.color}`}
              >
                <Icon size={20} />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-white">
                    {activity.title}
                  </h3>

                  <span className="text-xs text-zinc-500">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {activity.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}