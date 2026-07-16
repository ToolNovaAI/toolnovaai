"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  FolderOpen,
  Wrench,
} from "lucide-react";

import type { SearchItem as SearchItemType } from "@/constants/searchIndex";

interface SearchItemProps {
  item: SearchItemType;
}

const categoryIcons = {
  workspace: FolderOpen,
  tool: Wrench,
  category: Bot,
};

const categoryColors = {
  workspace:
    "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  tool:
    "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  category:
    "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function SearchItem({
  item,
}: SearchItemProps) {
  const Icon = categoryIcons[item.category];

  return (
    <Link
      href={item.href}
      className="group block"
    >
      <div className="flex items-start justify-between rounded-2xl border border-white/10 bg-[#0B1220] p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]">
        <div className="flex gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
              categoryColors[item.category]
            }`}
          >
            <Icon size={22} />
          </div>

          <div>
            <h3 className="font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {item.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                {item.workspace}
              </span>

              <span
                className={`rounded-full border px-3 py-1 text-xs ${
                  categoryColors[item.category]
                }`}
              >
                {item.category}
              </span>
            </div>
          </div>
        </div>

        <ArrowUpRight className="text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400" />
      </div>
    </Link>
  );
}