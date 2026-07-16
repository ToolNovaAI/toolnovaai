"use client";

import { Bell, Plus, User } from "lucide-react";

import SearchTrigger from "@/components/search/SearchTrigger";
import { useSearchModal } from "@/components/search/SearchProvider";

export default function Topbar() {
  const { open } = useSearchModal();

  return (
    <div className="flex h-20 items-center justify-between gap-6 px-8">
      {/* Search */}
      <div className="flex-1">
        <SearchTrigger onClick={open} />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#0B1220] transition hover:border-cyan-500/40"
        >
          <Bell size={20} className="text-zinc-400" />
        </button>

        {/* New */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-2xl bg-cyan-500 px-5 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          <Plus size={18} />
          <span>New</span>
        </button>

        {/* Profile */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-semibold text-white"
        >
          <User size={18} />
        </button>
      </div>
    </div>
  );
}