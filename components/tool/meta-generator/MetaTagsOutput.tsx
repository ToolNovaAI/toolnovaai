"use client";

interface MetaTagsOutputProps {
  html: string;
}

export default function MetaTagsOutput({
  html,
}: MetaTagsOutputProps) {
  async function copyHtml() {
    try {
      await navigator.clipboard.writeText(html);
    } catch (error) {
      console.error("Failed to copy HTML:", error);
    }
  }

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Generated Meta Tags
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Ready-to-use HTML for your website.
          </p>
        </div>

        <button
          onClick={copyHtml}
          className="rounded-xl bg-cyan-500 px-5 py-2 font-medium text-white transition hover:bg-cyan-400"
        >
          Copy HTML
        </button>
      </div>

      <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#050816] p-5 text-sm leading-7 text-cyan-300">
        <code>{html || "<!-- Meta tags will appear here -->"}</code>
      </pre>
    </section>
  );
}