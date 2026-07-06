import Link from "next/link";

import Container from "../ui/container";
import FooterColumn from "../ui/FooterColumn";

import { footerLinks } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-4">

          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-bold text-white"
            >
              ToolNovaAI
            </Link>

            <p className="mt-5 max-w-md leading-7 text-zinc-400">
              Free AI, SEO, Developer and Productivity tools designed
              with a premium experience for creators, developers and
              businesses.
            </p>
          </div>

          <FooterColumn
            title="Tools"
            links={footerLinks.tools}
          />

          <FooterColumn
            title="Resources"
            links={footerLinks.resources}
          />

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} ToolNovaAI. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}