"use client";

import Link from "next/link";
import { cn } from "./cn";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent-dark hover:shadow-glow hover:translate-y-[-1px] active:translate-y-[0]"
      : "text-dark border border-dark/20 hover:border-accent/40 hover:text-accent bg-white";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles)} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cn(base, styles)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
