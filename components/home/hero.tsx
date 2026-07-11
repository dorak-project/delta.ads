"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Play, Send } from "lucide-react";
import { useEffect, useRef } from "react";
import { ParticleField } from "@/components/animations/particle-field";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/constants/site";
import type { Messages } from "@/lib/i18n";
import type { Locale } from "@/types/content";

type HeroProps = {
  locale: Locale;
  messages: Messages;
};

export function Hero({ locale, messages }: HeroProps) {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!logoRef.current) return;

    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.82, rotateY: -12 },
      { opacity: 1, scale: 1, rotateY: 0, duration: 1.15, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden border-b border-white/10 pt-28 md:min-h-[690px]">
      <ParticleField />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050816] to-transparent" />

      <div className="container-x relative z-10 grid min-h-[560px] items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]" dir="ltr">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-extrabold text-white shadow-lg backdrop-blur">
            <span>{messages.hero.badge}</span>
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(255,106,0,.9)]" />
          </div>

          <h1 className="max-w-xl text-balance text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            <span className="block">{messages.hero.titleTop}</span>
            <span className="gradient-text block">{messages.hero.titleGradient}</span>
          </h1>

          <p className="mt-7 max-w-lg text-lg leading-8 text-white/66">{messages.hero.description}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`/${locale}/contact`} locale={locale}>
              {messages.hero.primary}
            </ButtonLink>
            <ButtonLink href={`/${locale}#portfolio`} locale={locale} variant="outline" showArrow={false}>
              <Play className="h-4 w-4" />
              {messages.hero.secondary}
            </ButtonLink>
          </div>

          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-white/70 transition hover:text-white">
            <span className="inline-flex h-8 w-12 items-center justify-center text-orange-400">
              <Send className="h-5 w-5" />
            </span>
            {messages.hero.whatsapp}
          </a>
        </motion.div>

        <div className="relative min-h-[410px] lg:min-h-[520px]">
          <div className="hero-rings" />
          <div className="absolute inset-x-[8%] bottom-[11%] h-24 rounded-[50%] bg-blue-500/16 blur-2xl" />
          <div
            className="hero-logo absolute left-1/2 top-1/2 w-[min(470px,78vw)] -translate-x-1/2 -translate-y-1/2"
            style={{ perspective: "900px" }}
          >
            <div ref={logoRef} className="relative">
              <div className="absolute inset-[-18%] rounded-full bg-blue-500/18 blur-3xl" />
              <div className="absolute inset-[-12%] rounded-full bg-orange-500/14 blur-3xl" />
              <Image
  src="/images/hero-main.png"
  alt="Hero main image"
  width={640}
  height={400}
  priority
  className="relative h-auto w-full"
/>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 z-20 flex h-14 w-20 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-b-full border border-white/10 bg-[#07101f] shadow-2xl">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/16 text-white/70">⌄</span>
      </div>
    </section>
  );
}
