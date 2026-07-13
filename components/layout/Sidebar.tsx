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

const sections = [
  {
    title: "Workspace",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "AI Workspace",
        href: "/ai",
        icon: Bot,
      },
      {
        label: "SEO Workspace",
        href: "/seo",
        icon: Search,
      },
      {
        label: "GEO Workspace",
        href: "/geo",
        icon: Sparkles,
      },
      {
        label: "AEO Workspace",
        href: "/aeo",
        icon: Sparkles,
      },
      {
        label: "SMO Workspace",
        href: "/smo",
        icon: Share2,
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        label: "Developer",
        href: "/developer",
        icon: Code2,
      },
      {
        label: "Text Tools",
        href: "/text",
        icon: Type,
      },
      {
        label: "Image Tools",
        href: "/image",
        icon: Image,
      },
      {
        label: "PDF Tools",
        href: "/pdf",
        icon: FileText,
      },
      {
        label: "Utilities",
        href: "/utilities",
        icon: Wrench,
      },
    ],
  },
  {
    title: "Library",
    items: [
      {
        label: "Favorites",
        href: "/favorites",
        icon: Heart,
      },
      {
        label: "Recent",
        href: "/recent",
        icon: History,
      },
      {
        label: "Projects",
        href: "/projects",
        icon: FolderOpen,
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col bg-[#090D1F]">
      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Tool
          <span className="text-cyan-400">NovaAI</span>
        </h1>

        <p className="mt-2 text-sm text-zinc-400">
          AI Productivity Workspace
        </p>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="mb-8"
          >
            <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              {section.title}
            </h2>

            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-cyan-500/10 hover:text-cyan-300"
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Upgrade Card */}
      <div className="border-t border-white/10 p-4">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
          <div className="mb-3 flex items-center gap-2">
            <Crown
              size={18}
              className="text-cyan-400"
            />

            <span className="font-semibold text-white">
              ToolNova Pro
            </span>
          </div>

          <p className="mb-4 text-sm text-zinc-300">
            Unlock AI workflows, saved projects, premium SEO tools and advanced
            productivity features.
          </p>

          <button className="w-full rounded-xl bg-cyan-500 py-2 font-semibold text-black transition hover:bg-cyan-400">
            Upgrade
          </button>
        </div>
      </div>
    </aside>
  );
}