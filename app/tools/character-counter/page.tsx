"use client";

import ToolHero from "@/components/tool/ToolHero";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSidebar from "@/components/tool/ToolSidebar";
import TextInput from "@/components/tool/TextInput";

import CharacterCounterStats from "@/components/tool/character-counter/CharacterCounterStats";
import { useCharacterCounter } from "@/components/tool/character-counter/useCharacterCounter";

export default function CharacterCounterPage() {
  const {
  text,
  setText,
  clear,
  characters,
  charactersNoSpaces,
  words,
  lines,
  sentences,
  paragraphs,
  readingTime,
  speakingTime,
  tokens,
} = useCharacterCounter();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <ToolLayout
        hero={
          <ToolHero
            title="Character Counter"
            description="Count characters, words, lines, sentences, paragraphs, reading time, speaking time, and estimated AI tokens instantly."
            category="SEO"
            badge="FREE"
          />
        }
        main={
          <div className="space-y-8">
            <TextInput
              text={text}
              onChange={setText}
              onClear={clear}
            />

            <CharacterCounterStats
              characters={characters}
              charactersNoSpaces={charactersNoSpaces}
              words={words}
              lines={lines}
              sentences={sentences}
              paragraphs={paragraphs}
              readingTime={readingTime}
              speakingTime={speakingTime}
              tokens={tokens}
            />
          </div>
        }
        sidebar={
          <ToolSidebar
            items={[
              {
                title: "Word Counter",
                href: "/tools/word-counter",
              },
              {
                title: "Text to Slug",
                href: "/tools/text-to-slug",
              },
              {
                title: "Meta Generator",
                href: "/tools/meta-generator",
              },
              {
                title: "Keyword Density Checker",
                href: "/tools/keyword-density-checker",
              },
            ]}
          />
        }
      />
    </main>
  );
}