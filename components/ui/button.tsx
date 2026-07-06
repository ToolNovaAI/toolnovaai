import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-primary text-white hover:opacity-90 hover:-translate-y-0.5",
    secondary:
      "border border-border bg-surface text-white hover:bg-surface-2",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}