import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Messages } from "@/lib/i18n";

const avatarColors = ["from-blue-400 to-orange-400", "from-orange-300 to-rose-400", "from-cyan-300 to-blue-500"];

export function TestimonialsSection({ messages }: { messages: Messages }) {
  return (
    <section className="pb-16 relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="relative flex w-full items-center justify-center mb-6">
          {/* الروبوت متمركز خلف عنوان القسم مباشرة */}
          <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-[bounce_8s_infinite] sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-rose-500/20 blur-[60px] animate-pulse" />
            <Image src="/images/robot-hero.png" alt="Testimonials Robot" fill className="object-contain drop-shadow-[0_0_30px_rgba(244,63,94,0.5)]" />
          </div>
          
          <div className="relative z-10 w-full">
            <SectionHeading eyebrow={messages.testimonials.eyebrow} title={messages.testimonials.title} />
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {messages.testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-7 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06] hover:shadow-[0_0_40px_-10px_rgba(0,91,255,0.25)]">
                {/* إضاءة نيون داخلية تظهر عند الوقوف عليها */}
                <div className="absolute -inset-x-20 -top-20 h-40 w-40 rounded-full bg-orange-500/10 blur-[50px] transition-all duration-500 group-hover:bg-blue-500/20" />
                
                <Quote className="absolute end-6 top-6 h-10 w-10 text-white/10 transition-colors duration-500 group-hover:text-orange-400/20" />
                <p className="min-h-24 text-sm leading-7 text-white/74">{item.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${avatarColors[index]} text-lg font-black text-white`}>
                    {item.name.slice(0, 1)}
                  </span>
                  <span>
                    <strong className="block text-sm font-black text-white">{item.name}</strong>
                    <span className="text-xs font-bold text-white/48">{item.role}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-orange-400" />
          <span className="h-2 w-2 rounded-full bg-white/22" />
          <span className="h-2 w-2 rounded-full bg-white/22" />
        </div>
      </div>
    </section>
  );
}
