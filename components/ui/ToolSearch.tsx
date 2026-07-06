"use client";

import { Search } from "lucide-react";

interface ToolSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function ToolSearch({
  value,
  onChange,
  placeholder = "Search tools...",
}: ToolSearchProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-500" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          py-4
          pl-14
          pr-5
          text-white
          placeholder:text-zinc-500
          backdrop-blur-xl
          outline-none
          transition-all
          duration-300
          focus:border-cyan-500/40
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />
    </div>
  );
}