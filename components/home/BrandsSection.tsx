"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BRANDS } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";

export default function BrandsSection() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const router = useRouter();

  return (
    <section id="brands" ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            علاماتنا التجارية
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-3">
            عالم سكناي
          </h2>
          <div className="divider-gold mx-auto mb-4" />
          <p className="text-white/50 max-w-xl mx-auto">
            مجموعة متنوعة من التجارب الفندقية الفاخرة في أرجاء المملكة العربية السعودية
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div
                className="relative h-72 rounded-3xl overflow-hidden cursor-pointer hover-lift shine"
                onClick={() => router.push(`/${brand.slug}`)}
              >
                  {/* Image */}
                  <Image
                    src={brand.heroImage}
                    alt={brand.nameAr}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/90 via-[#0d1b2a]/20 to-transparent" />

                  {/* Color accent bar */}
                  <div
                    className="absolute top-0 inset-x-0 h-1"
                    style={{ background: brand.color }}
                  />

                  {/* Stars */}
                  <div className="absolute top-5 right-5 flex gap-0.5">
                    {Array.from({ length: brand.stars }).map((_, j) => (
                      <span key={j} className="text-[#c8a951] text-xs">★</span>
                    ))}
                  </div>

                  {/* City badge */}
                  <div className="absolute top-5 left-5 glass px-3 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">{brand.cityAr}</span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <h3 className="text-white text-xl font-black mb-1">{brand.nameAr}</h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2">{brand.taglineAr}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <a
                          href={brand.reservationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs px-3 py-1.5 rounded-full font-semibold text-[#0d1b2a] hover:shadow-md transition-all"
                          style={{ background: brand.color }}
                        >
                          احجز
                        </a>
                        <a
                          href={`https://wa.me/${brand.whatsapp.replace("+", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-xs px-3 py-1.5 rounded-full glass text-white hover:bg-white/20 transition-all"
                        >
                          💬
                        </a>
                      </div>
                      <div className="flex items-center gap-1 text-[#c8a951] text-sm group-hover:gap-2 transition-all">
                        <span className="text-xs">تفاصيل</span>
                        <ArrowLeft size={14} />
                      </div>
                    </div>
                  </div>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
