import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-cyan-400/40">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
        <Icon size={28} className="text-cyan-300" />
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-zinc-400 leading-7">
        {description}
      </p>
    </div>
  );
}