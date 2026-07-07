import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ToolHeroProps {
  title: string;
  description: string;
  category: string;
  badge?: string;
}

export default function ToolHero({
  title,
  description,
  category,
  badge = "FREE",
}: ToolHeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
      {/* Background Glow */}
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-zinc-500">
          <Link
            href="/tools"
            className="transition hover:text-white"
          >
            Tools
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span>{title}</span>
        </div>

        {/* Category + Badge */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            {category}
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-400">
          {description}
        </p>
      </div>
    </section>
  );
}