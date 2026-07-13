"use client";

import { Bell, Command, Search, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex h-20 items-center justify-between px-8">
      {/* Left */}
      <div className="flex flex-1 items-center">
        <div className="relative w-full max-w-xl">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            type="text"
            placeholder="Search tools, workspaces or commands..."
            className="h-12 w-full rounded-2xl border border-white/10 bg-[#0B1220] pl-11 pr-28 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-500"
          />

          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-400">
            <Command size={12} />
            K
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="ml-8 flex items-center gap-4">
        {/* Quick Action */}
        <button className="rounded-xl border border-white/10 bg-[#0B1220] p-3 transition hover:border-cyan-500 hover:bg-cyan-500/10">
          <Settings
            size={18}
            className="text-zinc-300"
          />
        </button>

        {/* Notification */}
        <button className="relative rounded-xl border border-white/10 bg-[#0B1220] p-3 transition hover:border-cyan-500 hover:bg-cyan-500/10">
          <Bell
            size={18}
            className="text-zinc-300"
          />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400" />
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0B1220] px-3 py-2 transition hover:border-cyan-500">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
            G
          </div>

          <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-white">
              Grey
            </p>

            <p className="text-xs text-zinc-400">
              Workspace Owner
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}