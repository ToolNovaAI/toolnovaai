import Navbar from "@/components/layout/navbar";
import Footer from "@/components/sections/Footer";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Website Navbar */}
      <Navbar />

      <div className="min-h-screen bg-[#050816] text-white">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-72 shrink-0 border-r border-white/10 bg-[#090D1F] xl:block">
            <Sidebar />
          </aside>

          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Workspace Topbar */}
            <header className="sticky top-16 z-40 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
              <Topbar />
            </header>

            {/* Page */}
            <main className="flex-1 p-6 lg:p-8">
              <div className="mx-auto w-full max-w-7xl">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Website Footer */}
      <Footer />
    </>
  );
}