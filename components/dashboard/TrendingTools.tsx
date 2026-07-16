"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  TrendingUp,
  FileText,
  Search,
  Sparkles,
  Code2,
  Image,
  Type,
} from "lucide-react";

const trendingTools = [
  {
    id: 1,
    title: "Meta Generator",
    category: "SEO",
    icon: FileText,
    users: "18.2K",
    href: "/tools/meta-generator",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 2,
    title: "SEO Audit",
    category: "SEO",
    icon: Search,
    users: "15.7K",
    href: "/tools/seo-audit",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    id: 3,
    title: "AI Writer",
    category: "AI",
    icon: Sparkles,
    users: "12.4K",
    href: "/workspace/ai",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    id: 4,
    title: "JSON Formatter",
    category: "Developer",
    icon: Code2,
    users: "10.1K",
    href: "/tools/json-formatter",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    id: 5,
    title: "Image Compressor",
    category: "Image",
    icon: Image,
    users: "9.8K",
    href: "/tools/image-compressor",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    id: 6,
    title: "Word Counter",
    category: "Text",
    icon: Type,
    users: "8.5K",
    href: "/tools/word-counter",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
];

export default function TrendingTools() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
            <TrendingUp
              size={24}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              Trending Tools
            </h2>

            <p className="mt-1 text-sm text-zinc-400">
              Most popular tools this week.
            </p>
          </div>
        </div>

        <Link
          href="/tools"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Explore All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {trendingTools.map((tool) => {
          const Icon = tool.icon;

          return (
            <Link
              key={tool.id}
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

              <h3 className="mt-5 text-lg font-semibold text-white">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {tool.category} Workspace
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  🔥 {tool.users} users
                </span>

                <span className="text-sm text-zinc-500">
                  Open →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}