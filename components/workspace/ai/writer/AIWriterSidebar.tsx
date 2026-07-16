"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileText,
  FolderOpen,
  PenSquare,
  Sparkles,
  Star,
} from "lucide-react";

const recentDocuments = [
  {
    title: "SEO Blog Draft",
    time: "12 min ago",
  },
  {
    title: "Landing Page Copy",
    time: "48 min ago",
  },
  {
    title: "Product Description",
    time: "Yesterday",
  },
];

const templates = [
  "Blog Article",
  "Email",
  "Landing Page",
  "Social Media",
  "Product Description",
];

const projects = [
  "ToolNovaAI Website",
  "SEO Workspace",
  "Marketing Campaign",
];

export default function AIWriterSidebar() {
  return (
    <aside className="space-y-6">
      {/* Recent Documents */}
      <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Recent
          </h2>

          <FileText
            size={18}
            className="text-cyan-400"
          />
        </div>

        <div className="space-y-3">
          {recentDocuments.map((doc) => (
            <Link
              key={doc.title}
              href="#"
              className="group block rounded-2xl border border-transparent bg-white/5 p-4 transition hover:border-cyan-500/30 hover:bg-white/10"
            >
              <h3 className="font-medium text-white">
                {doc.title}
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                {doc.time}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Templates */}
      <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Templates
          </h2>

          <Sparkles
            size={18}
            className="text-yellow-400"
          />
        </div>

        <div className="space-y-2">
          {templates.map((template) => (
            <button
              key={template}
              className="flex w-full items-center justify-between rounded-xl border border-transparent bg-white/5 px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-white"
            >
              <span>{template}</span>

              <ArrowRight
                size={16}
                className="opacity-50"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">
            Projects
          </h2>

          <FolderOpen
            size={18}
            className="text-green-400"
          />
        </div>

        <div className="space-y-3">
          {projects.map((project) => (
            <button
              key={project}
              className="flex w-full items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/10"
            >
              <FolderOpen
                size={16}
                className="text-green-400"
              />

              <span>{project}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Favorites */}
      <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-[#0B1220] p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20">
            <Star
              size={22}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Favorite Prompt
            </h3>

            <p className="text-sm text-zinc-400">
              Blog Writer
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-zinc-300">
          Generate a professional SEO optimized article with headings,
          FAQs, metadata and internal linking suggestions.
        </p>

        <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-500 px-4 py-3 font-semibold text-black transition hover:bg-cyan-400">
          <PenSquare size={18} />
          Use Prompt
        </button>
      </section>
    </aside>
  );
}