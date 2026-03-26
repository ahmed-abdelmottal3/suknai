"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { Brand } from "@/lib/constants";

export default function DutyManagerSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-16 px-4 bg-[#0d1b2a]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 text-center"
        >
          <div
            className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-5 shadow-lg"
            style={{ background: `linear-gradient(135deg, ${brand.color}, ${brand.color}88)` }}
          >
            👨‍💼
          </div>

          <p className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-2">
            على مدار الساعة
          </p>
          <h2 className="text-2xl font-bold text-white mb-1">
            {brand.dutyManager.nameAr}
          </h2>
          <p className="text-white/50 text-sm mb-6">
            متاح لمساعدتك في أي وقت
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${brand.dutyManager.phone}`}
              className="flex items-center justify-center gap-2 gradient-gold text-[#0d1b2a] font-bold px-6 py-3 rounded-2xl hover:shadow-lg transition-all"
            >
              <Phone size={18} />
              اتصل الآن
            </a>
            <a
              href={`https://wa.me/${brand.dutyManager.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 glass text-white font-semibold px-6 py-3 rounded-2xl hover:bg-white/20 transition-all"
            >
              <MessageSquare size={18} />
              واتساب
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
