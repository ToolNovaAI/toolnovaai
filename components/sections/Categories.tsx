import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/constants/categories";

export default function Categories() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="CATEGORIES"
          title="Browse by Category"
          description="Explore AI, SEO, Developer, Text, Image and PDF tools designed to boost your productivity."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              description={category.description}
              href={category.href}
              icon={category.icon}
              count={category.count}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}