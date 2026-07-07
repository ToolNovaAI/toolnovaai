interface ToolStat {
  label: string;
  value: string | number;
}

interface ToolStatsProps {
  stats: ToolStat[];
}

export default function ToolStats({
  stats,
}: ToolStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
        >
          <p className="text-sm text-zinc-400">
            {stat.label}
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white">
            {stat.value}
          </h3>
        </div>
      ))}
    </div>
  );
}