import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  align?: "center" | "start";
  className?: string;
};

export function SectionHeading({ eyebrow, title, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-9", align === "center" ? "text-center" : "text-start", className)}>
      {eyebrow ? <p className="section-eyebrow mb-2">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-4xl">{title}</h2>
    </div>
  );
}
