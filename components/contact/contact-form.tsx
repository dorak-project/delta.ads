"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="glass-panel rounded-lg p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-bold text-white/72">
          <span>الاسم</span>
          <input className="h-12 w-full rounded-lg border border-white/12 bg-white/[0.04] px-4 text-white outline-none transition focus:border-orange-400" required />
        </label>
        <label className="space-y-2 text-sm font-bold text-white/72">
          <span>البريد الإلكتروني</span>
          <input type="email" className="h-12 w-full rounded-lg border border-white/12 bg-white/[0.04] px-4 text-white outline-none transition focus:border-orange-400" required />
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm font-bold text-white/72">
        <span>فكرة المشروع</span>
        <textarea className="min-h-36 w-full resize-none rounded-lg border border-white/12 bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-orange-400" required />
      </label>
      <button type="submit" className="orange-gradient mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-extrabold text-white">
        <Send className="h-4 w-4" />
        إرسال الطلب
      </button>
      {sent ? <p className="mt-4 rounded-lg border border-green-400/30 bg-green-400/10 p-3 text-sm font-bold text-green-200">تم تسجيل الطلب تجريبيًا داخل الواجهة.</p> : null}
    </form>
  );
}
