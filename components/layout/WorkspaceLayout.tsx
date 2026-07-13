import { ReactNode } from "react";

interface WorkspaceLayoutProps {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
  rightPanel?: ReactNode;
}

export default function WorkspaceLayout({
  sidebar,
  topbar,
  children,
  rightPanel,
}: WorkspaceLayoutProps) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-white/10 bg-[#090D1F] xl:block">
          {sidebar}
        </aside>

        {/* Main Content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Topbar */}
          <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
            {topbar}
          </header>

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="mx-auto w-full max-w-7xl">
              {children}
            </div>
          </main>
        </div>

        {/* Right Panel */}
        {rightPanel && (
          <aside className="hidden w-96 shrink-0 border-l border-white/10 bg-[#090D1F] 2xl:block">
            {rightPanel}
          </aside>
        )}
      </div>
    </div>
  );
}