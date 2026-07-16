export type SearchCategory =
  | "workspace"
  | "tool"
  | "category";

export interface SearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
  workspace: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  // ==========================
  // AI Workspace
  // ==========================
  {
    id: "ai-workspace",
    title: "AI Workspace",
    description: "AI tools, prompts and automation.",
    href: "/workspace/ai",
    category: "workspace",
    workspace: "AI",
    keywords: ["ai", "assistant", "chat", "prompt"],
  },

  // ==========================
  // SEO Workspace
  // ==========================
  {
    id: "seo-workspace",
    title: "SEO Workspace",
    description: "Professional SEO optimization tools.",
    href: "/workspace/seo",
    category: "workspace",
    workspace: "SEO",
    keywords: ["seo", "audit", "ranking", "google"],
  },

  // ==========================
  // Meta Generator
  // ==========================
  {
    id: "meta-generator",
    title: "Meta Generator",
    description: "Generate SEO-friendly meta tags.",
    href: "/tools/meta-generator",
    category: "tool",
    workspace: "SEO",
    keywords: [
      "meta",
      "title",
      "description",
      "seo",
      "og",
      "twitter",
    ],
  },

  // ==========================
  // Word Counter
  // ==========================
  {
    id: "word-counter",
    title: "Word Counter",
    description: "Count words, characters and reading time.",
    href: "/tools/word-counter",
    category: "tool",
    workspace: "Text",
    keywords: [
      "word",
      "counter",
      "characters",
      "reading",
    ],
  },

  // ==========================
  // Character Counter
  // ==========================
  {
    id: "character-counter",
    title: "Character Counter",
    description: "Count characters instantly.",
    href: "/tools/character-counter",
    category: "tool",
    workspace: "Text",
    keywords: [
      "character",
      "letters",
      "count",
    ],
  },

  // ==========================
  // Case Converter
  // ==========================
  {
    id: "case-converter",
    title: "Case Converter",
    description: "Convert text case instantly.",
    href: "/tools/case-converter",
    category: "tool",
    workspace: "Text",
    keywords: [
      "uppercase",
      "lowercase",
      "camel",
      "snake",
    ],
  },

  // ==========================
  // JSON Formatter
  // ==========================
  {
    id: "json-formatter",
    title: "JSON Formatter",
    description: "Beautify and validate JSON.",
    href: "/tools/json-formatter",
    category: "tool",
    workspace: "Developer",
    keywords: [
      "json",
      "beautify",
      "format",
      "developer",
    ],
  },
];