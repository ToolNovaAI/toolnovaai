import Container from "./container";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <Container>
      <div className={`mb-14 flex flex-col gap-4 ${alignment}`}>
        {badge && (
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur">
            {badge}
          </span>
        )}

        <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </Container>
  );
}