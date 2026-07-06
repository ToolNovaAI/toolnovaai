import Link from "next/link";
import Container from "../ui/container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
            T
          </div>

          <div>
            <h1 className="font-heading text-lg font-bold text-white">
              ToolNovaAI
            </h1>
            <p className="text-xs text-gray-400">
              AI • SEO • Developer Tools
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm text-gray-300 hover:text-white">
            Home
          </Link>

          <Link href="/tools" className="text-sm text-gray-300 hover:text-white">
            Tools
          </Link>

          <Link href="/blog" className="text-sm text-gray-300 hover:text-white">
            Blog
          </Link>

          <Link href="/about" className="text-sm text-gray-300 hover:text-white">
            About
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Get Started
          </button>
        </div>
      </Container>
    </header>
  );
}