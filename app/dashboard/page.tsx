import HeroBanner from "@/components/dashboard/HeroBanner";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardGrid from "@/components/dashboard/DashboardGrid";

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
        {/* Hero Banner */}
        <HeroBanner />

        {/* Dashboard Stats */}
        <DashboardStats />

        {/* Dashboard OS */}
        <DashboardGrid />
      </div>
    </WorkspaceLayout>
  );
}