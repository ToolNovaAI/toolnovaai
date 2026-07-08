"use client";

import ToolHero from "@/components/tool/ToolHero";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSidebar from "@/components/tool/ToolSidebar";

import WordCounterInput from "@/components/tool/word-counter/WordCounterInput";
import WordCounterStats from "@/components/tool/word-counter/WordCounterStats";
import { useWordCounter } from "@/components/tool/word-counter/useWordCounter";

export default function WordCounterPage() {
  const {
  text,
  setText,
  clear,
  words,
  characters,
  charactersNoSpaces,
  sentences,
  paragraphs,
  readingTime,
  speakingTime,
  averageWordLength,
  longestWord,
} = useWordCounter();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <ToolLayout
        hero={
          <ToolHero
            title="Word Counter"
            description="Count words, characters, sentences, paragraphs and estimated reading time instantly."
            category="Text"
            badge="FREE"
          />
        }
       main={
  <div className="space-y-8">
    <WordCounterInput
      text={text}
      onChange={setText}
      onClear={clear}
    />

    <WordCounterStats
      words={words}
      characters={characters}
      charactersNoSpaces={charactersNoSpaces}
      sentences={sentences}
      paragraphs={paragraphs}
      readingTime={readingTime}
      speakingTime={speakingTime}
      averageWordLength={averageWordLength}
      longestWord={longestWord}
    />
  </div>
}
        sidebar={
          <ToolSidebar
            items={[
              {
                title: "Character Counter",
                href: "/tools/character-counter",
              },
              {
                title: "Case Converter",
                href: "/tools/case-converter",
              },
              {
                title: "Text to Slug",
                href: "/tools/text-to-slug",
              },
              {
                title: "Meta Generator",
                href: "/tools/meta-generator",
              },
            ]}
          />
        }
      />
    </main>
  );
}