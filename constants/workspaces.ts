import type { WorkspaceIconKey } from "@/lib/workspace-icons";

export interface Workspace {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: WorkspaceIconKey;
  color: string;
  tools: number;
}

export const workspaces: Workspace[] = [
  {
    id: "ai",
    title: "AI Workspace",
    description: "AI writing, prompts, automation & productivity.",
    href: "/workspace/ai",
    icon: "bot",
    color: "cyan",
    tools: 18,
  },
  {
    id: "seo",
    title: "SEO Workspace",
    description: "Meta, Schema, Robots, Sitemap & SEO tools.",
    href: "/workspace/seo",
    icon: "search",
    color: "emerald",
    tools: 15,
  },
  {
    id: "geo",
    title: "GEO Workspace",
    description: "Optimize content for AI search engines.",
    href: "/workspace/geo",
    icon: "sparkles",
    color: "purple",
    tools: 8,
  },
  {
    id: "aeo",
    title: "AEO Workspace",
    description: "Answer Engine Optimization.",
    href: "/workspace/aeo",
    icon: "message-circle",
    color: "amber",
    tools: 10,
  },
  {
    id: "smo",
    title: "SMO Workspace",
    description: "Social Media Optimization.",
    href: "/workspace/smo",
    icon: "share2",
    color: "pink",
    tools: 10,
  },
  {
    id: "developer",
    title: "Developer Workspace",
    description: "JSON, HTML, CSS, Base64 & developer tools.",
    href: "/workspace/developer",
    icon: "code2",
    color: "orange",
    tools: 24,
  },
  {
    id: "text",
    title: "Text Workspace",
    description: "Word Counter, Slug, Case Converter & more.",
    href: "/workspace/text",
    icon: "type",
    color: "blue",
    tools: 20,
  },
  {
    id: "image",
    title: "Image Workspace",
    description: "Resize, Compress, Convert & Optimize.",
    href: "/workspace/image",
    icon: "image",
    color: "rose",
    tools: 12,
  },
  {
    id: "pdf",
    title: "PDF Workspace",
    description: "Merge, Split, Compress & Convert PDFs.",
    href: "/workspace/pdf",
    icon: "file-text",
    color: "red",
    tools: 14,
  },
];