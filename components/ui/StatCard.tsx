interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export default function StatCard({
  value,
  label,
  description,
}: StatCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-2xl">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10" />

      <div className="relative">
        <h3 className="text-5xl font-bold tracking-tight text-white">
          {value}
        </h3>

        <p className="mt-3 text-lg font-semibold text-white">
          {label}
        </p>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}