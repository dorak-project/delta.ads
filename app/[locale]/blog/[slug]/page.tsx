import { notFound } from "next/navigation";
import { PageHero } from "@/components/common/page-hero";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

const articles = {
  "software-product-roadmap": "كيف تبدأ منتجك الرقمي بخطة واضحة",
  "seo-performance": "تحسين السرعة وتجربة المستخدم لمحركات البحث",
  "dashboard-design": "تصميم لوحات تحكم تساعد الفريق على القرار"
};

export default async function ArticlePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);
  const title = articles[slug as keyof typeof articles];

  if (!title) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow={messages.pages.blog.title} title={title} description={messages.pages.blog.description} />
      <article className="container-x max-w-3xl py-16">
        <div className="glass-panel rounded-lg p-7">
          <p className="text-base leading-9 text-white/70">
            هذه صفحة مقال جاهزة من ناحية التصميم والبنية. يمكنك لاحقًا ربطها بنظام إدارة محتوى أو Supabase لتوليد المقالات ديناميكيًا.
          </p>
        </div>
      </article>
    </>
  );
}
