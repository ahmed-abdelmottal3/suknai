"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Building2,
  BriefcaseBusiness,
  MessageCircleMore,
  Sparkles,
} from "lucide-react";

const quickLinks = [
  {
    href: "/about",
    title: "من نحن",
    description: "تعرف على هوية مجموعة سكناي ورؤيتها وطريقة تنظيم تجربة الضيافة.",
    icon: Building2,
  },
  {
    href: "/brands",
    title: "علاماتنا",
    description: "ادخل مباشرة إلى الفنادق والوجهات التابعة للمجموعة من صفحة مخصصة.",
    icon: BriefcaseBusiness,
  },
  {
    href: "/contact",
    title: "تواصل معنا",
    description: "للحجز والاستفسارات والشراكات عبر صفحة تواصل واضحة وسريعة.",
    icon: MessageCircleMore,
  },
];

const highlights = [
  "دخول مباشر للوجهات بدون تمرير طويل.",
  "هيكل أوضح للموبايل والديسكتوب.",
  "فصل المعلومات العامة عن صفحات الفنادق.",
];

const stats = [
  { value: "5", label: "وجهات ضيافة" },
  { value: "1", label: "بوابة رئيسية" },
  { value: "100%", label: "وصول أسرع" },
];

export default function GroupOverviewSection() {
  return (
    <section className="section-padding bg-[linear-gradient(180deg,#f8f4ef_0%,#f2ede6_100%)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch"
        >
          <div className="rounded-[2.5rem] bg-[#0d1b2a] p-8 md:p-10 text-white shadow-[0_30px_80px_rgba(13,27,42,0.24)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c8a951]/30 bg-white/5 px-4 py-2 text-sm text-[#e2c97e]">
              <Sparkles size={16} />
              بوابة المجموعة
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
              الرئيسية الآن تقدم الانطباع الأول ثم تفتح لك الطريق
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              بدل أن يجبر الموقع الزائر على النزول داخل صفحة واحدة طويلة، أصبحت
              الواجهة الرئيسية مختصرة وراقية وتوجّه كل زائر إلى الصفحة التي
              يحتاجها مباشرة.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-3xl font-black text-[#e2c97e]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/brands"
                className="inline-flex items-center gap-2 rounded-full bg-[#c8a951] px-6 py-3 text-sm font-black text-[#0d1b2a] transition-transform duration-200 hover:scale-105"
              >
                استعرض العلامات
                <ArrowLeft size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/8"
              >
                تعرف على المجموعة
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#c8a951]/20 bg-white p-8 md:p-10 shadow-[0_24px_60px_rgba(13,27,42,0.08)]">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#c8a951]">
              لماذا هذا الهيكل؟
            </p>
            <h3 className="mt-4 text-3xl font-black text-[#0d1b2a]">
              لأن الزائر يريد أن يصل بسرعة لا أن يضيع في صفحة مزدحمة
            </h3>

            <ul className="mt-6 space-y-4 text-[#0d1b2a]/72 leading-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#c8a951]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[1.75rem] bg-[#f6f1ea] p-6">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#0d1b2a]/45">
                المسار المقترح
              </p>
              <p className="mt-3 text-base leading-8 text-[#0d1b2a]/72">
                الرئيسية للتوجيه، صفحة العلامات للاستعراض، وصفحات الفنادق
                للتفاصيل الكاملة، وصفحة التواصل للحجوزات والاستفسارات.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {quickLinks.map(({ href, title, description, icon: Icon }, index) => (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={href}
                className="group block h-full rounded-[2rem] border border-[#0d1b2a]/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c8a951]/40 hover:shadow-[0_18px_45px_rgba(13,27,42,0.12)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d1b2a] text-[#c8a951]">
                  <Icon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#0d1b2a]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#0d1b2a]/65">
                  {description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0d1b2a] transition-colors duration-200 group-hover:text-[#c8a951]">
                  دخول الصفحة
                  <ArrowLeft size={16} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
