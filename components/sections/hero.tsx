import Container from "../ui/container";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:min-h-screen lg:flex lg:items-center">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              🚀 100% Free AI & SEO Tools
            </span>

            <h1 className="mt-8 max-w-[650px] text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl xl:text-8xl">
              Build Better Websites
              <br />
              with Powerful{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Tools
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              ToolNovaAI provides fast, modern and free AI, SEO and Developer
              tools to help creators, bloggers and businesses grow online.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/tools">Explore Tools</Button>

              <Button href="/blog" variant="secondary">
                Read Blog
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/40 hover:bg-white/10">
                <h2 className="text-3xl font-bold text-white">25+</h2>
                <p className="mt-2 text-gray-400">Free Tools</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/40 hover:bg-white/10">
                <h2 className="text-3xl font-bold text-white">100%</h2>
                <p className="mt-2 text-gray-400">Free Forever</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-blue-500/40 hover:bg-white/10">
                <h2 className="text-3xl font-bold text-white">Fast</h2>
                <p className="mt-2 text-gray-400">Lightning Speed</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hidden items-center justify-end lg:flex">
            <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  AI Dashboard
                </h3>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                  Online
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-white/5 p-4 transition hover:bg-blue-500/10">
                  🤖 AI Content Detector
                </div>

                <div className="rounded-xl bg-white/5 p-4 transition hover:bg-blue-500/10">
                  🔑 Keyword Research
                </div>

                <div className="rounded-xl bg-white/5 p-4 transition hover:bg-blue-500/10">
                  📈 SEO Analyzer
                </div>

                <div className="rounded-xl bg-white/5 p-4 transition hover:bg-blue-500/10">
                  📄 Meta Generator
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}