"use client";

import { useState } from "react";

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  async function copy(text: string) {
    if (!text.trim()) return false;

    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

      return true;
    } catch (error) {
      console.error("Failed to copy:", error);
      return false;
    }
  }

  return {
    copied,
    copy,
  };
}