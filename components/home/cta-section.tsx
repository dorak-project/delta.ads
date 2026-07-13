import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/constants/site";
import type { Messages } from "@/lib/i18n";

export function CTASection({ messages }: { messages: Messages }) {
  return (
    <section className="container-x pb-0 pt-10">
      
      {/* إضافة عنوان للقسم والروبوت متمركز خلفه */}
      <div className="relative flex w-full items-center justify-center mb-10">
        <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-[bounce_5s_infinite] sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-[60px] animate-pulse" />
          <Image src="/images/robot-process.png" alt="CTA Section Robot" fill className="object-contain drop-shadow-[0_0_30px_rgba(0,91,255,0.5)]" />
        </div>
        
        <div className="relative z-10 w-full">
          <SectionHeading eyebrow="ابدأ الآن" title="جاهز لتحويل أفكارك لواقع؟" />
        </div>
      </div>

      <Reveal>
        <div className="technical-frame relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(110deg,rgba(10,17,34,0.9),rgba(11,50,123,.6)_45%,rgba(0,91,255,.4))] px-8 py-14 shadow-[0_0_80px_rgba(0,91,255,.2)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.03),transparent_45%,rgba(255,255,255,.03))]" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-start md:max-w-xl">
              <h2 className="text-balance text-4xl font-black text-white md:text-5xl drop-shadow-md">{messages.cta.title}</h2>
              <p className="mt-4 text-lg leading-8 text-white/70">{messages.cta.description}</p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="orange-gradient mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-xl px-8 text-base font-extrabold text-white shadow-[0_0_40px_rgba(255,106,0,.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(255,106,0,.6)] hover:scale-105"
              >
                <MessageCircle className="h-6 w-6" />
                {messages.cta.button}
              </a>
            </div>

            {/* شكل 3D للوجو الشركة الشفاف يطفو ويشع بالنيون */}
            <div className="relative h-48 w-48 shrink-0 sm:h-64 sm:w-64">
              <div className="absolute inset-0 rounded-full bg-blue-500/40 blur-[60px] animate-pulse" />
              <div className="absolute inset-6 rounded-full bg-orange-500/30 blur-[40px]" />
              
              <div className="relative h-full w-full animate-[bounce_4s_infinite]">
                <Image
                  src="/images/logo-3d.png"
                  alt="Delta Ads 3D Logo"
                  fill
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
