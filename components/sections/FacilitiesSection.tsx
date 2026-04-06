"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Brand } from "@/lib/constants";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function FacilitiesSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            المرافق
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mt-3 mb-2">
            كل ما تحتاجه
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {brand.facilities.map((facility, i) => (
            <motion.div
              key={facility.nameAr}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#ede8e1] cursor-default"
            >
              <div
                className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-4 text-[#0d1b2a]"
                style={{ background: brand.color + "18", color: brand.color }}
              >
                {(() => {
                  const iconKey = facility.icon as keyof typeof Icons;
                  const IconComp = (Icons[iconKey] as LucideIcon | undefined) ?? Icons.CheckCircle;
                  return <IconComp size={28} strokeWidth={1.5} />;
                })()}
              </div>
              <p className="text-[#2c2c2c] font-semibold text-sm">{facility.nameAr}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
