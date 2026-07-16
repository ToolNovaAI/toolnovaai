import AIWriterHero from "@/components/workspace/ai/writer/AIWriterHero";
import AIWriterToolbar from "@/components/workspace/ai/writer/AIWriterToolbar";
import AIWriterSidebar from "@/components/workspace/ai/writer/AIWriterSidebar";
import AIWriterEditor from "@/components/workspace/ai/writer/AIWriterEditor";
import AIWriterSettings from "@/components/workspace/ai/writer/AIWriterSettings";
import AIWriterStats from "@/components/workspace/ai/writer/AIWriterStats";
import { AIWriterProvider } from "@/components/workspace/ai/writer/AIWriterProvider";

export default function AIWriterPage() {
  return (
    <AIWriterProvider>
      <div className="space-y-8">
        {/* Hero */}
        <AIWriterHero />

        {/* Toolbar */}
        <AIWriterToolbar />

        {/* Workspace */}
        <section className="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)_320px]">
          {/* Left Sidebar */}
          <AIWriterSidebar />

          {/* Main Editor */}
          <AIWriterEditor />

          {/* Right Settings */}
          <AIWriterSettings />
        </section>

        {/* Bottom Stats */}
        <AIWriterStats />
      </div>
    </AIWriterProvider>
  );
}