import { ReactNode } from "react";

interface ToolLayoutProps {
  hero: ReactNode;
  main: ReactNode;
  sidebar?: ReactNode;
}

export default function ToolLayout({
  hero,
  main,
  sidebar,
}: ToolLayoutProps) {
  return (
    <div className="space-y-10">
      {/* Tool Hero */}
      {hero}

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          {main}
        </div>

        {sidebar && (
          <aside className="lg:col-span-4">
            {sidebar}
          </aside>
        )}
      </div>
    </div>
  );
}