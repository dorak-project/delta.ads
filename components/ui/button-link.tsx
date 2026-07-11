import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";
import type { Locale } from "@/types/content";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  locale?: Locale;
  showArrow?: boolean;
};

export function ButtonLink({
  children,
  className,
  variant = "primary",
  locale = "ar",
  showArrow = true,
  ...props
}: ButtonLinkProps) {
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <Link
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-lg px-5 text-sm font-extrabold transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400/70",
        variant === "primary" &&
          "orange-gradient text-white shadow-[0_12px_36px_rgba(255,106,0,0.35)] hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(255,106,0,0.42)]",
        variant === "outline" &&
          "border border-white/16 bg-white/[0.03] text-white hover:border-blue-300/50 hover:bg-blue-500/10",
        variant === "ghost" && "text-white/80 hover:bg-white/10 hover:text-white",
        className
      )}
      {...props}
    >
      {showArrow && variant !== "ghost" ? <Arrow className="h-4 w-4 transition group-hover:-translate-x-0.5 group-hover:translate-y-0" /> : null}
      <span>{children}</span>
    </Link>
  );
}
