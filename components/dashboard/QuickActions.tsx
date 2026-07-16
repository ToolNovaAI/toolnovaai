"use client";

import Link from "next/link";
import {
  Bot,
  Search,
  Sparkles,
  FileText,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "AI Assistant",
    description: "Chat with your AI SEO assistant",
    href: "/workspace/ai",
    icon: Bot,
  },
  {
    title: "SEO Audit",
    description: "Analyze your website instantly",
    href: "/workspace/seo",
    icon: Search,
  },
  {
    title: "Meta Generator",
    description: "Generate optimized meta tags",
    href: "/tools/meta-generator",
    icon: Sparkles,
  },
  {
    title: "Content Writer",
    description: "Create AI-powered content",
    href: "/workspace/content",
    icon: FileText,
  },
  {
    title: "Analytics",
    description: "View workspace insights",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    description: "Manage your workspace",
    href: "/settings",
    icon: Settings,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-zinc-400">
          Jump into your most-used tools with one click.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Icon size={24} />
                </div>

                <ArrowRight className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
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