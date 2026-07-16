export interface AISuggestion {
  id: number;
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  status: "Pending" | "Completed";
}

export const aiSuggestions: AISuggestion[] = [
  {
    id: 1,
    title: "Improve Meta Title",
    description:
      "Your page title can be optimized for better CTR and SEO.",
    priority: "High",
    status: "Pending",
  },
  {
    id: 2,
    title: "Add Meta Description",
    description:
      "Write a compelling meta description under 160 characters.",
    priority: "High",
    status: "Pending",
  },
  {
    id: 3,
    title: "Generate FAQ Schema",
    description:
      "Increase visibility in search results with structured data.",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 4,
    title: "Optimize Heading Structure",
    description:
      "Use one H1 and proper H2/H3 hierarchy.",
    priority: "Medium",
    status: "Pending",
  },
  {
    id: 5,
    title: "Add Open Graph Tags",
    description:
      "Improve social sharing previews on Facebook and LinkedIn.",
    priority: "Low",
    status: "Pending",
  },
];