"use client";

import { aiSuggestions } from "@/constants/aiSuggestions";

import SuggestionCard from "./SuggestionCard";
import WorkspaceHealth from "./WorkspaceHealth";
import QuickActions from "./QuickActions";
import RecentActivity from "./RecentActivity";

export default function AIAssistant() {
  return (
    <section className="grid gap-8 xl:grid-cols-3">
      {/* Left Column */}
      <div className="space-y-8 xl:col-span-2">
        {/* AI Suggestions */}
        <div className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
          <div className="mb-6">
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              AI Assistant
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              AI Recommendations
            </h2>

            <p className="mt-2 text-zinc-400">
              Smart recommendations to improve your SEO, GEO,
              AEO and overall workspace performance.
            </p>
          </div>

          <div className="space-y-4">
            {aiSuggestions.map((item) => (
              <SuggestionCard
                key={item.id}
                title={item.title}
                description={item.description}
                priority={item.priority}
                status={item.status}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        <WorkspaceHealth score={92} />

        <QuickActions />
      </div>
    </section>
  );
}