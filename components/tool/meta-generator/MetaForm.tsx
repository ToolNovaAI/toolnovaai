"use client";

interface MetaFormProps {
  brandName: string;
  setBrandName: (value: string) => void;

  websiteUrl: string;
  setWebsiteUrl: (value: string) => void;

  pageUrl: string;
  setPageUrl: (value: string) => void;

  primaryKeyword: string;
  setPrimaryKeyword: (value: string) => void;

  description: string;
  setDescription: (value: string) => void;

  pageType: string;
  setPageType: (value: string) => void;
}

const pageTypes = [
  "Tool",
  "Homepage",
  "Blog",
  "Service",
  "Product",
  "Category",
];

export default function MetaForm({
  brandName,
  setBrandName,

  websiteUrl,
  setWebsiteUrl,

  pageUrl,
  setPageUrl,

  primaryKeyword,
  setPrimaryKeyword,

  description,
  setDescription,

  pageType,
  setPageType,
}: MetaFormProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Meta Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Brand Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Brand Name
          </label>

          <input
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            placeholder="ToolNovaAI"
            className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Website URL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Website URL
          </label>

          <input
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            placeholder="https://toolnovaai.com"
            className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Page URL */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Page URL
          </label>

          <input
            value={pageUrl}
            onChange={(e) => setPageUrl(e.target.value)}
            placeholder="/meta-generator"
            className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Primary Keyword */}
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Primary Keyword
          </label>

          <input
            value={primaryKeyword}
            onChange={(e) => setPrimaryKeyword(e.target.value)}
            placeholder="Meta Tag Generator"
            className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Description
          </label>

          <textarea
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your page..."
            className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-cyan-500 resize-none"
          />
        </div>

        {/* Page Type */}
        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Page Type
          </label>

          <select
            value={pageType}
            onChange={(e) => setPageType(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3 text-white outline-none transition focus:border-cyan-500"
          >
            {pageTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}