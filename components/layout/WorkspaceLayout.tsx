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
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="sticky top-0 h-screen w-72 border-r border-white/10 bg-[#090d1f]">
          {sidebar}
        </aside>

        {/* Main Content */}
        <div className="flex min-h-screen flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
            {topbar}
          </header>

          <main className="flex-1 p-8">{children}</main>
        </div>

        {/* Right Panel */}
        {rightPanel && (
          <aside className="hidden w-96 border-l border-white/10 bg-[#090d1f] xl:block">
            {rightPanel}
          </aside>
        )}
      </div>
    </div>
  );
}