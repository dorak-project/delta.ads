import { Reveal } from "@/components/animations/reveal";
import { icons } from "@/lib/icons";
import type { Messages } from "@/lib/i18n";
import type { IconName } from "@/types/content";

export function StatsSection({ messages }: { messages: Messages }) {
  return (
    <section id="stats" className="pb-16">
      <div className="container-x">
        <Reveal>
          <div className="glass-panel grid grid-cols-2 gap-0 overflow-hidden rounded-lg lg:grid-cols-4" dir="ltr">
            {messages.stats.map((stat, index) => {
              const Icon = icons[stat.icon as IconName];
              return (
                <div key={stat.label} className="relative flex flex-col items-center justify-center gap-2 p-5 text-center sm:flex-row sm:justify-start sm:gap-5 sm:p-7 sm:text-start">
                  {index > 0 ? <span className="absolute inset-y-8 start-0 hidden w-px bg-white/10 lg:block" /> : null}
                  {index % 2 !== 0 ? <span className="absolute inset-y-6 start-0 w-px bg-white/10 lg:hidden" /> : null}
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/12 text-blue-300 shadow-[0_0_34px_rgba(0,91,255,.22)] sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </span>
                  <span>
                    <strong className="block text-xl font-black text-white sm:text-3xl">{stat.value}</strong>
                    <span className="mt-1 block text-xs font-bold text-white/60 sm:mt-0 sm:text-sm">{stat.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
