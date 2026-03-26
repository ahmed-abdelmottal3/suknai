import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BrandsSection from "@/components/home/BrandsSection";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import SalemAI from "@/components/widgets/SalemAI";

export const metadata: Metadata = {
  title: "علاماتنا | مجموعة سكناي",
  description: "استعرض جميع العلامات والفنادق التابعة لمجموعة سكناي.",
};

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0d1b2a] px-4 pb-16 pt-36 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,81,0.2),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#c8a951]">
            علاماتنا
          </span>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
            اختر الوجهة المناسبة ثم ادخل إلى تفاصيلها مباشرة
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            هذه الصفحة مخصصة لاستعراض جميع العلامات التابعة للمجموعة في مكان
            واحد، ثم الانتقال إلى الصفحة الداخلية لكل فندق أو وجهة.
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
