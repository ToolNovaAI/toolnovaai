"use client";

import ToolStats from "../ToolStats";

interface CaseConverterStatsProps {
  text: string;
}

export default function CaseConverterStats({
  text,
}: CaseConverterStatsProps) {
  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characters = text.length;

  const lines = text
    ? text.split("\n").length
    : 0;

  return (
    <ToolStats
      stats={[
        {
          label: "Words",
          value: words,
        },
        {
          label: "Characters",
          value: characters,
        },
        {
          label: "Lines",
          value: lines,
        },
      ]}
    />
  );
}