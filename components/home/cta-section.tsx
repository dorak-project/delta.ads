import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { site } from "@/constants/site";
import type { Messages } from "@/lib/i18n";

export function CTASection({ messages }: { messages: Messages }) {
  return (
    <section className="container-x pb-0">
      <Reveal>
        <div className="technical-frame relative overflow-hidden rounded-lg border border-white/12 bg-[linear-gradient(110deg,rgba(255,106,0,.88),rgba(11,50,123,.9)_45%,rgba(0,91,255,.9))] px-6 py-10 text-center shadow-[0_22px_80px_rgba(0,91,255,.25)]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.08),transparent_45%,rgba(255,255,255,.08))]" />
          <div className="relative z-10">
            <h2 className="text-balance text-3xl font-black text-white md:text-4xl">{messages.cta.title}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/78">{messages.cta.description}</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="orange-gradient mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-extrabold text-white shadow-[0_16px_46px_rgba(255,106,0,.35)] transition hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" />
              {messages.cta.button}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
