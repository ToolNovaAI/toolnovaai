import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import SearchProvider from "@/components/search/SearchProvider";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toolnovaai.vercel.app"),
  title: {
    default: "ToolNovaAI",
    template: "%s | ToolNovaAI",
  },
  description:
    "Premium AI Workspace for SEO, GEO, AEO, Developers and Content Creators.",
  keywords: [
    "AI Workspace",
    "SEO Workspace",
    "Developer Workspace",
    "ToolNovaAI",
  ],
  authors: [{ name: "ToolNovaAI" }],
  creator: "ToolNovaAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="bg-[#050816] text-white">
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
}