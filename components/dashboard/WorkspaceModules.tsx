import WorkspaceCard from "@/components/ui/WorkspaceCard";
import { workspaces } from "@/constants/workspaces";

export default function WorkspaceModules() {
  return (
    <section className="space-y-8">
      {/* Section Heading */}
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white">
          Explore Workspaces
        </h2>

        <p className="mt-3 text-zinc-400">
          Everything you need for AI, SEO, GEO, AEO, SMO, Developer,
          Image, PDF and Content creation — all in one premium workspace.
        </p>
      </div>

      {/* Workspace Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {workspaces.map((workspace) => (
          <WorkspaceCard
            key={workspace.id}
            title={workspace.title}
            description={workspace.description}
            href={workspace.href}
            icon={workspace.icon}
            color={workspace.color}
            tools={workspace.tools}
          />
        ))}
      </div>
    </section>
  );
}