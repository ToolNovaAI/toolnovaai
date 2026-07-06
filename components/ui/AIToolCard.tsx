interface AIToolCardProps {
  title: string;
  description: string;
  badge: string;
}

export default function AIToolCard({
  title,
  description,
  badge,
}: AIToolCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-2xl">
      <div className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
        {badge}
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  );
}