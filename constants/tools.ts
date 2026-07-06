import {
  FileText,
  Type,
  CaseSensitive,
  Link as LinkIcon,
  Globe,
  Bot,
  Map,
  Braces,
} from "lucide-react";

export const popularTools = [
  {
    title: "Word Counter",
    description: "Count words, characters and reading time instantly.",
    href: "/tools/word-counter",
    icon: FileText,
    badge: "FREE",
  },
  {
    title: "Character Counter",
    description: "Count characters instantly with live updates.",
    href: "/tools/character-counter",
    icon: Type,
    badge: "FREE",
  },
  {
    title: "Case Converter",
    description: "Convert text between uppercase, lowercase and more.",
    href: "/tools/case-converter",
    icon: CaseSensitive,
    badge: "FREE",
  },
  {
    title: "Text to Slug",
    description: "Generate SEO-friendly URL slugs in one click.",
    href: "/tools/text-to-slug",
    icon: LinkIcon,
    badge: "FREE",
  },
  {
    title: "Meta Generator",
    description: "Generate optimized meta titles and descriptions.",
    href: "/tools/meta-generator",
    icon: Globe,
    badge: "FREE",
  },
  {
    title: "Robots.txt Generator",
    description: "Create robots.txt files for search engines.",
    href: "/tools/robots-generator",
    icon: Bot,
    badge: "FREE",
  },
  {
    title: "Sitemap Generator",
    description: "Generate XML sitemaps for better indexing.",
    href: "/tools/sitemap-generator",
    icon: Map,
    badge: "FREE",
  },
  {
    title: "JSON Formatter",
    description: "Beautify and validate JSON instantly.",
    href: "/tools/json-formatter",
    icon: Braces,
    badge: "FREE",
  },
];