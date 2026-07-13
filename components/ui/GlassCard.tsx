import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl",
        "border border-white/10",
        "bg-white/5 backdrop-blur-xl",
        "shadow-lg shadow-black/20",
        "transition-all duration-300",
        hover
          ? "hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-cyan-500/10"
          : "",
        className,
      ].join(" ")}
    >
      {glow && (
        <>
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        </>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}