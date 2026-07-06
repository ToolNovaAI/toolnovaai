import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  count: string;
}

export default function CategoryCard({
  title,
  description,
  href,
  icon: Icon,
  count,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
    >
      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 transition-transform duration-300 group-hover:scale-110">
        <Icon size={28} className="text-cyan-300" />
      </div>

      {/* Tool Count */}
      <span className="mb-3 inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
        {count}
      </span>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
        <span>Explore</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}