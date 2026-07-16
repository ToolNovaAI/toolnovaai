"use client";

import {
  Copy,
  Download,
  FilePlus2,
  Redo2,
  Save,
  Sparkles,
  Undo2,
  Wand2,
} from "lucide-react";

import { useAIWriterContext } from "./AIWriterProvider";

export default function AIWriterToolbar() {
  const {
    save,
    copy,
    download,
    undo,
    redo,
    clear,
  } = useAIWriterContext();

  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-4 shadow-lg">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Left */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={clear}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            <FilePlus2 size={18} />
            New
          </button>

          <button
            type="button"
            onClick={save}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-500/40 hover:bg-white/10"
          >
            <Save size={17} />
            Save
          </button>

          <button
            type="button"
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-500/40 hover:bg-white/10"
          >
            <Copy size={17} />
            Copy
          </button>

          <button
            type="button"
            onClick={download}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:border-cyan-500/40 hover:bg-white/10"
          >
            <Download size={17} />
            Export
          </button>
        </div>

        {/* Center */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={undo}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-cyan-500/40 hover:bg-white/10"
          >
            <Undo2 size={18} />
          </button>

          <button
            type="button"
            onClick={redo}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-cyan-500/40 hover:bg-white/10"
          >
            <Redo2 size={18} />
          </button>

          <div className="h-8 w-px bg-white/10" />

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3 font-medium text-cyan-300 transition hover:bg-cyan-500/20"
          >
            <Wand2 size={18} />
            Improve
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 px-4 py-3 font-medium text-purple-300 transition hover:bg-purple-500/20"
          >
            <Sparkles size={18} />
            Generate
          </button>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          <select className="rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500">
            <option>Professional</option>
            <option>Friendly</option>
            <option>Casual</option>
            <option>Formal</option>
            <option>Marketing</option>
            <option>Creative</option>
          </select>

          <select className="rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-500">
            <option>GPT-5.5</option>
            <option>GPT-5</option>
            <option>GPT-4.1</option>
          </select>
        </div>
      </div>
    </section>
  );
}