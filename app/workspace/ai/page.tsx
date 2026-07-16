import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import WorkspaceLayout from "@/components/layout/WorkspaceLayout";

import AIHero from "@/components/workspace/ai/AIHero";
import AIQuickActions from "@/components/workspace/ai/AIQuickActions";
import AIUsageStats from "@/components/workspace/ai/AIUsageStats";
import AIToolsGrid from "@/components/workspace/ai/AIToolsGrid";
import AIPromptLibrary from "@/components/workspace/ai/AIPromptLibrary";
import AIRecentChats from "@/components/workspace/ai/AIRecentChats";
import AIActivity from "@/components/workspace/ai/AIActivity";

export default function AIWorkspacePage() {
  return (
    <WorkspaceLayout
      sidebar={<Sidebar />}
      topbar={<Topbar />}
    >
      <div className="space-y-10">
        {/* Hero */}
        <AIHero />

        {/* Usage Statistics */}
        <AIUsageStats />

        {/* Quick Actions */}
        <AIQuickActions />

        {/* AI Tools */}
        <AIToolsGrid />

        {/* Bottom Grid */}
        <div className="grid gap-8 xl:grid-cols-2">
          <AIPromptLibrary />
          <AIRecentChats />
        </div>

        {/* Activity */}
        <AIActivity />
      </div>
    </WorkspaceLayout>
  );
}