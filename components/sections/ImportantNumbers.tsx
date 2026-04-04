"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Brand } from "@/lib/constants";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function ImportantNumbers({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-[#f8f4ef]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            الاتصال الداخلي
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mt-3 mb-2">
            أرقام تهمك
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brand.importantNumbers.map((num, i) => (
            <motion.a
              key={num.labelAr}
              href={`tel:${num.number.startsWith("+") ? num.number : num.number}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-[#ede8e1] cursor-pointer hover:border-[#c8a951]/40 transition-colors group"
            >
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-3 transition-all group-hover:scale-110"
                style={{ background: brand.color + "15", color: brand.color }}
              >
                {(() => {
                  const iconKey = num.icon as keyof typeof Icons;
                  const IconComp = (Icons[iconKey] as LucideIcon | undefined) ?? Icons.PhoneCall;
                  return <IconComp size={24} strokeWidth={1.5} />;
                })()}
              </div>
              <p className="text-[#0d1b2a] font-bold text-sm mb-1">{num.labelAr}</p>
              <p
                className="text-2xl font-black"
                style={{ color: brand.color }}
                dir="ltr"
              >
                {num.number}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
