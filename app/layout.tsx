import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body className="thin-scrollbar">{children}</body>
    </html>
  );
}
