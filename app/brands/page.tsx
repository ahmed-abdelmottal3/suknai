import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrandsSection from "@/components/home/BrandsSection";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import SalemAI from "@/components/widgets/SalemAI";

export const metadata: Metadata = {
  title: "فنادقنا وعلاماتنا | مجموعة سكناي",
  description:
    "استعرض جميع العلامات والفنادق والمنتجعات والشقق المخدومة التابعة لمجموعة سكناي.",
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0d1b2a] px-4 pb-16 pt-36 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,81,0.2),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#c8a951]">
            فنادقنا وعلاماتنا
          </span>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
            اكتشف مجموعة من الوجهات المصممة لتناسب أنماط إقامة مختلفة
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            من الفنادق الراقية إلى المنتجعات والشقق المخدومة، تقدم سكناي خيارات
            إقامة متنوعة يمكنك استعراضها ثم الانتقال إلى تفاصيل كل وجهة مباشرة.
          </p>
        </div>
      </section>

      <div className="bg-[#0d1b2a] pb-4">
        <BrandsSection />
      </div>

      <Footer />
      <WhatsAppButton />
      <SalemAI />
    </main>
  );
}
