import {
  Bot,
  Search,
  Wrench,
  Activity,
} from "lucide-react";

import MetricCard from "@/components/ui/MetricCard";

export default function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Total Tools"
        value="120+"
        icon={Wrench}
        change="+12 New Tools"
      />

      <MetricCard
        title="SEO Workspace"
        value="15 Modules"
        icon={Search}
        change="Production Ready"
      />

      <MetricCard
        title="AI Features"
        value="35+"
        icon={Bot}
        change="+8 AI Updates"
      />

      <MetricCard
        title="Workspace Health"
        value="99.9%"
        icon={Activity}
        change="Excellent"
      />
    </section>
  );
}