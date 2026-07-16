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
            <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
              🚀 AI Workspace OS • 100% Free Tools
            </span>

            <h1 className="mt-8 max-w-[700px] text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl xl:text-8xl">
              Build.
              <br />
              Optimize.
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Grow.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              The all-in-one AI Workspace for SEO, GEO, AEO, Developers and
              Content Creators. Build faster, optimize smarter and launch with
              confidence using powerful free tools.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button href="/dashboard">
                Open Workspace
              </Button>

              <Button
                href="/tools"
                variant="secondary"
              >
                Explore Tools
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10">
                <h2 className="text-3xl font-bold text-white">
                  120+
                </h2>

                <p className="mt-2 text-gray-400">
                  Free Tools
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10">
                <h2 className="text-3xl font-bold text-white">
                  8
                </h2>

                <p className="mt-2 text-gray-400">
                  AI Workspaces
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-500/40 hover:bg-white/10">
                <h2 className="text-3xl font-bold text-white">
                  AI
                </h2>

                <p className="mt-2 text-gray-400">
                  Powered
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="hidden items-center justify-end lg:flex">
            <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white">
                  ToolNovaAI Workspace
                </h3>

                <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-400">
                  Online
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/10">
                  🤖 AI Workspace
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/10">
                  🔍 SEO Workspace
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/10">
                  💻 Developer Workspace
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/10">
                  📝 Text Workspace
                </div>

                <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      Workspace Health
                    </span>

                    <span className="font-bold text-cyan-400">
                      99%
                    </span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[99%] rounded-full bg-cyan-500" />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">
                        Active Tools
                      </p>

                      <p className="font-bold text-white">
                        120+
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        AI Suggestions
                      </p>

                      <p className="font-bold text-white">
                        14
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        SEO Score
                      </p>

                      <p className="font-bold text-green-400">
                        92/100
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-500">
                        Projects
                      </p>

                      <p className="font-bold text-white">
                        8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}