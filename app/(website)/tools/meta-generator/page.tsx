"use client";

import ToolHero from "@/components/tool/ToolHero";
import ToolLayout from "@/components/tool/ToolLayout";
import ToolSidebar from "@/components/tool/ToolSidebar";

import MetaForm from "@/components/tool/meta-generator/MetaForm";
import MetaGeneratorPreview from "@/components/tool/meta-generator/MetaGeneratorPreview";
import MetaGeneratorStats from "@/components/tool/meta-generator/MetaGeneratorStats";
import MetaTagsOutput from "@/components/tool/meta-generator/MetaTagsOutput";
import SeoScore from "@/components/tool/meta-generator/SeoScore";
import { useMetaGenerator } from "@/components/tool/meta-generator/useMetaGenerator";

export default function MetaGeneratorPage() {
  const meta = useMetaGenerator();

  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <ToolLayout
        hero={
          <ToolHero
            title="Meta Generator"
            description="Generate SEO-friendly meta titles, descriptions, Open Graph tags, Twitter tags and canonical tags."
            category="SEO"
            badge="FREE"
          />
        }
        main={
          <div className="space-y-8">
            <MetaForm
  brandName={meta.brandName}
  setBrandName={meta.setBrandName}
  websiteUrl={meta.websiteUrl}
  setWebsiteUrl={meta.setWebsiteUrl}
  pageUrl={meta.pageUrl}
  setPageUrl={meta.setPageUrl}
  primaryKeyword={meta.primaryKeyword}
  setPrimaryKeyword={meta.setPrimaryKeyword}
  description={meta.description}
  setDescription={meta.setDescription}
  pageType={meta.pageType}
  setPageType={meta.setPageType}
/>

            <SeoScore
              score={meta.score}
              titleLength={meta.titleLength}
              descriptionLength={meta.descriptionLength}
              hasKeyword={Boolean(meta.primaryKeyword)}
              hasBrand={Boolean(meta.brandName)}
              hasUrl={Boolean(meta.websiteUrl)}
            />

            <MetaGeneratorStats
              titleLength={meta.titleLength}
              descriptionLength={meta.descriptionLength}
              titleRemaining={60 - meta.titleLength}
              descriptionRemaining={160 - meta.descriptionLength}
              titleStatus={
                meta.titleLength <= 60 ? "Good" : "Too Long"
              }
              descriptionStatus={
                meta.descriptionLength <= 160
                  ? "Good"
                  : "Too Long"
              }
            />

            <MetaGeneratorPreview
              title={meta.seoTitle}
              description={meta.metaDescription}
              url={
                meta.websiteUrl
                  ? `${meta.websiteUrl}${meta.pageUrl}`
                  : meta.pageUrl
              }
            />

            <MetaTagsOutput html={meta.html} />

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  navigator.clipboard.writeText(meta.html)
                }
                className="rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white transition hover:bg-cyan-400"
              >
                Copy HTML
              </button>

              <button
                onClick={meta.clear}
                className="rounded-xl border border-red-500 px-5 py-3 font-medium text-red-400 transition hover:bg-red-500/10"
              >
                Clear
              </button>
            </div>
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
                title: "Case Converter",
                href: "/tools/case-converter",
              },
              {
                title: "Text to Slug",
                href: "/tools/text-to-slug",
              },
            ]}
          />
        }
      />
    </main>
  );
}