import { PageHero } from "@/components/common/page-hero";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <PageHero title={messages.pages.privacy.title} description={messages.pages.privacy.description} />
      <section className="container-x max-w-3xl py-16">
        <div className="glass-panel rounded-lg p-7 text-sm leading-8 text-white/66">
          نجمع البيانات التي يرسلها المستخدم عبر نموذج التواصل فقط لأغراض الرد وتقديم العرض المناسب. لا نبيع بيانات العملاء ولا نشاركها مع أطراف خارجية دون سبب تشغيلي واضح.
        </div>
      </section>
    </>
  );
}
