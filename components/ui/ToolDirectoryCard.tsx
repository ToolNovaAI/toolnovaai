import Link from "next/link";
import {
  ArrowRight,
  Braces,
  FileText,
  Globe,
  Sparkles,
  Wrench,
} from "lucide-react";

interface ToolDirectoryCardProps {
  title: string;
  description: string;
  href: string;
  category: string;
  badge: string;
  featured: boolean;
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "AI":
      return Sparkles;

    case "SEO":
      return Globe;

    case "Developer":
      return Braces;

    case "Utilities":
      return Wrench;

    default:
      return FileText;
  }
}

export default function ToolDirectoryCard({
  title,
  description,
  href,
  category,
  badge,
  featured,
}: ToolDirectoryCardProps) {
  const Icon = getCategoryIcon(category);

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-2xl"
    >
      {featured && (
        <span className="absolute right-5 top-5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
          Featured
        </span>
      )}

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-cyan-400">
        <Icon className="h-7 w-7" />
      </div>

      <div className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
        {badge}
      </div>

      <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-cyan-300">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-medium text-cyan-400">
        Open Tool
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}