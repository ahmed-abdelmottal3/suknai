"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Brand } from "@/lib/constants";

export default function AboutSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black text-[#f8f4ef]"
              style={{ background: brand.color }}
            >
              ن
            </span>
            <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
              نبذة عن الفندق
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mb-3">
            {brand.nameAr}
          </h2>

          <div className="divider-gold mb-6" />

          <p className="text-[#4a4a4a] text-lg leading-relaxed mb-8">
            {brand.descriptionAr}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: `${brand.stars}★`, label: "تصنيف نجوم" },
              { value: brand.roomTypes.length.toString(), label: "فئة غرف" },
              { value: brand.facilities.length.toString(), label: "مرفق" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-4 text-center shadow-sm border border-[#ede8e1]"
              >
                <p
                  className="text-2xl font-black mb-1"
                  style={{ color: brand.color }}
                >
                  {stat.value}
                </p>
                <p className="text-xs text-[#4a4a4a]">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-96 md:h-[520px] rounded-3xl overflow-hidden shadow-2xl hover-lift">
            <Image
              src={brand.galleryImages[0]}
              alt={brand.nameAr}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Decorative frame */}
            <div
              className="absolute inset-0 rounded-3xl border-4 opacity-20"
              style={{ borderColor: brand.color }}
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-xl p-4 border border-[#ede8e1]"
          >
            <p className="text-[#c8a951] font-black text-xl">{brand.cityAr}</p>
            <p className="text-[#4a4a4a] text-xs">المملكة العربية السعودية</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
