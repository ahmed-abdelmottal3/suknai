"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Brand } from "@/lib/constants";
import Link from "next/link";

const HAIL_LANDMARKS = [
  {
    nameAr: "جامع الراجحي",
    type: "nearby" as const,
    image: "/rajhi.jpg",
    location: "https://maps.app.goo.gl/Xw1z1va7tVQP9Zyr8",
  },
  {
    nameAr: "قلعة أعيرف التاريخية",
    type: "nearby" as const,
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=400&q=80",
    location: "https://maps.app.goo.gl/3N6A6L2x6a3m6b8x7",
  },
  {
    nameAr: "قلعة القشلة",
    type: "city" as const,
    image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=400&q=80",
    location: "https://maps.app.goo.gl/hG5a6L2x6a3m6b8x7",
  },
  {
    nameAr: "منتزه المغواة",
    type: "city" as const,
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&q=80",
    location: "https://maps.app.goo.gl/hG5a6L2x6a3m6b8x7",
  },
  {
    nameAr: "سوق المسوكف الشعبي",
    type: "nearby" as const,
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=400&q=80",
    location: "https://maps.app.goo.gl/hG5a6L2x6a3m6b8x7",
  },
];

export default function LandmarksSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const visibleLandmarks = brand.cityAr === "حائل" ? HAIL_LANDMARKS : brand.landmarks;

  return (
    <section ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            الاستكشاف
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-2">
            معالم المنطقة
          </h2>
          <div className="divider-gold mx-auto mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleLandmarks.map((landmark, i) => (
            <motion.div
              key={landmark.nameAr}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <Link href={landmark.location} target="_blank">
                  <Image
                    src={landmark.image}
                    alt={landmark.nameAr}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0d1b2a]/40" />
                </Link>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold">{landmark.nameAr}</h3>
                </div>
                <p className="text-white/50 text-sm mt-1">{brand.cityAr}</p>
              </div>
            </motion.div>
          ))}
          {visibleLandmarks.length === 0 && (
            <div className="col-span-full text-center text-white/40 py-10">
              لا توجد معالم مسجلة بعد
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
