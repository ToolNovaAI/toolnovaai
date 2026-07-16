"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Sparkles,
  ScanSearch,
  Wand2,
  MessageSquareText,
  Mail,
  PenSquare,
  Bot,
} from "lucide-react";

const tools = [
  {
    title: "AI Writer",
    description: "Generate blogs, articles and long-form content.",
    href: "/tools/ai-writer",
    icon: FileText,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    badge: "Popular",
  },
  {
    title: "AI Humanizer",
    description: "Rewrite AI text to sound natural and human.",
    href: "/tools/ai-humanizer",
    icon: Sparkles,
    color: "text-green-400",
    bg: "bg-green-500/10",
    badge: "New",
  },
  {
    title: "AI Detector",
    description: "Detect AI-generated content instantly.",
    href: "/tools/ai-detector",
    icon: ScanSearch,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    badge: "Fast",
  },
  {
    title: "Prompt Generator",
    description: "Generate optimized prompts for every AI model.",
    href: "/tools/prompt-generator",
    icon: Wand2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    badge: "AI",
  },
  {
    title: "Prompt Optimizer",
    description: "Improve existing prompts for better responses.",
    href: "/tools/prompt-optimizer",
    icon: MessageSquareText,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    badge: "Pro",
  },
  {
    title: "Email Writer",
    description: "Write professional emails in seconds.",
    href: "/tools/email-writer",
    icon: Mail,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    badge: "Work",
  },
  {
    title: "Blog Writer",
    description: "Create SEO-friendly blog posts with AI.",
    href: "/tools/blog-writer",
    icon: PenSquare,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    badge: "SEO",
  },
  {
    title: "AI Chat",
    description: "Start an intelligent conversation with AI.",
    href: "/workspace/ai/chat",
    icon: Bot,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    badge: "Live",
  },
];

export default function AIToolsGrid() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            AI Tools
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Everything you need to create, optimize and automate with AI.
          </p>
        </div>

        <Link
          href="/tools"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link
              key={tool.title}
              href={tool.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${tool.bg}`}
                >
                  <Icon
                    size={22}
                    className={tool.color}
                  />
                </div>

                <ArrowUpRight className="text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">
                  {tool.title}
                </h3>

                <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan-300">
                  {tool.badge}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {tool.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}