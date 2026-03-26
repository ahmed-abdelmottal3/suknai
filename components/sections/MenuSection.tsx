"use client";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Brand } from "@/lib/constants";

export default function MenuSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [open, setOpen] = useState<string | null>(brand.menuCategories[0]?.nameAr);

  return (
    <section ref={ref} className="section-padding bg-[#f8f4ef]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            المطعم
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mt-3 mb-2">
            قائمة الطعام
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {brand.menuCategories.map((cat, i) => (
            <motion.div
              key={cat.nameAr}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#ede8e1]"
            >
              <button
                onClick={() => setOpen(open === cat.nameAr ? null : cat.nameAr)}
                className="w-full flex items-center justify-between px-6 py-5 text-right"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-[#0d1b2a] font-bold text-lg">{cat.nameAr}</span>
                </div>
                <motion.div
                  animate={{ rotate: open === cat.nameAr ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className="text-[#c8a951]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {open === cat.nameAr && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-[#ede8e1]">
                      <div className="grid grid-cols-2 gap-3 pt-4">
                        {cat.items.map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: brand.color }}
                            />
                            <span className="text-[#4a4a4a] text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
