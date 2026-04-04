"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Clock, Sun } from "lucide-react";
import { Brand } from "@/lib/constants";

export default function BreakfastSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            وجبة الإفطار
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-2">
            مواعيد الإفطار
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          {/* Weekday */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-3xl p-8 text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl gradient-gold flex items-center justify-center mb-5">
              <Clock size={28} className="text-[#0d1b2a]" />
            </div>
            <p className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-3">
              طيلة  أيام الأسبوع
            </p>
            <p className="text-white text-3xl font-black" dir="ltr">
              {brand.breakfastTimes.weekday}
            </p>
            <p className="text-white/40 text-sm mt-2">الأحد – الخميس</p>
          </motion.div>

        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-white/40 text-sm mt-8"
        >
          * المواعيد قابلة للتغيير في المناسبات والأعياد الرسمية
        </motion.p>
      </div>
    </section>
  );
}
