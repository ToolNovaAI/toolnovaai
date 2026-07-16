"use client";

import SearchItem from "./SearchItem";
import type { SearchItem as SearchItemType } from "@/constants/searchIndex";

interface SearchResultsProps {
  results: SearchItemType[];
  query: string;
}

export default function SearchResults({
  results,
  query,
}: SearchResultsProps) {
  // Nothing typed
  if (!query.trim()) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-[#0B1220] p-10 text-center">
        <h3 className="text-lg font-semibold text-white">
          Start typing...
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Search workspaces, tools, categories or AI commands.
        </p>
      </div>
    );
  }

  // No results
  if (results.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-red-500/20 bg-[#0B1220] p-10 text-center">
        <h3 className="text-lg font-semibold text-white">
          No results found
        </h3>

        <p className="mt-2 text-sm text-zinc-400">
          Try another keyword or browse a workspace.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
          Search Results
        </h2>

        <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
          {results.length} Result{results.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* Results */}
      <div className="max-h-[520px] space-y-4 overflow-y-auto pr-2">
        {results.map((item) => (
          <SearchItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}