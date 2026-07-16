"use client";

import { Search, Command } from "lucide-react";

interface SearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value = "",
  onChange,
  placeholder = "Search tools, workspaces, AI commands...",
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      {/* Search Icon */}
      <Search
        size={20}
        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-white/10
          bg-[#0B1220]
          pl-14
          pr-24
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          duration-300
          focus:border-cyan-500/60
          focus:ring-4
          focus:ring-cyan-500/10
        "
      />

      {/* Keyboard Shortcut */}
      <div
        className="
          absolute
          right-4
          top-1/2
          flex
          -translate-y-1/2
          items-center
          gap-2
          rounded-xl
          border
          border-white/10
          bg-white/5
          px-3
          py-1.5
          text-xs
          text-zinc-400
        "
      >
        <Command size={14} />
        <span>K</span>
      </div>
    </div>
  );
}