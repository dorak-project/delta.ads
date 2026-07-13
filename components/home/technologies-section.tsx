import Image from "next/image";
import { Code2, Database, Flame, Hexagon, Layers3, Triangle, Workflow, Zap } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import type { Messages } from "@/lib/i18n";

const tech = [
  { name: "Next.js", Icon: Hexagon, color: "text-white" },
  { name: "React", Icon: Workflow, color: "text-cyan-400" },
  { name: "TypeScript", Icon: Code2, color: "text-blue-500" },
  { name: "Tailwind", Icon: Layers3, color: "text-cyan-300" },
  { name: "Supabase", Icon: Zap, color: "text-green-400" },
  { name: "PostgreSQL", Icon: Database, color: "text-blue-300" },
  { name: "Vercel", Icon: Triangle, color: "text-white" },
  { name: "Framer", Icon: Flame, color: "text-pink-500" }
];

export function TechnologiesSection({ messages }: { messages: Messages }) {
  return (
    <section id="tech" className="pb-24 pt-10 relative overflow-hidden">
      <div className="container-x relative z-10">
        <Reveal>
          <div className="relative flex w-full items-center justify-center mb-12">
            {/* الروبوت متمركز خلف عنوان القسم مباشرة */}
            <div className="absolute left-1/2 top-1/2 z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none animate-[bounce_6s_infinite] sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[60px] animate-pulse" />
              <Image src="/images/robot-faq.png" alt="Tech Robot" fill className="object-contain drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]" />
            </div>
            
            <h2 className="relative z-10 text-center text-3xl font-black text-white md:text-4xl">{messages.tech.title}</h2>
          </div>
          
          <div className="relative mx-auto flex h-[350px] w-full max-w-[800px] items-center justify-center sm:h-[450px]">
            {/* المسارات الدائرية (Orbital Tracks) */}
            <div className="absolute h-[200px] w-[200px] rounded-full border border-white/5 sm:h-[280px] sm:w-[280px]" />
            <div className="absolute h-[280px] w-[280px] rounded-full border border-white/5 border-dashed sm:h-[400px] sm:w-[400px]" />
            
            {/* الإضاءة المركزية */}
            <div className="absolute h-40 w-40 rounded-full bg-orange-500/20 blur-[60px]" />
            <div className="absolute h-32 w-32 rounded-full bg-blue-500/20 blur-[50px]" />

            {/* اللوجو المركزي */}
            <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-[#07101f]/80 shadow-[0_0_40px_rgba(0,91,255,0.4)] backdrop-blur-xl sm:h-32 sm:w-32">
              <Image 
                src="/images/logo-3d.png" 
                alt="Central Core" 
                width={80} 
                height={80} 
                className="animate-[bounce_4s_infinite] object-contain drop-shadow-[0_0_15px_rgba(255,106,0,0.5)]" 
              />
            </div>

            {/* الكواكب (أيقونات التقنيات) تدور حول اللوجو */}
            {tech.map((item, i) => {
              // توزيع العناصر على الدائرة
              const angle = (i * 360) / tech.length;
              // جعل بعضها يدور في مسار مختلف بسرعات مختلفة لإعطاء واقعية
              const duration = i % 2 === 0 ? "20s" : "25s";
              const direction = i % 2 === 0 ? "normal" : "reverse";
              
              return (
                <div 
                  key={item.name}
                  className="absolute left-1/2 top-1/2 -ml-6 -mt-6 sm:-ml-8 sm:-mt-8"
                  style={{
                    transform: `rotate(${angle}deg)`,
                  }}
                >
                  <div
                    className="flex flex-col items-center justify-center gap-1"
                    style={{
                      animation: `orbit ${duration} linear infinite ${direction}`,
                      // تطبيق مسار أصغر للهواتف باستخدام المتغيرات
                    }}
                  >
                    <div className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a1122] shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:scale-125 hover:border-white/30 sm:h-16 sm:w-16">
                      <item.Icon className={`h-5 w-5 sm:h-7 sm:w-7 ${item.color}`} />
                      
                      {/* اسم التقنية يظهر عند التمرير */}
                      <span className="absolute -bottom-8 whitespace-nowrap rounded-md border border-white/10 bg-[#050816] px-2 py-1 text-[10px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-xs">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
      
      {/* ستايل إضافي لضمان عمل الدوران على الموبايل والديسكتوب بنعومة */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 640px) {
          div[style*="animation: orbit"] {
            animation-name: orbit-mobile !important;
          }
        }
      `}} />
    </section>
  );
}
