import { LucideIcon, TrendingUp } from "lucide-react";
import GlassCard from "./GlassCard";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  positive?: boolean;
}

export default function MetricCard({
  title,
  value,
  icon: Icon,
  change,
  positive = true,
}: MetricCardProps) {
  return (
    <GlassCard
      glow
      className="p-6"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-400">
            {title}
          </p>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white">
            {value}
          </h3>

          {change && (
            <div
              className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                positive
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              <TrendingUp size={14} />
              {change}
            </div>
          )}
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
          <Icon
            size={26}
            className="text-cyan-400"
          />
        </div>
      </div>
    </GlassCard>
  );
}