import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import SalemAI from "@/components/widgets/SalemAI";

export const metadata: Metadata = {
  title: "من نحن | مجموعة سكناي",
  description:
    "تعرف على مجموعة سكناي ورؤيتها في تقديم الضيافة والفنادق والوجهات المتنوعة.",
};

const pillars = [
  {
    title: "هوية ضيافة واضحة",
    description:
      "نصمم تجارب إقامة تجمع بين الفخامة والراحة والهوية المحلية في كل وجهة.",
  },
  {
    title: "محفظة متنوعة",
    description:
      "فنادق ومنتجعات وشقق مخدومة ضمن منظومة واحدة تسهّل الوصول إلى الخدمة المناسبة.",
  },
  {
    title: "تصفح أسهل",
    description:
      "الموقع يوجّه الزائر مباشرة إلى الوجهة المناسبة بدلاً من إغراقه في صفحة واحدة طويلة.",
  },
];

const approach = [
  "الصفحة الرئيسية للانطباع الأول والتوجيه.",
  "صفحة العلامات للاستعراض والمقارنة السريعة.",
  "صفحة مستقلة لكل وجهة بجميع التفاصيل التشغيلية.",
  "صفحة تواصل واضحة للحجوزات والاستفسارات والشراكات.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0d1b2a] px-4 pb-24 pt-36 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,81,0.24),transparent_28%)]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#c8a951]">
              من نحن
            </span>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
              مجموعة ضيافة تبني تجربة أوضح من أول زيارة وحتى اختيار الوجهة
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              سكناي ليست مجرد مجموعة فنادق، بل طريقة عرض منظمة تجعل الزائر يرى
              الصورة العامة بسرعة ثم يدخل إلى التفاصيل داخل الصفحة المناسبة
              لكل علامة أو فندق.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-sm">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#e2c97e]">
              الفكرة الأساسية
            </p>
            <p className="mt-4 text-base leading-8 text-white/72">
              الواجهة الرئيسية للاختصار، والصفحات الداخلية للتفاصيل. بهذه
              المعادلة تبقى تجربة التصفح أسرع، وأوضح، وأكثر احترافية.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-[2rem] border border-[#0d1b2a]/10 bg-white p-7 shadow-[0_14px_40px_rgba(13,27,42,0.08)]"
            >
              <h2 className="text-2xl font-bold text-[#0d1b2a]">
                {pillar.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#0d1b2a]/70">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#0d1b2a] p-8 text-white shadow-[0_18px_50px_rgba(13,27,42,0.2)] md:p-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#e2c97e]">
              منهج العرض
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              كيف يعمل هيكل الموقع الآن؟
            </h2>
            <ul className="mt-6 space-y-4 text-white/72 leading-8">
              {approach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c8a951]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-[0_14px_40px_rgba(13,27,42,0.08)] md:p-10">
            <h2 className="text-3xl font-black text-[#0d1b2a]">
              ماذا يستفيد الزائر؟
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[#0d1b2a]/70">
              بدلاً من قراءة كل شيء في الصفحة الرئيسية، يستطيع الزائر اتخاذ قرار
              سريع: هل يريد معرفة المجموعة، استعراض العلامات، أم الدخول مباشرة
              إلى فندق محدد. هذا يرفع الوضوح ويقلل التشتيت.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/brands"
                className="rounded-full bg-[#0d1b2a] px-6 py-3 text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
              >
                استعرض العلامات
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-[#c8a951] px-6 py-3 text-sm font-bold text-[#0d1b2a] transition-colors duration-200 hover:bg-[#c8a951] hover:text-[#0d1b2a]"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <SalemAI />
    </main>
  );
}
