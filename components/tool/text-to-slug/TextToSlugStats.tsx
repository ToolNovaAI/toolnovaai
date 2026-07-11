"use client";

interface TextToSlugStatsProps {
  slug: string;
  length: number;
}

export default function TextToSlugStats({
  slug,
  length,
}: TextToSlugStatsProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="space-y-6">
        <div>
          <p className="mb-2 text-sm font-medium text-zinc-400">
            Generated Slug
          </p>

          <div className="rounded-xl border border-white/10 bg-[#050816] p-4">
            <code className="break-all text-base text-cyan-300">
              {slug || "your-slug-will-appear-here"}
            </code>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-[#050816] p-4">
            <p className="text-sm text-zinc-400">
              Slug Length
            </p>

            <p className="mt-2 text-3xl font-bold text-white">
              {length}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#050816] p-4">
            <p className="text-sm text-zinc-400">
              SEO Status
            </p>

            <p
              className={`mt-2 text-lg font-semibold ${
                length > 0 && length <= 75
                  ? "text-emerald-400"
                  : "text-amber-400"
              }`}
            >
              {length > 0 && length <= 75
                ? "Good"
                : "Needs Improvement"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}