import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-screen items-center justify-center pt-24">
      <div className="glass-panel max-w-md rounded-lg p-8 text-center">
        <p className="section-eyebrow">404</p>
        <h1 className="mt-2 text-3xl font-black text-white">الصفحة غير موجودة</h1>
        <p className="mt-3 text-sm leading-7 text-white/62">الرابط الذي تحاول فتحه غير متاح أو تم نقله.</p>
        <Link href="/ar" className="orange-gradient mt-6 inline-flex h-11 items-center justify-center rounded-lg px-6 text-sm font-extrabold text-white">
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
