import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { icons, toneClasses } from "@/lib/icons";
import type { Messages } from "@/lib/i18n";
import type { IconName, Locale, Tone } from "@/types/content";
import { cn } from "@/utils/cn";

type ServicesSectionProps = {
  locale: Locale;
  messages: Messages;
};

export function ServicesSection({ locale, messages }: ServicesSectionProps) {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-x">
        <SectionHeading eyebrow={messages.services.eyebrow} title={messages.services.title} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" dir="ltr">
          {messages.services.items.map((service, index) => {
            const Icon = icons[service.icon as IconName];
            const tone = service.tone as Tone;

            return (
              <Reveal key={service.title} delay={index * 0.04}>
                <Link
                  href={`/${locale}/services`}
                  className="group technical-frame glass-panel block h-full rounded-lg p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-white/30"
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div
                    className={cn(
                      "mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br text-white shadow-2xl transition group-hover:scale-105",
                      toneClasses[tone]
                    )}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-base font-black text-white">{service.title}</h3>
                  <p className="text-sm leading-6 text-white/58">{service.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-7 text-center">
          <Link href={`/${locale}/services`} className="inline-flex h-11 items-center justify-center rounded-lg border border-orange-400/70 px-6 text-sm font-extrabold text-white transition hover:bg-orange-500/10">
            {messages.services.all}
          </Link>
        </div>
      </div>
    </section>
  );
}
