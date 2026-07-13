import Link from "next/link";
import Image from "next/image";
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
      <div className="container-x relative">
        <div className="relative flex w-full items-center justify-center mb-6">
          {/* الروبوت متمركز خلف عنوان القسم مباشرة */}
          <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-[bounce_6s_infinite] sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[60px] animate-pulse" />
            <Image src="/images/robot-services.png" alt="Services Robot" fill className="object-contain drop-shadow-[0_0_30px_rgba(25,213,209,0.5)]" />
          </div>
          
          <div className="relative z-10 w-full">
            <SectionHeading eyebrow={messages.services.eyebrow} title={messages.services.title} />
          </div>
        </div>

        <div className="relative z-10 grid gap-6 md:grid-cols-2" dir="ltr">
          {messages.services.items.map((service, index) => {
            const Icon = icons[service.icon as IconName];
            const tone = service.tone as Tone;
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <Link
                  href={`/${locale}/services`}
                  className={cn(
                    "group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a1122]/80 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.03]",
                    tone === "blue" && "hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(0,91,255,0.4)]",
                    tone === "orange" && "hover:border-orange-500/50 hover:shadow-[0_0_40px_-10px_rgba(255,106,0,0.4)]",
                    tone === "cyan" && "hover:border-cyan-500/50 hover:shadow-[0_0_40px_-10px_rgba(25,213,209,0.4)]",
                    tone === "violet" && "hover:border-violet-500/50 hover:shadow-[0_0_40px_-10px_rgba(107,69,255,0.4)]",
                    tone === "rose" && "hover:border-rose-500/50 hover:shadow-[0_0_40px_-10px_rgba(245,77,134,0.4)]"
                  )}
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <div className={cn(
                    "absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-20",
                    tone === "blue" ? "bg-blue-500" : tone === "orange" ? "bg-orange-500" : tone === "cyan" ? "bg-cyan-500" : tone === "violet" ? "bg-violet-500" : "bg-rose-500"
                  )} />
                  
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
                    {/* صورة الروبوت المتسلسلة لكل خدمة بالترتيب */}
                    <div className="flex shrink-0 h-28 w-28 relative items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                      <Image 
                        src={`/images/${index + 1}.png`} 
                        alt={service.title} 
                        fill 
                        className="object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="text-center sm:text-start pt-2">
                      <h3 className="mb-3 text-2xl font-black text-white">{service.title}</h3>
                      <p className="text-base leading-7 text-white/60">{service.description}</p>
                    </div>
                  </div>
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
