import { PageHero } from "@/components/common/page-hero";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <PageHero title={messages.pages.about.title} description={messages.pages.about.description} />
      <section className="section-pad">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {["استراتيجية", "تصميم", "برمجة"].map((item, index) => (
            <div key={item} className="glass-panel rounded-lg p-6">
              <span className="section-eyebrow">0{index + 1}</span>
              <h2 className="mt-3 text-xl font-black text-white">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">نجمع التفكير التجاري مع تنفيذ بصري وبرمجي منظم ليخرج المنتج جاهزًا للنمو.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
