import Container from "../ui/container";
import SectionHeading from "../ui/SectionHeading";
import AIToolCard from "../ui/AIToolCard";

import { aiTools } from "@/constants/aiTools";

export default function FeaturedAITools() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="AI Tools"
          title="Powerful AI tools built for productivity"
          description="Discover intelligent tools that help you write faster, improve SEO, and automate repetitive tasks."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {aiTools.map((tool) => (
            <AIToolCard
              key={tool.title}
              title={tool.title}
              description={tool.description}
              badge={tool.badge}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}