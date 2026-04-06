"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Brand } from "@/lib/constants";
import * as Icons from "lucide-react";

export default function MenuSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (!brand.menuCategories || brand.menuCategories.length === 0) return null;

  return (
    <section ref={ref} className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-2 block">
            قائمة الطعام
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mb-4">
            تذوق الفخامة
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brand.menuCategories.map((category, idx) => {
            const IconComponent = (Icons as any)[category.icon] || Icons.Utensils;
            return (
              <motion.div
                key={category.nameAr}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#f8f4ef] rounded-3xl p-8 border border-[#ede8e1] hover:border-[#c8a951] transition-all"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-[#c8a951] shadow-sm">
                  <IconComponent size={28} />
                </div>
                <h3 className="text-2xl font-black text-[#0d1b2a] mb-6">{category.nameAr}</h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center justify-between group">
                      <span className="text-[#4a4a4a] text-lg group-hover:text-[#c8a951] transition-colors">
                        {item}
                      </span>
                      <span className="w-12 h-px bg-[#c8a951]/20 group-hover:w-16 transition-all" />
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
