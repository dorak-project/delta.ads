import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pt-32">
      <div className="absolute inset-0 network-line opacity-50" />
      <div className="container-x relative z-10 py-20 text-center">
        {eyebrow ? <p className="section-eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="mx-auto max-w-3xl text-balance text-4xl font-black leading-tight text-white md:text-6xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/66 md:text-lg">{description}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
