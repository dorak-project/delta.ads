import { PageHero } from "@/components/common/page-hero";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <PageHero title={messages.pages.terms.title} description={messages.pages.terms.description} />
      <section className="container-x max-w-3xl py-16">
        <div className="glass-panel rounded-lg p-7 text-sm leading-8 text-white/66">
          يبدأ العمل بعد اعتماد نطاق المشروع والجدول الزمني. أي إضافات خارج النطاق يتم تقديرها بشكل مستقل، ويستمر الدعم بعد الإطلاق حسب الاتفاق.
        </div>
      </section>
    </>
  );
}
