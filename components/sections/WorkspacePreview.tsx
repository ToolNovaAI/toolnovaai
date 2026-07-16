import Link from "next/link";
import {
  Bot,
  Search,
  Sparkles,
  MessageCircle,
  Code2,
  Type,
  Image,
  FileText,
  ArrowUpRight,
} from "lucide-react";

const workspaces = [
  {
    title: "AI",
    description: "AI Writing & Productivity",
    href: "/dashboard",
    icon: Bot,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "SEO",
    description: "SEO Optimization",
    href: "/dashboard",
    icon: Search,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "GEO",
    description: "Generative Engine",
    href: "/dashboard",
    icon: Sparkles,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "AEO",
    description: "Answer Engine",
    href: "/dashboard",
    icon: MessageCircle,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Developer",
    description: "Code Utilities",
    href: "/dashboard",
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Text",
    description: "Writing Tools",
    href: "/dashboard",
    icon: Type,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Image",
    description: "Image Optimization",
    href: "/dashboard",
    icon: Image,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    title: "PDF",
    description: "PDF Utilities",
    href: "/dashboard",
    icon: FileText,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
];

export default function WorkspacePreview() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Workspace OS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Explore Workspaces
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Everything you need for AI, SEO, GEO, AEO,
            Developers and Content Creation in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {workspaces.map((workspace) => {
            const Icon = workspace.icon;

            return (
              <Link
                key={workspace.title}
                href={workspace.href}
                className="group rounded-3xl border border-white/10 bg-[#0B1220] p-6 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${workspace.bg}`}
                  >
                    <Icon
                      className={workspace.color}
                      size={28}
                    />
                  </div>

                  <ArrowUpRight className="text-zinc-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {workspace.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {workspace.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}