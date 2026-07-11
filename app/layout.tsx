import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/Footer";

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
  metadataBase: new URL("https://toolnovaai.com"),
  title: {
    default: "ToolNovaAI",
    template: "%s | ToolNovaAI",
  },
  description:
    "Free AI, SEO, Developer, Image, PDF and Productivity tools built for speed and simplicity.",
  keywords: [
    "AI Tools",
    "SEO Tools",
    "Free Online Tools",
    "AI Content Detector",
    "AI Humanizer",
    "Developer Tools",
    "PDF Tools",
    "Image Tools",
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
      <body className="flex min-h-screen flex-col bg-[#050816] text-white">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}