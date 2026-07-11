import { notFound } from "next/navigation";
import { PageHero } from "@/components/common/page-hero";
import { ProjectMockup } from "@/components/ui/project-mockup";
import { getMessages, isLocale, locales } from "@/lib/i18n";
import type { Locale, Tone } from "@/types/content";

export function generateStaticParams() {
  const ar = getMessages("ar");
  return locales.flatMap((locale) => ar.portfolio.items.map((project) => ({ locale, slug: project.slug })));
}

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);
  const project = messages.portfolio.items.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={project.category} title={project.title} description={messages.pages.portfolio.description} />
      <section className="section-pad">
        <div className="container-x grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="glass-panel overflow-hidden rounded-lg">
            <ProjectMockup tone={project.tone as Tone} />
            <div className="p-6">
              <h2 className="text-2xl font-black text-white">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                مشروع تجريبي ضمن واجهة Delta.Ads يوضح طريقة عرض الأعمال، تفاصيل المشروع، والتصميم المتجاوب.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            {["Design System", "Responsive UI", "SEO Ready", "Fast Delivery"].map((item) => (
              <div key={item} className="glass-panel rounded-lg p-5">
                <h3 className="text-lg font-black text-white">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-white/58">تم بناء هذا الجزء ليكون قابلًا للاستبدال ببيانات حقيقية من Supabase لاحقًا.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
