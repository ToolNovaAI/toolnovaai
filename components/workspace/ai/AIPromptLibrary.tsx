"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  GraduationCap,
  Megaphone,
  PenSquare,
  Sparkles,
} from "lucide-react";

const prompts = [
  {
    title: "Blog Writing",
    description: "Generate SEO-friendly blog articles.",
    category: "Content",
    href: "/workspace/ai/prompts/blog",
    icon: PenSquare,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Marketing Copy",
    description: "Create high-converting ad copy.",
    category: "Marketing",
    href: "/workspace/ai/prompts/marketing",
    icon: Megaphone,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "Coding Assistant",
    description: "Generate and explain code.",
    category: "Developer",
    href: "/workspace/ai/prompts/code",
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Business Ideas",
    description: "Brainstorm startups and products.",
    category: "Business",
    href: "/workspace/ai/prompts/business",
    icon: Briefcase,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Learning",
    description: "Study, summarize and explain topics.",
    category: "Education",
    href: "/workspace/ai/prompts/learning",
    icon: GraduationCap,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Creative Writing",
    description: "Stories, scripts and creative ideas.",
    category: "Creative",
    href: "/workspace/ai/prompts/creative",
    icon: Sparkles,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
];

export default function AIPromptLibrary() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Prompt Library
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Ready-to-use prompts for your everyday AI workflow.
          </p>
        </div>

        <Link
          href="/workspace/ai/prompts"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Browse All
        </Link>
      </div>

      {/* Prompt Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {prompts.map((prompt) => {
          const Icon = prompt.icon;

          return (
            <Link
              key={prompt.title}
              href={prompt.href}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${prompt.bg}`}
                >
                  <Icon
                    size={22}
                    className={prompt.color}
                  />
                </div>

                <ArrowUpRight className="text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
              </div>

              {/* Title */}
              <h3 className="mt-6 min-h-[60px] text-xl font-semibold leading-8 text-white">
                {prompt.title}
              </h3>

              {/* Category */}
              <div className="mt-3">
                <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                  {prompt.category}
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 flex-1 text-sm leading-7 text-zinc-400">
                {prompt.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}