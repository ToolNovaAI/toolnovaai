"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  FileText,
  Search,
  Code2,
  Type,
  Image,
  Sparkles,
} from "lucide-react";

const pinnedTools = [
  {
    title: "Meta Generator",
    description: "Generate SEO meta tags",
    href: "/tools/meta-generator",
    icon: FileText,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "SEO Audit",
    description: "Analyze website SEO",
    href: "/tools/seo-audit",
    icon: Search,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "JSON Formatter",
    description: "Beautify & validate JSON",
    href: "/tools/json-formatter",
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Word Counter",
    description: "Count words instantly",
    href: "/tools/word-counter",
    icon: Type,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Image Compressor",
    description: "Optimize images",
    href: "/tools/image-compressor",
    icon: Image,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "AI Writer",
    description: "Generate AI content",
    href: "/workspace/ai",
    icon: Sparkles,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function PinnedTools() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Pinned Tools
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Your most frequently used tools.
          </p>
        </div>

        <Link
          href="/tools"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {pinnedTools.map((tool) => {
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

              <h3 className="mt-5 text-lg font-semibold text-white">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {tool.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}