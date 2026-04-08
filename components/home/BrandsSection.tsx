"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BRANDS } from "@/lib/constants";
import { ArrowLeft, Star } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function BrandsSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const router = useRouter();

  return (
    <section id="brands" ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            فنادقنا وعلاماتنا
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-3">
            وجهات سكناي
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-white/70 max-w-2xl mx-auto leading-8">
            مجموعة من الفنادق والمنتجعات والشقق المخدومة، لكل منها طابعها الخاص
            وتجربتها المميزة لتناسب أنماط إقامة مختلفة.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map((brand, i) => (
              <motion.button
                key={brand.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group w-full text-right"
                onClick={() => router.push(`/${brand.slug}`)}
              >
                <div
                  className="relative h-72 rounded-3xl overflow-hidden cursor-pointer hover-lift"
                >
                <Image
                  src={brand.heroImage}
                  alt={brand.nameAr}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-[#0d1b2a]/40" />

                <div
                  className="absolute top-0 inset-x-0 h-1"
                  style={{ background: brand.color }}
                />

                <div className="absolute top-5 right-5 flex gap-0.5">
                  {Array.from({ length: brand.stars }).map((_, j) => (
                    <Star key={j} size={12} fill="currentColor" className="text-[#c8a951]" />
                  ))}
                </div>

                <div className="absolute top-5 left-5 glass px-3 py-1 rounded-full">
                  <span className="text-white text-xs font-medium">
                    {brand.cityAr}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="text-white text-xl font-black mb-1">
                    {brand.nameAr}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">
                    {brand.taglineAr}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <a
                        href={`https://wa.me/${brand.whatsapp.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-xs px-3 py-2.5 rounded-full gradient-gold text-[#0d1b2a] font-bold hover:shadow-md transition-all cursor-pointer"
                      >
                        <WhatsAppIcon size={12} />
                        تواصل عبر واتساب
                      </a>
                    </div>
                    <div className="flex items-center gap-1 text-[#c8a951] text-sm group-hover:gap-2 transition-all">
                      <span className="text-xs">عرض التفاصيل</span>
                      <ArrowLeft size={14} />
                    </div>
                    </div>
                  </div>
                </div>
              </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
