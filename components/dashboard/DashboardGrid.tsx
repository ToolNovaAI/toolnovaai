import ContinueWorking from "@/components/dashboard/ContinueWorking";
import PinnedTools from "@/components/dashboard/PinnedTools";
import WorkspaceHealth from "@/components/dashboard/WorkspaceHealth";
import RecentProjects from "@/components/dashboard/RecentProjects";
import AIFeed from "@/components/dashboard/AIFeed";
import TrendingTools from "@/components/dashboard/TrendingTools";

export default function DashboardGrid() {
  return (
    <section className="grid gap-8">
      {/* Row 1 */}
      <ContinueWorking />

      {/* Row 2 */}
      <div className="grid gap-8 xl:grid-cols-3">
        <div className="space-y-8 xl:col-span-2">
          <PinnedTools />
          <RecentProjects />
        </div>

        <div className="space-y-8">
          <WorkspaceHealth score={92} />
          <AIFeed />
        </div>
      </div>

      {/* Row 3 */}
      <TrendingTools />
    </section>
  );
}