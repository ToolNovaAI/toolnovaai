import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface ToolCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export default function ToolCard({
  icon,
  title,
  description,
  href,
  badge = "FREE",
}: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
    >
      {/* Badge */}
      <span className="absolute right-4 top-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
        {badge}
      </span>

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-2xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-300">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-2 text-sm font-medium text-cyan-300">
        <span>Open Tool</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}