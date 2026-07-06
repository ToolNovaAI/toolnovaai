import Container from "../ui/container";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-10 md:p-16">

          {/* Background Glow */}
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Start Free
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Build faster with powerful free tools.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              AI, SEO, Developer and Productivity tools built to help you work
              faster, rank higher and ship better products.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="/tools"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Tools
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Learn More
              </Link>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}