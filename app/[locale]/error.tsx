"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="container-x flex min-h-screen items-center justify-center pt-24">
      <div className="glass-panel max-w-md rounded-lg p-8 text-center">
        <h1 className="text-2xl font-black text-white">حدث خطأ غير متوقع</h1>
        <p className="mt-3 text-sm leading-7 text-white/62">يمكنك إعادة المحاولة، وسنعيد تحميل التجربة من جديد.</p>
        <button type="button" onClick={reset} className="orange-gradient mt-6 h-11 rounded-lg px-6 text-sm font-extrabold text-white">
          إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
