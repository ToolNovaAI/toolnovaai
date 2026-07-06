import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/SectionHeading";
import ToolCard from "@/components/ui/ToolCard";
import { popularTools } from "@/constants/tools";

export default function PopularTools() {
  return (
    <section className="pt-20 pb-24">
      <Container>
        <SectionHeading
          badge="POPULAR TOOLS"
          title="Everything You Need in One Place"
          description="Discover our collection of free AI, SEO and developer tools designed to boost your productivity."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <ToolCard
                key={tool.title}
                icon={<Icon size={28} />}
                title={tool.title}
                description={tool.description}
                href={tool.href}
                badge={tool.badge}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}