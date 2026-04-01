"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Gem,
  Compass,
  Headphones,
  Sparkles,
  Mail,
} from "lucide-react";

const quickLinks = [
  {
    href: "/about",
    title: "عن سكناي",
    description: "تعرف على رؤيتنا في الضيافة وعلى تنوع العلامات التابعة للمجموعة.",
    icon: Gem,
  },
  {
    href: "/brands",
    title: "فنادقنا وعلاماتنا",
    description: "استعرض جميع الوجهات الفندقية والمنتجعات والشقق التابعة لنا.",
    icon: Compass,
  },
  {
    href: "/contact",
    title: "الحجز والتواصل",
    description: "للحجوزات والاستفسارات العامة والتعاون التجاري عبر صفحة واضحة.",
    icon: Mail,
  },
];

const highlights = [
  "فنادق ومنتجعات وشقق مخدومة بهوية ضيافة موحدة.",
  "مواقع متنوعة تناسب الأعمال والترفيه والإقامة العائلية.",
  "سهولة الوصول إلى كل وجهة عبر صفحات مستقلة وواضحة.",
];

const stats = [
  { value: "5", label: "علامات ووجهات" },
  { value: "متنوع", label: "نمط الإقامة" },
  { value: "سريع", label: "الوصول للحجز" },
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
              تجربة ضيافة متكاملة
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
              وجهات ضيافة تجمع بين الجودة والموقع والتجربة
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              تضم مجموعة سكناي باقة من الفنادق والمنتجعات والشقق المخدومة التي
              تقدم تجارب إقامة متنوعة تناسب المسافر للأعمال، والرحلات العائلية،
              والباحثين عن الراحة والخصوصية.
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
                عرض الوجهات
                <ArrowLeft size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/8"
              >
                ابدأ الحجز أو الاستفسار
              </Link>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[#c8a951]/20 bg-white p-8 md:p-10 shadow-[0_24px_60px_rgba(13,27,42,0.08)]">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#c8a951]">
              ما الذي يميز المجموعة؟
            </p>
            <h3 className="mt-4 text-3xl font-black text-[#0d1b2a]">
              تنوع في الوجهات مع مستوى خدمة يليق باسم سكناي
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
                مناسبة لـ
              </p>
              <p className="mt-3 text-base leading-8 text-[#0d1b2a]/72">
                رجال الأعمال، العائلات، الرحلات القصيرة، والإقامات الممتدة مع
                خيارات متعددة تناسب طبيعة كل ضيف.
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
                className="group relative flex flex-col items-center text-center h-full rounded-[2.5rem] border border-[#ede8e1] bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#c8a951]/50 hover:shadow-2xl overflow-hidden"
              >
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#c8a951]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative mb-6 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-3xl bg-[#f8f4ef] text-[#c8a951] group-hover:bg-[#c8a951] group-hover:text-white transition-colors duration-500 border border-[#ede8e1] group-hover:border-transparent group-hover:rotate-3">
                  <Icon size={32} strokeWidth={1.5} className="transition-transform duration-500 group-hover:scale-110" />
                </div>

                <h3 className="text-2xl font-black text-[#0d1b2a] mb-3 relative z-10 transition-colors group-hover:text-[#c8a951]">
                  {title}
                </h3>

                <p className="text-sm leading-relaxed text-[#4a4a4a] mb-8 relative z-10">
                  {description}
                </p>

                <div className="mt-auto relative z-10">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-[#c8a951] bg-[#c8a951]/10 px-6 py-2.5 rounded-full transition-all duration-300 group-hover:bg-[#0d1b2a] group-hover:text-white group-hover:shadow-lg">
                    استكشف المزيد
                    <ArrowLeft size={16} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
