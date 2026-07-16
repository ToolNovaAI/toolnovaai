export interface QuickAction {
  id: number;
  title: string;
  href: string;
}

export const quickActions: QuickAction[] = [
  {
    id: 1,
    title: "Meta Generator",
    href: "/tools/meta-generator",
  },
  {
    id: 2,
    title: "Schema Generator",
    href: "/tools/schema-generator",
  },
  {
    id: 3,
    title: "Robots.txt Generator",
    href: "/tools/robots-generator",
  },
  {
    id: 4,
    title: "Sitemap Generator",
    href: "/tools/sitemap-generator",
  },
];