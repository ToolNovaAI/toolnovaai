"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Clock3,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "ToolNovaAI SEO Audit",
    workspace: "SEO Workspace",
    progress: 92,
    status: "Active",
    updated: "18 min ago",
    href: "/dashboard/projects/toolnovaai-seo",
  },
  {
    id: 2,
    name: "Landing Page Optimization",
    workspace: "AI Workspace",
    progress: 68,
    status: "In Progress",
    updated: "2 hours ago",
    href: "/dashboard/projects/landing-page",
  },
  {
    id: 3,
    name: "Developer Toolkit",
    workspace: "Developer Workspace",
    progress: 100,
    status: "Completed",
    updated: "Yesterday",
    href: "/dashboard/projects/developer-toolkit",
  },
];

export default function RecentProjects() {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0B1220] p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Projects
          </h2>

          <p className="mt-2 text-sm text-zinc-400">
            Continue your latest workspace projects.
          </p>
        </div>

        <Link
          href="/dashboard/projects"
          className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
        >
          View All
        </Link>
      </div>

      <div className="space-y-5">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.href}
            className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-white">
                    {project.name}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/10 text-green-400"
                        : project.status === "Active"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="mt-2 text-sm text-zinc-400">
                  {project.workspace}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
                  <Clock3 size={15} />
                  Updated {project.updated}
                </div>
              </div>

              {/* Right */}
              <div className="w-full max-w-xs">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-zinc-400">
                    Progress
                  </span>

                  <span className="font-semibold text-cyan-400">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-cyan-500 transition-all duration-700"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>

                <div className="mt-5 flex justify-end">
                  <ArrowUpRight className="text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}