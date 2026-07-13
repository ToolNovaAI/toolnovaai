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
        <section className="rounded-3xl border border-dashed border-cyan-500/30 bg-cyan-500/5 p-10 text-center">
          <h2 className="text-3xl font-bold text-white">
            Workspace v2 is Coming 🚀
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
            We're building the next generation AI Productivity Workspace for
            SEO, GEO, AEO, SMO, Developers and Content Creators.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "AI Workspace",
              "SEO Workspace",
              "Developer Workspace",
              "Text Workspace",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-[#0B1220] p-6 transition hover:border-cyan-500/40 hover:bg-[#10192d]"
              >
                <h3 className="font-semibold text-white">
                  {item}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Coming soon...
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </WorkspaceLayout>
  );
}