"use client";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              active
                ? "border-cyan-500/40 bg-cyan-500/15 text-cyan-300"
                : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/10 hover:text-white"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}