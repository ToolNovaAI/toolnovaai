"use client";

import { useMemo, useState } from "react";

import Container from "../ui/container";
import SectionHeading from "../ui/SectionHeading";
import ToolDirectoryCard from "../ui/ToolDirectoryCard";
import ToolSearch from "../ui/ToolSearch";
import CategoryFilter from "../ui/CategoryFilter";

import { allTools } from "@/constants/allTools";

const categories = [
  "All",
  "AI",
  "SEO",
  "Developer",
  "Text",
  "Utilities",
];

export default function ToolsDirectory() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = useMemo(() => {
    return allTools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" ||
        tool.category === activeCategory;

      const query = search.toLowerCase();

      const matchesSearch =
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Tools"
          title="Browse all professional tools"
          description="Find AI, SEO, developer and productivity tools designed to help you work faster."
        />

        <div className="mt-12">
          <ToolSearch
            value={search}
            onChange={setSearch}
            placeholder="Search tools..."
          />
        </div>

        <div className="mt-8">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolDirectoryCard
              key={tool.id}
              title={tool.title}
              description={tool.description}
              href={tool.href}
              category={tool.category}
              badge={tool.badge}
              featured={tool.featured}
            />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="mt-16 rounded-3xl border border-dashed border-white/10 p-12 text-center">
            <h3 className="text-xl font-semibold text-white">
              No tools found
            </h3>

            <p className="mt-3 text-zinc-400">
              Try another keyword or choose a different category.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}