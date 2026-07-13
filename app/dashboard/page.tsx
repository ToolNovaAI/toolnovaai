import HeroBanner from "@/components/dashboard/HeroBanner";
import DashboardStats from "@/components/dashboard/DashboardStats";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import WorkspaceLayout from "@/components/layout/WorkspaceLayout";

export default function DashboardPage() {
  return (
    <WorkspaceLayout
      sidebar={<Sidebar />}
      topbar={<Topbar />}
    >
      <div className="space-y-10">
        {/* Hero */}
        <HeroBanner />

        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Workspace Preview */}
        <section className="rounded-3xl border border-dashed border-cyan-500/30 bg-cyan-500/5 p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white">
              Workspace v2 is Coming 🚀
            </h2>

            <p className="mt-4 text-zinc-400">
              We're building the next-generation AI Productivity Workspace for
              SEO, GEO, AEO, SMO, Developers and Content Creators.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "AI Workspace",
                description: "AI writing, prompts & automation.",
              },
              {
                title: "SEO Workspace",
                description: "Meta, Schema, Robots & Sitemap tools.",
              },
              {
                title: "Developer Workspace",
                description: "JSON, HTML, CSS & utilities.",
              },
              {
                title: "Text Workspace",
                description: "Word Counter, Slug & Text tools.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#0B1220] p-6 transition hover:border-cyan-500/40 hover:bg-[#10192d]"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>

                <button className="mt-6 rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-cyan-400">
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </WorkspaceLayout>
  );
}