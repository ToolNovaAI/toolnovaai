"use client";

interface SeoScoreProps {
  score: number;
  titleLength: number;
  descriptionLength: number;
  hasKeyword: boolean;
  hasBrand: boolean;
  hasUrl: boolean;
}

function ScoreItem({
  label,
  passed,
}: {
  label: string;
  passed: boolean;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#050816] px-4 py-3">
      <span className="text-sm text-zinc-300">
        {label}
      </span>

      <span
        className={`font-semibold ${
          passed ? "text-emerald-400" : "text-red-400"
        }`}
      >
        {passed ? "✓ Pass" : "✕ Fail"}
      </span>
    </div>
  );
}

export default function SeoScore({
  score,
  titleLength,
  descriptionLength,
  hasKeyword,
  hasBrand,
  hasUrl,
}: SeoScoreProps) {
  const scoreColor =
    score >= 90
      ? "text-emerald-400"
      : score >= 70
      ? "text-cyan-400"
      : score >= 50
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          SEO SCORE
        </p>

        <h2 className={`mt-3 text-6xl font-bold ${scoreColor}`}>
          {score}
          <span className="text-3xl text-zinc-500">/100</span>
        </h2>

        <p className="mt-2 text-zinc-400">
          Live SEO Quality Analysis
        </p>
      </div>

      <div className="space-y-3">
        <ScoreItem
          label="SEO Title Length"
          passed={
            titleLength >= 30 &&
            titleLength <= 60
          }
        />

        <ScoreItem
          label="Meta Description Length"
          passed={
            descriptionLength >= 120 &&
            descriptionLength <= 160
          }
        />

        <ScoreItem
          label="Primary Keyword"
          passed={hasKeyword}
        />

        <ScoreItem
          label="Brand Name"
          passed={hasBrand}
        />

        <ScoreItem
          label="Website URL"
          passed={hasUrl}
        />
      </div>

      <div className="mt-6 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <p className="text-sm text-cyan-300">
          Improve your score by writing a compelling title,
          adding a detailed description, and providing your
          brand name, keyword, and website URL.
        </p>
      </div>
    </section>
  );
}