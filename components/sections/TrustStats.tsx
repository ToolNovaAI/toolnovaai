import Container from "../ui/container";
import SectionHeading from "../ui/SectionHeading";
import StatCard from "../ui/StatCard";

import { stats } from "@/constants/stats";

export default function TrustStats() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Trust"
          title="Trusted by creators, developers & businesses"
          description="Powerful AI, SEO and developer tools designed with speed, accuracy and simplicity in mind."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}