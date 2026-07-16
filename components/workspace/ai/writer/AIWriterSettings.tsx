"use client";

import {
  Brain,
  Globe,
  SlidersHorizontal,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react";

export default function AIWriterSettings() {
  return (
    <aside className="space-y-6">
      {/* AI Configuration */}
      <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10">
            <Brain
              size={22}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              AI Configuration
            </h2>

            <p className="text-sm text-zinc-400">
              Customize AI generation
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {/* Tone */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Tone
            </label>

            <select className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500">
              <option>Professional</option>
              <option>Friendly</option>
              <option>Formal</option>
              <option>Casual</option>
              <option>Creative</option>
              <option>Persuasive</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Globe size={15} />
              Language
            </label>

            <select className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Japanese</option>
            </select>
          </div>

          {/* Length */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Content Length
            </label>

            <select className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500">
              <option>Short (300 words)</option>
              <option>Medium (800 words)</option>
              <option>Long (1500 words)</option>
              <option>Very Long (3000+ words)</option>
            </select>
          </div>

          {/* AI Model */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Sparkles size={15} />
              AI Model
            </label>

            <select className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500">
              <option>GPT-5.5</option>
              <option>GPT-5</option>
              <option>GPT-4.1</option>
            </select>
          </div>

          {/* Creativity */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <SlidersHorizontal size={15} />
                Creativity
              </label>

              <span className="text-xs text-cyan-400">
                Balanced
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="60"
              className="w-full accent-cyan-500"
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-zinc-300">
              <Target size={15} />
              Focus Keywords
            </label>

            <input
              type="text"
              placeholder="AI, SEO, Content Marketing"
              className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-cyan-500"
            />
          </div>

          {/* Audience */}
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-300">
              Target Audience
            </label>

            <input
              type="text"
              placeholder="Beginners, Developers..."
              className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-cyan-500"
            />
          </div>
        </div>
      </section>

      {/* Generate Button */}
      <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-[#0B1220] to-[#050816] p-6">
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400">
          <Wand2 size={20} />
          Generate with AI
        </button>

        <p className="mt-4 text-center text-sm leading-6 text-zinc-400">
          AI will generate high-quality content based on your prompt
          and selected settings.
        </p>
      </section>
    </aside>
  );
}