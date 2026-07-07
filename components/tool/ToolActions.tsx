import { ReactNode } from "react";

interface ToolAction {
  label: string;
  onClick?: () => void;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

interface ToolActionsProps {
  actions: ToolAction[];
}

export default function ToolActions({
  actions,
}: ToolActionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={action.onClick}
          disabled={action.disabled}
          className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
            action.variant === "primary"
              ? "bg-cyan-500 text-white hover:bg-cyan-400"
              : action.variant === "danger"
              ? "bg-red-500/10 text-red-300 hover:bg-red-500/20"
              : "border border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
          } ${action.disabled ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
}