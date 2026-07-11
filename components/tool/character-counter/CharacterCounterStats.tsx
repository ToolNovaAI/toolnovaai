import ToolStats from "../ToolStats";

interface CharacterCounterStatsProps {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  lines: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  speakingTime: number;
  tokens: number;
}

export default function CharacterCounterStats({
  characters,
  charactersNoSpaces,
  words,
  lines,
  sentences,
  paragraphs,
  readingTime,
  speakingTime,
  tokens,
}: CharacterCounterStatsProps) {
  return (
    <ToolStats
      stats={[
        {
          label: "Characters",
          value: characters,
        },
        {
          label: "Characters (No Spaces)",
          value: charactersNoSpaces,
        },
        {
          label: "Words",
          value: words,
        },
        {
          label: "Lines",
          value: lines,
        },
        {
          label: "Sentences",
          value: sentences,
        },
        {
          label: "Paragraphs",
          value: paragraphs,
        },
        {
          label: "Reading Time",
          value: `${readingTime} min`,
        },
        {
          label: "Speaking Time",
          value: `${speakingTime} min`,
        },
        {
          label: "Estimated AI Tokens",
          value: tokens,
        },
      ]}
    />
  );
}