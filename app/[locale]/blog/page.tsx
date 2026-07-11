import Link from "next/link";
import { PageHero } from "@/components/common/page-hero";
import { getMessages, isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/content";

const articles = [
  { slug: "software-product-roadmap", title: "كيف تبدأ منتجك الرقمي بخطة واضحة" },
  { slug: "seo-performance", title: "تحسين السرعة وتجربة المستخدم لمحركات البحث" },
  { slug: "dashboard-design", title: "تصميم لوحات تحكم تساعد الفريق على القرار" }
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ar";
  const messages = getMessages(safeLocale);

  return (
    <>
      <PageHero title={messages.pages.blog.title} description={messages.pages.blog.description} />
      <section className="section-pad">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.slug} href={`/${safeLocale}/blog/${article.slug}`} className="glass-panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-blue-300/40">
              <span className="section-eyebrow">0{index + 1}</span>
              <h2 className="mt-3 text-xl font-black text-white">{article.title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/62">مقال مختصر ضمن بنية المدونة الجاهزة للتوسعة.</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
