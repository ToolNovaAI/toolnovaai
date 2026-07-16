"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import GlassCard from "./GlassCard";
import {
  workspaceIcons,
  type WorkspaceIconKey,
} from "@/lib/workspace-icons";

interface WorkspaceCardProps {
  title: string;
  description: string;
  href: string;
  icon: WorkspaceIconKey;
  color: string;
  tools: number;
}

const colorClasses: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  rose: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function WorkspaceCard({
  title,
  description,
  href,
  icon,
  color,
  tools,
}: WorkspaceCardProps) {
  const Icon = workspaceIcons[icon];

  return (
    <Link href={href} className="block h-full">
      <GlassCard
        glow
        className="group h-full p-6"
      >
        <div className="flex items-center justify-between">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
              colorClasses[color] ?? colorClasses.cyan
            }`}
          >
            <Icon size={28} />
          </div>

          <ArrowRight className="text-zinc-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300">
            {tools} Tools
          </span>

          <span className="text-sm font-medium text-cyan-400">
            Open →
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}