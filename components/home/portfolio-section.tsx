"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { ProjectMockup } from "@/components/ui/project-mockup";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Messages } from "@/lib/i18n";
import type { Locale, Tone } from "@/types/content";
import { cn } from "@/utils/cn";

type PortfolioSectionProps = {
  locale: Locale;
  messages: Messages;
};

export function PortfolioSection({ locale, messages }: PortfolioSectionProps) {
  const [active, setActive] = useState(messages.portfolio.filters[0]);

  const projects = useMemo(() => {
    if (active === messages.portfolio.filters[0]) return messages.portfolio.items;
    return messages.portfolio.items.filter((project) => project.category === active.replace("ات", "").replace("Websites", "Website"));
  }, [active, messages.portfolio.filters, messages.portfolio.items]);

  const visibleProjects = projects.length ? projects : messages.portfolio.items;

  return (
    <section id="portfolio" className="section-pad pt-4">
      <div className="container-x">
        <SectionHeading eyebrow={messages.portfolio.eyebrow} title={messages.portfolio.title} />

        <div className="mb-8 flex flex-wrap justify-center gap-2" dir="ltr">
          {messages.portfolio.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={cn(
                "h-10 rounded-lg border px-5 text-sm font-bold transition",
                active === filter ? "border-orange-400 bg-orange-500/10 text-orange-300" : "border-white/12 bg-white/[0.03] text-white/68 hover:border-white/28 hover:text-white"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" dir="ltr">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <Link
                href={`/${locale}/portfolio/${project.slug}`}
                className="group glass-panel block overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-orange-300/40"
                dir={locale === "ar" ? "rtl" : "ltr"}
              >
                <ProjectMockup tone={project.tone as Tone} />
                <div className="flex items-end justify-between gap-3 p-4">
                  <div>
                    <h3 className="mb-2 text-base font-black text-white">{project.title}</h3>
                    <p className="text-xs font-bold text-white/50">{project.category}</p>
                  </div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 text-white/60 transition group-hover:border-orange-400/60 group-hover:text-orange-300">
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link href={`/${locale}/portfolio`} className="inline-flex h-11 items-center justify-center rounded-lg border border-orange-400/70 px-6 text-sm font-extrabold text-white transition hover:bg-orange-500/10">
            {messages.portfolio.all}
          </Link>
        </div>
      </div>
    </section>
  );
}
