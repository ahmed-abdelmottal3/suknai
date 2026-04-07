"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Brand } from "@/lib/constants";

const ROYAL_SERVICES = [
  { ar: "خدمات ذوي الاحتياجات", en: "HANDI CAPED", icon: "Accessibility" },
  { ar: "الإنترنت واي فاي", en: "WI-FI", icon: "Wifi" },
  { ar: "حامل الحقائب", en: "BELL MAN", icon: "Luggage" },
  { ar: "استقبال", en: "RECEPTION", icon: "BellRing" },
  { ar: "كاوي ملابس", en: "CLOTH IRON", icon: "Shirt" },
  { ar: "غسالة ملابس", en: "WASHING MACHINE", icon: "WashingMachine" },
  { ar: "الكافيه", en: "CAFE", icon: "Coffee" },
  { ar: "خدمة الغرف", en: "ROOM SERVICE", icon: "HandPlatter" },
  { ar: "القنوات الفضائية", en: "SATELLITY TV", icon: "Tv" },
  { ar: "صندوق أمانات", en: "SAFTY BOX", icon: "ShieldCheck" },
  { ar: "مواقف سيارات", en: "PARKING", icon: "CircleParking" },
  { ar: "خدمة التوصيل", en: "DELIVERY", icon: "Bike" },
];

export default function RoyalServicesSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            خدمات {brand.nameAr}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-2">
            خدماتنا
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 md:p-6 shadow-2xl backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(200,169,81,0.15),transparent_35%),radial-gradient(circle_at_85%_100%,rgba(255,255,255,0.08),transparent_30%)]" />

          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {ROYAL_SERVICES.map((service, i) => {
              const iconKey = service.icon as keyof typeof Icons;
              const IconComp = (Icons[iconKey] as LucideIcon | undefined) ?? Icons.CheckCircle;
              return (
                <motion.div
                  key={service.en}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.03 }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="flex min-h-[150px] md:min-h-[165px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 md:px-4 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-md">
                    <IconComp size={28} strokeWidth={1.8} className="text-[#0d1b2a]" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-white font-bold text-sm md:text-base">{service.ar}</p>
                    <p className="text-white/70 font-semibold tracking-wide text-[11px] md:text-xs mt-2">
                      {service.en}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
