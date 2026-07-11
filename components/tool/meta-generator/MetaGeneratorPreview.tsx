"use client";

interface MetaGeneratorPreviewProps {
  title: string;
  description: string;
  url: string;
}

export default function MetaGeneratorPreview({
  title,
  description,
  url,
}: MetaGeneratorPreviewProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Google Search Preview
      </h2>

      <div className="rounded-xl border border-white/10 bg-[#050816] p-6">
        <p className="cursor-pointer text-[22px] font-medium text-[#8ab4f8] hover:underline">
          {title || "Your SEO Title will appear here"}
        </p>

        <p className="mt-1 break-all text-sm text-[#34A853]">
          {url || "https://example.com/page"}
        </p>

        <p className="mt-3 text-[15px] leading-6 text-zinc-300">
          {description ||
            "Your optimized meta description will appear here. Keep it informative, engaging and under Google's recommended limit."}
        </p>
      </div>

      <div className="mt-5 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <p className="text-sm text-cyan-300">
          <strong>Tip:</strong> Keep your title under <strong>60</strong>{" "}
          characters and your meta description under{" "}
          <strong>160</strong> characters for the best SEO results.
        </p>
      </div>
    </section>
  );
}