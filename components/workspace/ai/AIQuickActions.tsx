"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  FileText,
  Sparkles,
  ScanSearch,
  Wand2,
  MessageSquareText,
} from "lucide-react";

const actions = [
  {
    title: "AI Writer",
    description: "Generate articles, blogs & emails",
    href: "/workspace/ai/writer",
    icon: FileText,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "AI Humanizer",
    description: "Make AI text sound natural",
    href: "/tools/ai-humanizer",
    icon: Sparkles,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "AI Detector",
    description: "Detect AI-generated content",
    href: "/tools/ai-detector",
    icon: ScanSearch,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Prompt Generator",
    description: "Create better AI prompts",
    href: "/tools/prompt-generator",
    icon: Wand2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Prompt Library",
    description: "Browse ready-made prompts",
    href: "/workspace/ai/prompts",
    icon: MessageSquareText,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "AI Chat",
    description: "Start a new AI conversation",
    href: "/workspace/ai/chat",
    icon: Bot,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

export default function AIQuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Launch your favorite AI tools instantly.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${action.bg}`}
                >
                  <Icon
                    size={22}
                    className={action.color}
                  />
                </div>

                <ArrowUpRight className="text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}