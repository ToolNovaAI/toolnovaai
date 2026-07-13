"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Bot,
  Search,
  Sparkles,
  Share2,
  Code2,
 Type,
  Image,
  FileText,
  Wrench,
  Heart,
  History,
  FolderOpen,
  Crown,
} from "lucide-react";

const menu = [
  {
    title: "Workspace",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "AI Workspace", href: "/ai", icon: Bot },
      { name: "SEO Workspace", href: "/seo", icon: Search },
      { name: "GEO Workspace", href: "/geo", icon: Sparkles },
      { name: "AEO Workspace", href: "/aeo", icon: Sparkles },
      { name: "SMO Workspace", href: "/smo", icon: Share2 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Developer", href: "/developer", icon: Code2 },
      { name: "Text Tools", href: "/text", icon: Type },
      { name: "Image Tools", href: "/image", icon: Image },
      { name: "PDF Tools", href: "/pdf", icon: FileText },
      { name: "Utilities", href: "/utilities", icon: Wrench },
    ],
  },
  {
    title: "Library",
    items: [
      { name: "Favorites", href: "/favorites", icon: Heart },
      { name: "Recent", href: "/recent", icon: History },
      { name: "Projects", href: "/projects", icon: FolderOpen },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Tool<span className="text-cyan-400">NovaAI</span>
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          AI Productivity Workspace
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {menu.map((section) => (
          <div
            key={section.title}
            className="mb-8"
          >
            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              {section.title}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-zinc-300 transition hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Pro Card */}
      <div className="border-t border-white/10 p-4">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Crown className="text-cyan-400" size={18} />
            <span className="font-semibold text-white">
              ToolNova Pro
            </span>
          </div>

          <p className="mb-4 text-sm text-zinc-300">
            Unlock AI workflows, saved projects, team collaboration and premium
            SEO tools.
          </p>

          <button className="w-full rounded-xl bg-cyan-500 py-2 text-sm font-semibold text-white transition hover:bg-cyan-400">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}