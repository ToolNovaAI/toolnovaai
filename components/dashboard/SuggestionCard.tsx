import { AlertCircle, CheckCircle2, Clock } from "lucide-react";

interface SuggestionCardProps {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
}

export default function SuggestionCard({
  title,
  description,
  priority,
  status,
}: SuggestionCardProps) {
  const priorityStyle = {
    High: "bg-red-500/10 text-red-400 border-red-500/20",
    Medium: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    Low: "bg-green-500/10 text-green-400 border-green-500/20",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220] p-5 transition duration-300 hover:border-cyan-500/40 hover:bg-[#10192d]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {status === "Completed" ? (
            <CheckCircle2 className="mt-0.5 text-green-400" size={22} />
          ) : (
            <Clock className="mt-0.5 text-cyan-400" size={22} />
          )}

          <div>
            <h3 className="text-base font-semibold text-white">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {description}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            priorityStyle[priority]
          }`}
        >
          {priority}
        </span>
      </div>

      {status === "Pending" && (
        <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
          <AlertCircle size={14} />
          AI recommends completing this task.
        </div>
      )}
    </div>
  );
}