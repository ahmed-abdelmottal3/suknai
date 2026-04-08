"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
} from "lucide-react";

const highlights = [
  "فنادق ومنتجعات وشقق مخدومة بهوية ضيافة موحدة.",
  "مواقع متنوعة تناسب الأعمال والترفيه والإقامة العائلية.",
  "سهولة الوصول إلى كل وجهة عبر صفحات مستقلة وواضحة.",
];

const stats = [
  { value: "5", label: "علامات ووجهات" },
  { value: "متنوع", label: "نمط الإقامة" },
  { value: "سريع", label: "الوصول للمعلومات" },
];

export default function GroupOverviewSection() {
  return (
    <section className="section-padding bg-[#f8f4ef]">
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
                تواصل معنا أو استفسر
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
      </div>
    </section>
  );
}
