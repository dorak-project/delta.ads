"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Messages } from "@/lib/i18n";
import { cn } from "@/utils/cn";

export function FAQSection({ messages }: { messages: Messages }) {
  const [active, setActive] = useState(0);

  return (
    <section className="pb-16">
      <div className="container-x max-w-4xl relative">
        <div className="relative flex w-full items-center justify-center mb-6">
          {/* الروبوت متمركز خلف عنوان القسم مباشرة */}
          <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-[bounce_6s_infinite] sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[60px] animate-pulse" />
            <Image src="/images/robot-faq.png" alt="FAQ Robot" fill className="object-contain drop-shadow-[0_0_30px_rgba(0,91,255,0.5)]" />
          </div>
          
          <div className="relative z-10 w-full">
            <SectionHeading eyebrow={messages.faq.eyebrow} title={messages.faq.title} />
          </div>
        </div>

        <Reveal>
          <div className="space-y-3">
            {messages.faq.items.map((item, index) => (
              <div key={item.question} className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
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
