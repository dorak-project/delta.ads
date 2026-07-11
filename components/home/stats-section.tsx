import { Reveal } from "@/components/animations/reveal";
import { icons } from "@/lib/icons";
import type { Messages } from "@/lib/i18n";
import type { IconName } from "@/types/content";

export function StatsSection({ messages }: { messages: Messages }) {
  return (
    <section id="stats" className="pb-16">
      <div className="container-x">
        <Reveal>
          <div className="glass-panel grid gap-0 overflow-hidden rounded-lg sm:grid-cols-2 lg:grid-cols-4" dir="ltr">
            {messages.stats.map((stat, index) => {
              const Icon = icons[stat.icon as IconName];

              return (
                <div key={stat.label} className="relative flex items-center gap-5 p-7">
                  {index > 0 ? <span className="absolute inset-y-8 start-0 hidden w-px bg-white/10 lg:block" /> : null}
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500/12 text-blue-300 shadow-[0_0_34px_rgba(0,91,255,.22)]">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span>
                    <strong className="block text-3xl font-black text-white">{stat.value}</strong>
                    <span className="text-sm font-bold text-white/60">{stat.label}</span>
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
