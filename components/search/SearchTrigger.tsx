"use client";

import { Search, Command } from "lucide-react";

interface SearchTriggerProps {
  onClick: () => void;
}

export default function SearchTrigger({
  onClick,
}: SearchTriggerProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        flex
        h-12
        w-full
        max-w-xl
        items-center
        justify-between
        rounded-2xl
        border
        border-white/10
        bg-[#0B1220]
        px-4
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:bg-[#10192d]
        focus:outline-none
        focus:ring-4
        focus:ring-cyan-500/10
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <Search
          size={18}
          className="text-zinc-500 transition group-hover:text-cyan-400"
        />

        <span className="text-sm text-zinc-400">
          Search tools, workspaces or AI...
        </span>
      </div>

      {/* Shortcut */}
      <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
        <Command size={14} />

        <span>K</span>
      </div>
    </button>
  );
}