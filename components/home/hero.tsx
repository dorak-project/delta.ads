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

      <div className="container-x relative z-10 grid min-h-[560px] items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-xs font-extrabold text-white shadow-lg backdrop-blur">
            <span>{messages.hero.badge}</span>
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(255,106,0,.9)]" />
          </div>

          <div className="flex flex-row items-end justify-between gap-2 sm:gap-6">
            <h1 className="max-w-xl text-balance text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white to-white/70">{messages.hero.titleTop}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-blue-500 pb-2 drop-shadow-sm">{messages.hero.titleGradient}</span>
            </h1>
            
            {/* صورة الروبوت الشفافة للهاتف (تطفو بتأثير نيون) */}
            <div className="relative h-44 w-36 shrink-0 lg:hidden animate-[bounce_4s_infinite]">
              <div className="absolute inset-0 bg-blue-500/30 blur-[40px] rounded-full" />
              <Image
                src="/images/robot-hero.png"
                alt="Digital Future Robot"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(0,91,255,0.6)]"
              />
            </div>
          </div>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300/80 font-light">
            {messages.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink 
              href={`/${locale}/contact`} 
              locale={locale} 
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 font-bold text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_60px_-15px_rgba(249,115,22,0.7)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {messages.hero.primary}
              </span>
            </ButtonLink>
            
            <ButtonLink 
              href={`/${locale}#portfolio`} 
              locale={locale} 
              showArrow={false}
              className="group flex flex-row items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] w-full sm:w-auto"
            >
              <div className="flex flex-row items-center justify-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30 shrink-0">
                  <Play className="h-3.5 w-3.5 translate-x-0.5" />
                </span>
                <span className="whitespace-nowrap">{messages.hero.secondary}</span>
              </div>
            </ButtonLink>
          </div>

          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-white/70 transition hover:text-white">
            <span className="inline-flex h-8 w-12 items-center justify-center text-orange-400">
              <Send className="h-5 w-5" />
            </span>
            {messages.hero.whatsapp}
          </a>
        </motion.div>

        <div className="relative flex min-h-[410px] items-center justify-center lg:min-h-[520px]">
          {/* 1. إضاءة الخلفية الفضائية العميقة (مريحة للعين) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent blur-3xl" />
          
          {/* 2. أشكال هندسية وتكنولوجية تدور ببطء */}
          <div className="absolute h-[350px] w-[350px] rounded-full border border-white/5 border-dashed animate-[spin_60s_linear_infinite] lg:h-[500px] lg:w-[500px]" />
          <div className="absolute h-[250px] w-[250px] rounded-full border border-orange-500/20 border-dotted animate-[spin_40s_linear_infinite_reverse] lg:h-[350px] lg:w-[350px]" />
          <div className="absolute h-[400px] w-[400px] rounded-full border border-blue-500/10 animate-[spin_80s_linear_infinite] lg:h-[600px] lg:w-[600px]" />

          {/* 3. منصة اللوجو الرئيسية - منظور ثلاثي الأبعاد */}
          <div
            className="absolute z-10 w-[min(400px,85vw)]"
            style={{ perspective: "1200px" }}
          >
            <div ref={logoRef} className="relative group w-full animate-[bounce_6s_infinite]">
              {/* إضاءات الأجرام السماوية خلف اللوجو (Glow) */}
              <div className="absolute -inset-10 rounded-full bg-blue-600/20 blur-[80px] transition-all duration-1000 group-hover:bg-blue-500/40 group-hover:scale-110" />
              <div className="absolute -inset-5 rounded-full bg-orange-500/15 blur-[60px] transition-all duration-1000 group-hover:bg-orange-400/30 group-hover:scale-110" />
              
              {/* 4. حاوية الصورة بدون الإطار المربع */}
              <div 
                className="relative flex aspect-square items-center justify-center transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:rotate-x-[10deg] group-hover:rotate-y-[-10deg]"
                style={{ transformStyle: "preserve-3d" }}
              >
                
                {/* 5. صورة اللوجو (يبرز للأمام عند التمرير) */}
                <div 
                  className="relative h-full w-full transition-transform duration-700 ease-out group-hover:translate-z-[50px] group-hover:scale-110"
                >
                  <Image
                    src="/images/logo-3d.png"
                    alt="Delta.Ads 3D Logo"
                    fill
                    priority
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </div>

              {/* عناصر فضائية صغيرة تطفو حول اللوجو */}
              <div className="absolute -right-6 top-10 h-4 w-4 rounded-full bg-orange-400 shadow-[0_0_15px_rgba(255,106,0,0.8)] animate-pulse" style={{ transform: "translateZ(30px)" }} />
              <div className="absolute -left-4 bottom-12 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(25,213,209,0.8)] animate-pulse" style={{ transform: "translateZ(40px)" }} />
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
