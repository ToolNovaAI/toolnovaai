"use client";

import {
  Clock3,
  FileText,
  Sparkles,
  Type,
  Wand2,
} from "lucide-react";

import { useAIWriterContext } from "./AIWriterProvider";

export default function AIWriterEditor() {
  const {
    content,
    setContent,
    stats,
  } = useAIWriterContext();

  return (
    <section
      id="editor"
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220]"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5">
        <div>
          <h2 className="text-xl font-bold text-white">
            AI Editor
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Write naturally or let AI generate content for you.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <Sparkles size={16} />
            Generate
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300 transition hover:bg-purple-500/20"
          >
            <Wand2 size={16} />
            Improve
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="p-6">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`Start writing here...

Example:
Write a 1500-word SEO optimized blog about Artificial Intelligence.

Tone: Professional
Audience: Beginners
Language: English`}
          className="min-h-[550px] w-full resize-none rounded-2xl border border-white/10 bg-[#050816] p-6 text-base leading-8 text-white outline-none transition focus:border-cyan-500"
        />
      </div>

      {/* Footer Stats */}
      <div className="grid gap-4 border-t border-white/10 bg-[#09111F] px-6 py-5 md:grid-cols-3">
        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <FileText
            size={20}
            className="text-cyan-400"
          />

          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Words
            </p>

            <h3 className="text-lg font-bold text-white">
              {stats.words}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <Type
            size={20}
            className="text-green-400"
          />

          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Characters
            </p>

            <h3 className="text-lg font-bold text-white">
              {stats.characters}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
          <Clock3
            size={20}
            className="text-orange-400"
          />

          <div>
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Reading Time
            </p>

            <h3 className="text-lg font-bold text-white">
              {stats.readingTime} min
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}