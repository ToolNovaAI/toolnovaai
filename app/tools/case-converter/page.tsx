"use client";

import { useState } from "react";

import ToolHero from "@/components/tool/ToolHero";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSidebar from "@/components/tool/ToolSidebar";
import TextInput from "@/components/tool/TextInput";
import ToolActions from "@/components/tool/ToolActions";
import { useClipboard } from "@/hooks/useClipboard";

import { useCaseConverter } from "@/components/tool/case-converter/useCaseConverter";
import CaseConverterStats from "@/components/tool/case-converter/CaseConverterStats";

export default function CaseConverterPage() {
  const { text, setText, clear, output } = useCaseConverter();

  const [selected, setSelected] =
    useState<keyof typeof output>("uppercase");

  const { copied, copy } = useClipboard();

  async function handleCopy() {
    await copy(output[selected]);
  }

  const cases = [
    ["uppercase", "UPPER"],
    ["lowercase", "lower"],
    ["titlecase", "Title"],
    ["sentencecase", "Sentence"],
    ["camelcase", "camel"],
    ["pascalcase", "Pascal"],
    ["snakecase", "snake"],
    ["kebabcase", "kebab"],
    ["constantcase", "CONSTANT"],
  ] as const;

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <ToolLayout
        hero={
          <ToolHero
            title="Case Converter"
            description="Convert text between uppercase, lowercase, title case, camelCase, snake_case and more instantly."
            category="Text"
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

            <div className="flex flex-wrap gap-2">
              {cases.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelected(key)}
                  className={`rounded-xl px-4 py-2 text-sm transition ${
                    selected === key
                      ? "bg-cyan-500 text-white"
                      : "bg-white/5 text-zinc-300 hover:bg-white/10"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <pre className="whitespace-pre-wrap break-words text-white">
                {output[selected]}
              </pre>
            </div>

            <ToolActions
              actions={[
                {
                  label: copied ? "Copied ✓" : "Copy",
                  onClick: handleCopy,
                  disabled: !output[selected],
                },
                {
                  label: "Clear",
                  onClick: clear,
                  variant: "danger",
                  disabled: !text,
                },
              ]}
            />

            <CaseConverterStats text={text} />
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
                title: "Character Counter",
                href: "/tools/character-counter",
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