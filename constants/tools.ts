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
    description: "Count words, characters, sentences and reading time instantly.",
    href: "/tools/word-counter",
    icon: Type,
    badge: "FREE",
  },
  {
    title: "Character Counter",
    description: "Count characters with live updates and AI token estimates.",
    href: "/tools/character-counter",
    icon: FileText,
    badge: "FREE",
  },
  {
    title: "Case Converter",
    description: "Convert text between uppercase, lowercase, title case and more.",
    href: "/tools/case-converter",
    icon: CaseSensitive,
    badge: "FREE",
  },
  {
    title: "Text to Slug",
    description: "Generate clean SEO-friendly URL slugs instantly.",
    href: "/tools/text-to-slug",
    icon: LinkIcon,
    badge: "FREE",
  },
  {
    title: "Meta Generator",
    description: "Generate optimized meta titles and descriptions.",
    href: "/tools/meta-generator",
    icon: Globe,
    badge: "COMING SOON",
  },
  {
    title: "Robots.txt Generator",
    description: "Create robots.txt files for search engines.",
    href: "/tools/robots-generator",
    icon: Bot,
    badge: "COMING SOON",
  },
  {
    title: "Sitemap Generator",
    description: "Generate XML sitemaps for better indexing.",
    href: "/tools/sitemap-generator",
    icon: Map,
    badge: "COMING SOON",
  },
  {
    title: "JSON Formatter",
    description: "Beautify and validate JSON instantly.",
    href: "/tools/json-formatter",
    icon: Braces,
    badge: "COMING SOON",
  },
];