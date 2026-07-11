import { Code2, Database, Flame, Hexagon, Layers3, Triangle, Workflow, Zap } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import type { Messages } from "@/lib/i18n";

const tech = [
  { name: "Next.js", Icon: Hexagon },
  { name: "React", Icon: Workflow },
  { name: "TypeScript", Icon: Code2 },
  { name: "Tailwind CSS", Icon: Layers3 },
  { name: "Supabase", Icon: Zap },
  { name: "PostgreSQL", Icon: Database },
  { name: "Vercel", Icon: Triangle },
  { name: "Framer Motion", Icon: Flame }
];

export function TechnologiesSection({ messages }: { messages: Messages }) {
  const repeated = [...tech, ...tech];

  return (
    <section id="tech" className="pb-14">
      <div className="container-x">
        <Reveal>
          <h2 className="mb-5 text-center text-2xl font-black text-white md:text-3xl">{messages.tech.title}</h2>
          <div className="glass-panel overflow-hidden rounded-lg p-4">
            <div className="tech-marquee flex w-max gap-4">
              {repeated.map(({ name, Icon }, index) => (
                <div key={`${name}-${index}`} className="flex h-12 min-w-[150px] items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4">
                  <Icon className="h-5 w-5 text-blue-300" />
                  <span className="text-sm font-extrabold text-white/82">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
