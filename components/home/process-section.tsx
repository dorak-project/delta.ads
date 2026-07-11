import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { icons } from "@/lib/icons";
import type { Messages } from "@/lib/i18n";
import type { IconName } from "@/types/content";

type ProcessSectionProps = {
  messages: Messages;
};

const tones = ["blue", "orange", "violet", "cyan", "orange"] as const;
const toneClasses = {
  blue: "from-blue-400 to-blue-700 shadow-blue-500/30",
  orange: "from-orange-300 to-orange-600 shadow-orange-500/30",
  cyan: "from-cyan-300 to-cyan-700 shadow-cyan-500/30",
  violet: "from-violet-400 to-violet-700 shadow-violet-500/30"
};

export function ProcessSection({ messages }: ProcessSectionProps) {
  return (
    <section id="process" className="section-pad">
      <div className="container-x">
        <SectionHeading eyebrow={messages.process.eyebrow} title={messages.process.title} />

        <div className="relative grid gap-8 lg:grid-cols-5" dir="ltr">
          <div className="absolute left-[8%] right-[8%] top-12 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block" />
          {messages.process.items.map((item, index) => {
            const Icon = icons[item.icon as IconName];
            const tone = tones[index];

            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="relative text-center">
                  <div className="relative mx-auto mb-5 flex h-24 w-24 items-center justify-center">
                    <span className="absolute right-2 top-0 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#112443] text-xs font-black text-white ring-1 ring-white/16">
                      {index + 1}
                    </span>
                    <span className={`absolute inset-0 rounded-full bg-gradient-to-br ${toneClasses[tone]} opacity-30 blur-xl`} />
                    <span className={`relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${toneClasses[tone]} text-white shadow-2xl`}>
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-black text-white">{item.title}</h3>
                  <p className="mx-auto max-w-[210px] text-sm leading-6 text-white/60">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
