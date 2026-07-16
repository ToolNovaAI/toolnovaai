import HeroBanner from "@/components/dashboard/HeroBanner";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DashboardGrid from "@/components/dashboard/DashboardGrid";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <HeroBanner />
      <DashboardStats />
      <DashboardGrid />
    </div>
  );
}