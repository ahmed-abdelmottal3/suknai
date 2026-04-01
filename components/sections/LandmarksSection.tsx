"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Brand } from "@/lib/constants";

export default function LandmarksSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [tab, setTab] = useState<"city" | "nearby">("nearby");

  const filtered = brand.landmarks.filter((l) => l.type === tab);

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

          {/* Tabs */}
          <div className="inline-flex bg-white/5 rounded-2xl p-1 gap-1 border border-white/10">
            {(["nearby", "city"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  tab === t
                    ? "gradient-gold text-[#0d1b2a]"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {t === "nearby" ? "المعالم القريبة" : "معالم المدينة"}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((landmark, i) => (
            <motion.div
              key={landmark.nameAr}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover-lift"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={landmark.image}
                  alt={landmark.nameAr}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a]/70 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold">{landmark.nameAr}</h3>
                  {landmark.distance && (
                    <div className="flex items-center gap-1 text-[#c8a951] text-xs">
                      <MapPin size={12} />
                      {landmark.distance}
                    </div>
                  )}
                </div>
                <p className="text-white/50 text-sm mt-1">{brand.cityAr}</p>
              </div>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-white/40 py-10">
              لا توجد معالم في هذه الفئة
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
