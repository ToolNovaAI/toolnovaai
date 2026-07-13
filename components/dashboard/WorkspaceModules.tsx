import WorkspaceCard from "@/components/ui/WorkspaceCard";
import { workspaces } from "@/constants/workspaces";

export default function WorkspaceModules() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white">
          Explore Workspaces
        </h2>

        <p className="mt-2 max-w-2xl text-zinc-400">
          Access every AI, SEO, GEO, AEO, SMO, Developer and
          Productivity workspace from one premium dashboard.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {workspaces.map((workspace) => (
          <WorkspaceCard
            key={workspace.title}
            title={workspace.title}
            description={workspace.description}
            href={workspace.href}
            icon={workspace.icon}
            tools={workspace.tools}
          />
        ))}
      </div>
    </section>
  );
}