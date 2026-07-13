"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Search,
  Sparkles,
  Share2,
  Code2,
  Type,
  Image,
  FileText,
  MessageCircle,
} from "lucide-react";

import GlassCard from "./GlassCard";

interface WorkspaceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  tools: number;
}

const icons = {
  bot: Bot,
  search: Search,
  sparkles: Sparkles,
  share2: Share2,
  code2: Code2,
  type: Type,
  image: Image,
  "file-text": FileText,
  "message-circle": MessageCircle,
};

export default function WorkspaceCard({
  title,
  description,
  href,
  icon,
  tools,
}: WorkspaceCardProps) {
  const Icon =
    icons[icon as keyof typeof icons] ?? Bot;

  return (
    <Link href={href}>
      <GlassCard
        glow
        className="group h-full cursor-pointer p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <Icon size={28} />
          </div>

          <ArrowRight className="text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
        </div>

        <h3 className="mt-6 text-xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          {description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            {tools}+ Tools
          </span>

          <span className="text-sm font-medium text-cyan-400">
            Open →
          </span>
        </div>
      </GlassCard>
    </Link>
  );
}