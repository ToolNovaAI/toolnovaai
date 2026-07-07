import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
}

interface ToolSidebarProps {
  title?: string;
  description?: string;
  items: SidebarItem[];
}

export default function ToolSidebar({
  title = "Related Tools",
  description = "Discover more tools to boost your productivity.",
  items,
}: ToolSidebarProps) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-zinc-400">
        {description}
      </p>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/10"
          >
            <span className="text-sm font-medium text-zinc-200">
              {item.title}
            </span>

            <ArrowRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </aside>
  );
}