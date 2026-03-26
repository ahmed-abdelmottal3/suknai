import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "مجموعة سكناي | Suknai Group",
  description: "مجموعة سكناي للضيافة - فندق سكناي رويال، فندق سكناي العقيق، منتجع سكناي، فندق أياس، غادي للشقق المخدومة",
  keywords: "سكناي، فنادق، ضيافة، السعودية، سكناي رويال، سكناي العقيق",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} antialiased font-cairo`}>
        {children}
      </body>
    </html>
  );
}
