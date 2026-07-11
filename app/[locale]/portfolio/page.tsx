import Link from "next/link";
import { PageHero } from "@/components/common/page-hero";
import { ProjectMockup } from "@/components/ui/project-mockup";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale, Tone } from "@/types/content";

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <PageHero title={messages.pages.portfolio.title} description={messages.pages.portfolio.description} />
      <section className="section-pad">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {messages.portfolio.items.map((project) => (
            <Link key={project.slug} href={`/${safeLocale}/portfolio/${project.slug}`} className="glass-panel overflow-hidden rounded-lg transition hover:-translate-y-1 hover:border-orange-300/40">
              <ProjectMockup tone={project.tone as Tone} />
              <div className="p-5">
                <p className="section-eyebrow">{project.category}</p>
                <h2 className="mt-2 text-xl font-black text-white">{project.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
