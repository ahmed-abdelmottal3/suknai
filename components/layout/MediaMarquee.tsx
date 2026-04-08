"use client";

import { motion } from "framer-motion";
import { GROUP } from "@/lib/constants";
import { Newspaper, ExternalLink } from "lucide-react";

export default function MediaMarquee() {
  const media = GROUP.saudiMedia;

  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-[#ede8e1]">
      {/* Premium Background Backgrounds */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#f8f4ef]/30 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#c8a951]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Simple & Elegant Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f8f4ef] rounded-full border border-[#c8a951]/20 mb-4"
          >
            <Newspaper size={14} className="text-[#c8a951]" />
            <span className="text-[#c8a951] text-[10px] font-bold tracking-[0.2em] uppercase">الصحافة المحلية</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-[#0d1b2a] mb-6">
            الصحافة <span className="text-[#c8a951]">بين يدك</span>
          </h2>
          <div className="w-24 h-1 bg-[#c8a951] mx-auto rounded-full" />
          <p className="mt-8 text-[#4a4a4a] text-lg max-w-2xl mx-auto leading-relaxed">
            تغطية شاملة لأبرز الصحف والمجلات السعودية المختارة لتكون على اطلاع دائم بآخر المستجدات والأحداث.
          </p>
        </div>

        {/* Clean Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {media.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1] // Custom smooth cubic-bezier
              }}
              whileHover={{
                y: -12,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative flex flex-col items-center p-8 bg-white rounded-3xl border border-[#ede8e1] hover:border-[#c8a951] transition-colors duration-500 shadow-sm hover:shadow-2xl text-center"
            >
              <div className="absolute top-6 left-6 text-[#c8a951] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                <ExternalLink size={20} />
              </div>

              <div className="w-24 h-24 bg-[#f8f4ef] rounded-2xl p-4 mb-6 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-contain transition-all duration-700 ease-in-out group-hover:scale-110"
                />
              </div>

              <h3 className="text-xl font-bold text-[#0d1b2a] mb-2 group-hover:text-[#c8a951] transition-colors duration-500 uppercase tracking-tight">
                {item.name}
              </h3>
              <p className="text-[#4a4a4a]/70 text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                تصفح آخر أخبار {item.name}
              </p>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
