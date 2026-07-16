"use client";

import { useMemo, useState } from "react";

import {
  searchIndex,
  type SearchItem,
} from "@/constants/searchIndex";

export function useSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo((): SearchItem[] => {
    const value = query.trim().toLowerCase();

    if (!value) return [];

    return searchIndex.filter((item) => {
      const title = item.title.toLowerCase();
      const description = item.description.toLowerCase();
      const workspace = item.workspace.toLowerCase();

      const keywordMatch = item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(value)
      );

      return (
        title.includes(value) ||
        description.includes(value) ||
        workspace.includes(value) ||
        keywordMatch
      );
    });
  }, [query]);

  const clear = () => setQuery("");

  return {
    query,
    setQuery,
    results,
    clear,
    hasResults: results.length > 0,
    isEmpty: query.trim().length > 0 && results.length === 0,
  };
}