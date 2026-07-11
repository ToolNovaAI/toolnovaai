"use client";

import ToolHero from "@/components/tool/ToolHero";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSidebar from "@/components/tool/ToolSidebar";
import TextInput from "@/components/tool/TextInput";

import TextToSlugStats from "@/components/tool/text-to-slug/TextToSlugStats";
import { useTextToSlug } from "@/components/tool/text-to-slug/useTextToSlug";

export default function TextToSlugPage() {
  const {
    text,
    setText,
    clear,
    slug,
    length,
  } = useTextToSlug();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <ToolLayout
        hero={
          <ToolHero
            title="Text to Slug"
            description="Convert any title or sentence into a clean SEO-friendly URL slug instantly."
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

            <TextToSlugStats
              slug={slug}
              length={length}
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
                title: "Character Counter",
                href: "/tools/character-counter",
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