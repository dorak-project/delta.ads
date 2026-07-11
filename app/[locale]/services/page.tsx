import Link from "next/link";
import { PageHero } from "@/components/common/page-hero";
import { icons, toneClasses } from "@/lib/icons";
import { getMessages, isLocale } from "@/lib/i18n";
import type { IconName, Locale, Tone } from "@/types/content";
import { cn } from "@/utils/cn";

const serviceSlugs = ["web-development", "ecommerce", "ui-ux", "custom-systems", "web-development", "ecommerce"];

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <PageHero title={messages.pages.services.title} description={messages.pages.services.description} />
      <section className="section-pad">
        <div className="container-x grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {messages.services.items.map((service, index) => {
            const Icon = icons[service.icon as IconName];
            const tone = service.tone as Tone;
            return (
              <Link key={service.title} href={`/${safeLocale}/services/${serviceSlugs[index]}`} className="glass-panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-orange-300/40">
                <span className={cn("mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-2xl", toneClasses[tone])}>
                  <Icon className="h-7 w-7" />
                </span>
                <h2 className="text-xl font-black text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/62">{service.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
