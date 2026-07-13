"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import Image from "next/image";
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
      <div className="container-x relative">
        <div className="relative flex w-full items-center justify-center mb-6">
          {/* الروبوت متمركز خلف عنوان القسم مباشرة */}
          <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-[bounce_5s_infinite] sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[60px] animate-pulse" />
            <Image src="/images/robot-portfolio.png" alt="Portfolio Robot" fill className="object-contain drop-shadow-[0_0_30px_rgba(255,106,0,0.5)]" />
          </div>
          
          <div className="relative z-10 w-full">
            <SectionHeading eyebrow={messages.portfolio.eyebrow} title={messages.portfolio.title} />
          </div>
        </div>

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
              {index === 0 ? (
                <Link
                  href="https://zara-q54w.vercel.app/"
                  target="_blank"
                  className="group glass-panel block overflow-hidden rounded-lg transition duration-300 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div className="relative flex h-40 w-full items-center justify-center bg-[#0a1122] overflow-hidden">
                    <Image src="/images/zara.png" alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-end justify-between gap-3 p-4">
                    <div>
                      <h3 className="mb-2 text-base font-black text-white/90">{project.title}</h3>
                      <p className="text-xs font-bold text-white/60">{project.category}</p>
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg transition-transform group-hover:scale-110">
                      <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ) : (
                <div
                  className="group glass-panel block cursor-not-allowed overflow-hidden rounded-lg opacity-80 transition duration-300 hover:border-orange-300/40"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div className="relative flex h-40 w-full items-center justify-center bg-[#0a1122] overflow-hidden">
                    <div className="absolute inset-0 opacity-10 mix-blend-luminosity transition-transform duration-500 group-hover:scale-110 group-hover:opacity-20">
                      <Image src="/images/robot-process.png" alt="Locked Project" fill className="object-cover" />
                    </div>
                    
                    <div className="relative flex flex-col items-center z-10">
                      <span className="absolute inset-0 rounded-full bg-orange-500/20 blur-xl transition duration-300 group-hover:bg-orange-500/40" />
                      <svg className="relative h-10 w-10 text-white/40 transition duration-300 group-hover:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      <span className="relative mt-2 text-xs font-bold text-white/40 group-hover:text-orange-300/80">قريباً..</span>
                    </div>
                  </div>
                  <div className="flex items-end justify-between gap-3 p-4">
                    <div>
                      <h3 className="mb-2 text-base font-black text-white/70">{project.title}</h3>
                      <p className="text-xs font-bold text-white/40">{project.category}</p>
                    </div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 text-white/30">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-7 text-center">
          <Link href={`/${locale}/portfolio`} className="inline-flex h-11 items-center justify-center rounded-lg border border-blue-500/70 bg-blue-600/10 px-6 text-sm font-extrabold text-blue-100 transition hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            {messages.portfolio.all}
          </Link>
        </div>
      </div>
    </section>
  );
}
