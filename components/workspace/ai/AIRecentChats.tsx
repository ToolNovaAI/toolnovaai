"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
  MessageSquare,
  Sparkles,
} from "lucide-react";

const chats = [
  {
    id: 1,
    title: "SEO Blog Article",
    preview: "Generate a 2,000-word SEO article about AI tools...",
    time: "18 min ago",
    href: "/workspace/ai/chat/seo-blog",
  },
  {
    id: 2,
    title: "Landing Page Copy",
    preview: "Rewrite homepage copy with premium SaaS tone...",
    time: "1 hour ago",
    href: "/workspace/ai/chat/landing-page",
  },
  {
    id: 3,
    title: "Email Campaign",
    preview: "Create a product launch email sequence...",
    time: "Yesterday",
    href: "/workspace/ai/chat/email-campaign",
  },
  {
    id: 4,
    title: "Prompt Engineering",
    preview: "Optimize prompts for GPT and Claude models...",
    time: "2 days ago",
    href: "/workspace/ai/chat/prompts",
  },
];

export default function AIRecentChats() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Chats
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Resume your recent AI conversations.
          </p>
        </div>

        <Link
          href="/workspace/ai/chat"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {chats.map((chat) => (
          <Link
            key={chat.id}
            href={chat.href}
            className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                <MessageSquare
                  size={22}
                  className="text-cyan-400"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="truncate text-lg font-semibold text-white">
                    {chat.title}
                  </h3>

                  <ArrowUpRight className="text-zinc-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
                  {chat.preview}
                </p>

                <div className="mt-4 flex items-center gap-5 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <Clock3 size={14} />
                    {chat.time}
                  </span>

                  <span className="flex items-center gap-1">
                    <Sparkles size={14} />
                    AI Conversation
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}