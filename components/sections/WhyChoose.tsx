import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import { features } from "@/constants/features";

export default function WhyChoose() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="WHY CHOOSE US"
          title="Why Choose ToolNovaAI?"
          description="Built with performance, privacy and simplicity in mind. Everything you need to work faster and smarter."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((Feature) => (
            <FeatureCard
              key={Feature.title}
              icon={Feature.icon}
              title={Feature.title}
              description={Feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}