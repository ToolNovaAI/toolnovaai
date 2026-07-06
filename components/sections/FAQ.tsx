import Container from "../ui/container";
import SectionHeading from "../ui/SectionHeading";
import FAQItem from "../ui/FAQItem";

import { faqs } from "@/constants/faqs";

export default function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about ToolNovaAI and our free tools."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-4">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}