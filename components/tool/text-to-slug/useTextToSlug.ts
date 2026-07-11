"use client";

import { useMemo, useState } from "react";

export function useTextToSlug() {
  const [text, setText] = useState("");

  const slug = useMemo(() => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }, [text]);

  function clear() {
    setText("");
  }

  return {
    text,
    setText,
    clear,
    slug,
    length: slug.length,
  };
}