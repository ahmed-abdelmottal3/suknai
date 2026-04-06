import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/widgets/WhatsAppButton";
import SalemAI from "@/components/widgets/SalemAI";
import { GROUP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "تواصل معنا | مجموعة سكناي",
  description:
    "صفحة التواصل الخاصة بمجموعة سكناي للاستفسارات والشراكات.",
};

const contactMethods = [
  {
    label: "الهاتف",
    value: GROUP.phone,
    note: "للتواصل المباشر والاستفسارات العامة.",
    href: `tel:${GROUP.phone}`,
  },
  {
    label: "واتساب",
    value: "تواصل مباشر عبر واتساب",
    note: "للاستفسارات السريعة وطلبات المتابعة الفورية.",
    href: `https://wa.me/${GROUP.whatsapp.replace("+", "")}`,
  },
  {
    label: "البريد الإلكتروني",
    value: GROUP.email,
    note: "للطلبات الرسمية والتعاون التجاري والتواصل الإداري.",
    href: `mailto:${GROUP.email}`,
  },
];

const requestTypes = [
  "استفسارات عن الفنادق والوجهات.",
  "استفسارات عامة عن المجموعة والخدمات.",
  "طلبات الشراكات والتعاون التجاري.",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ef]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#0d1b2a] px-4 pb-24 pt-36 md:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(200,169,81,0.22),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#c8a951]">
              تواصل معنا
            </span>
            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
              نحن هنا لخدمتكم في الاستفسار والتعاون
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              اختر وسيلة التواصل الأنسب لك، وسنعمل على خدمتك في ما يتعلق
              بالاستفسارات العامة، أو طلبات التعاون مع المجموعة.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-sm">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#e2c97e]">
              هذه الصفحة مخصصة لـ
            </p>
            <ul className="mt-5 space-y-3 text-white/72 leading-8">
              {requestTypes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c8a951]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("https://") ? "_blank" : undefined}
              rel={
                method.href.startsWith("https://")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="rounded-[2rem] border border-[#0d1b2a]/10 bg-white p-7 shadow-[0_14px_40px_rgba(13,27,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c8a951]/40"
            >
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#c8a951]">
                {method.label}
              </p>
              <p className="mt-4 text-2xl font-bold text-[#0d1b2a]">
                {method.value}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#0d1b2a]/65">
                {method.note}
              </p>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#c8a951]/20 bg-white p-8 shadow-[0_14px_40px_rgba(13,27,42,0.08)] md:p-10">
            <h2 className="text-3xl font-black text-[#0d1b2a]">
              الوصول السريع
            </h2>
            <p className="mt-4 text-base leading-8 text-[#0d1b2a]/70">
              إذا كنت تعرف الفندق أو الوجهة التي تريدها، يمكنك الانتقال إلى
              صفحتها مباشرة للاطلاع على التفاصيل والمعلومات.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#0d1b2a] p-8 text-white shadow-[0_18px_50px_rgba(13,27,42,0.2)] md:p-10">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#e2c97e]">
              خدمة واضحة
            </p>
            <h2 className="mt-4 text-3xl font-black text-white">
              فريقنا جاهز لمساعدتك في اختيار الوجهة المناسبة
            </h2>
            <p className="mt-4 text-base leading-8 text-white/72">
              سواء كنت تبحث عن فندق للأعمال، أو منتجع للراحة، أو شقق مخدومة
              للإقامة الأطول، سنساعدك في الوصول إلى الخيار الأنسب.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <SalemAI />
    </main>
  );
}
