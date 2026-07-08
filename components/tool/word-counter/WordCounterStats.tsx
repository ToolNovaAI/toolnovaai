import ToolStats from "../ToolStats";

interface WordCounterStatsProps {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: number;
  speakingTime: number;
  averageWordLength: number;
  longestWord: string;
}

export default function WordCounterStats({
  words,
  characters,
  charactersNoSpaces,
  sentences,
  paragraphs,
  readingTime,
  speakingTime,
  averageWordLength,
  longestWord,
}: WordCounterStatsProps) {
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
          label: "Characters (No Spaces)",
          value: charactersNoSpaces,
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
          label: "Average Word Length",
          value: averageWordLength,
        },
        {
          label: "Longest Word",
          value: longestWord || "-",
        },
      ]}
    />
  );
}