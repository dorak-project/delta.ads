import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { icons } from "@/lib/icons";
import type { Messages } from "@/lib/i18n";
import type { IconName } from "@/types/content";

type ProcessSectionProps = {
  messages: Messages;
};

const tones = ["blue", "orange", "violet", "cyan", "orange", "rose"] as const;
const toneClasses = {
  blue: "from-blue-400 to-blue-700 shadow-blue-500/30",
  orange: "from-orange-300 to-orange-600 shadow-orange-500/30",
  cyan: "from-cyan-300 to-cyan-700 shadow-cyan-500/30",
  violet: "from-violet-400 to-violet-700 shadow-violet-500/30",
  rose: "from-rose-400 to-rose-700 shadow-rose-500/30"
};

export function ProcessSection({ messages }: ProcessSectionProps) {
  return (
    <section id="process" className="section-pad">
      <div className="container-x relative">
        {/* روبوت خلفية قسم لمسة Delta - متمركز في المنتصف مع إضاءة نيون وحركة حيوية */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-64 w-64 opacity-15 pointer-events-none animate-[bounce_7s_infinite] sm:h-80 sm:w-80">
          <div className="absolute inset-0 bg-violet-500/20 blur-[60px] rounded-full animate-pulse" />
          <Image src="/images/robot-process.png" alt="Process Robot" fill className="object-contain drop-shadow-[0_0_30px_rgba(107,69,255,0.5)]" />
        </div>
        <div className="relative z-10">
          <SectionHeading eyebrow={messages.process.eyebrow} title={messages.process.title} />
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:gap-8" dir="ltr">
          {messages.process.items.map((item, index) => {
            const Icon = icons[item.icon as IconName];
            const tone = tones[index];

            return (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center shadow-[0_0_30px_rgba(0,0,0,0)] transition-all duration-300 hover:border-orange-500/50 hover:bg-white/[0.04] hover:shadow-[0_0_40px_-10px_rgba(255,106,0,0.3)]">
                  <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center transition-transform duration-300 group-hover:scale-110">
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
