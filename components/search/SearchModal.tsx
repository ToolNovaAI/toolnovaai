"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import { useSearch } from "@/hooks/useSearch";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchModal({
  open,
  onClose,
}: SearchModalProps) {
  const {
    query,
    setQuery,
    results,
    clear,
  } = useSearch();

  // ESC Key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clear();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [open, clear, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        onClick={() => {
          clear();
          onClose();
        }}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-20 z-50 w-full max-w-3xl -translate-x-1/2 px-4">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#090D1F] shadow-2xl">
          {/* Header */}
          <div className="border-b border-white/10 p-5">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <SearchBar
                  value={query}
                  onChange={setQuery}
                />
              </div>

              <button
                onClick={() => {
                  clear();
                  onClose();
                }}
                className="rounded-xl border border-white/10 p-3 text-zinc-400 transition hover:border-cyan-500/30 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="max-h-[70vh] overflow-y-auto p-6">
            <SearchResults
              query={query}
              results={results}
            />
          </div>
        </div>
      </div>
    </>
  );
}