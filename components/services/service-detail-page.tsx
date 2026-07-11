import { PageHero } from "@/components/common/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { icons, toneClasses } from "@/lib/icons";
import type { Messages } from "@/lib/i18n";
import type { IconName, Locale, Tone } from "@/types/content";
import { cn } from "@/utils/cn";

const serviceIndexBySlug: Record<string, number> = {
  "web-development": 0,
  ecommerce: 1,
  "custom-systems": 3,
  "ui-ux": 2
};

export function ServiceDetailPage({ locale, messages, slug }: { locale: Locale; messages: Messages; slug: string }) {
  const service = messages.services.items[serviceIndexBySlug[slug] ?? 0];
  const Icon = icons[service.icon as IconName];
  const tone = service.tone as Tone;

  return (
    <>
      <PageHero eyebrow={messages.services.eyebrow} title={service.title} description={service.description}>
        <ButtonLink href={`/${locale}/contact`} locale={locale}>
          {messages.nav.start}
        </ButtonLink>
      </PageHero>
      <section className="section-pad">
        <div className="container-x grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
          <div className="glass-panel rounded-lg p-7">
            <span className={cn("mb-5 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-2xl", toneClasses[tone])}>
              <Icon className="h-8 w-8" />
            </span>
            <h2 className="text-2xl font-black text-white">{service.title}</h2>
            <p className="mt-3 text-sm leading-7 text-white/64">{service.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["تحليل المتطلبات", "تصميم التجربة", "تطوير احترافي", "اختبار ونشر"].map((item, index) => (
              <div key={item} className="glass-panel rounded-lg p-5">
                <span className="section-eyebrow">0{index + 1}</span>
                <h3 className="mt-2 text-lg font-black text-white">{item}</h3>
                <p className="mt-2 text-sm leading-7 text-white/58">خطوة منظمة تضمن خروج المشروع بصورة قوية وقابلة للتطوير.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
