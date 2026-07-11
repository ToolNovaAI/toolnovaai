"use client";

import ToolStats from "../ToolStats";

interface MetaGeneratorStatsProps {
  titleLength: number;
  descriptionLength: number;
  titleRemaining: number;
  descriptionRemaining: number;
  titleStatus: string;
  descriptionStatus: string;
}

export default function MetaGeneratorStats({
  titleLength,
  descriptionLength,
  titleRemaining,
  descriptionRemaining,
  titleStatus,
  descriptionStatus,
}: MetaGeneratorStatsProps) {
  return (
    <ToolStats
      stats={[
        {
          label: "Title Length",
          value: `${titleLength}/60`,
        },
        {
          label: "Description Length",
          value: `${descriptionLength}/160`,
        },
        {
          label: "Remaining Title",
          value: titleRemaining,
        },
        {
          label: "Remaining Description",
          value: descriptionRemaining,
        },
        {
          label: "Title Status",
          value: titleStatus,
        },
        {
          label: "Description Status",
          value: descriptionStatus,
        },
      ]}
    />
  );
}