"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Messages } from "@/lib/i18n";
import { cn } from "@/utils/cn";

export function FAQSection({ messages }: { messages: Messages }) {
  const [active, setActive] = useState(0);

  return (
    <section className="pb-16">
      <div className="container-x max-w-4xl">
        <SectionHeading eyebrow={messages.faq.eyebrow} title={messages.faq.title} />

        <Reveal>
          <div className="space-y-3">
            {messages.faq.items.map((item, index) => (
              <div key={item.question} className="glass-panel rounded-lg">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 p-5 text-start text-base font-black text-white"
                  onClick={() => setActive(active === index ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <ChevronDown className={cn("h-5 w-5 shrink-0 text-orange-300 transition", active === index && "rotate-180")} />
                </button>
                <div className={cn("grid overflow-hidden transition-[grid-template-rows] duration-300", active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <p className="min-h-0 px-5 pb-5 text-sm leading-7 text-white/64">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
