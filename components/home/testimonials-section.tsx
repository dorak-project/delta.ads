import { Quote } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Messages } from "@/lib/i18n";

const avatarColors = ["from-blue-400 to-orange-400", "from-orange-300 to-rose-400", "from-cyan-300 to-blue-500"];

export function TestimonialsSection({ messages }: { messages: Messages }) {
  return (
    <section className="pb-16">
      <div className="container-x">
        <SectionHeading eyebrow={messages.testimonials.eyebrow} title={messages.testimonials.title} />

        <div className="grid gap-5 lg:grid-cols-3">
          {messages.testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <article className="glass-panel relative h-full rounded-lg p-6">
                <Quote className="absolute end-5 top-5 h-8 w-8 text-white/18" />
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
