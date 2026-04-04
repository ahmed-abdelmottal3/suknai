"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GROUP } from "@/lib/constants";

export default function SaudiMediaSection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section ref={ref} className="section-padding bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto">
        {/* روح السعودية Banner */}
        <motion.a
          href={GROUP.roohAlSaudia}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="block relative overflow-hidden rounded-3xl bg-[#0d1b2a] p-10 mb-16 group hover:shadow-2xl transition-shadow"
        >
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
            style={{ background: "linear-gradient(135deg, #c8a951, #e2c97e)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-2">
                اكتشف المملكة
              </p>
              <h3 className="text-white text-3xl md:text-4xl font-black mb-2">
                🇸🇦 روح السعودية
              </h3>
              <p className="text-white/60">
                استكشف جمال المملكة العربية السعودية — وجهات سياحية بلا حدود
              </p>
            </div>
            <div className="flex items-center gap-2 gradient-gold text-[#0d1b2a] font-bold px-6 py-3 rounded-2xl group-hover:shadow-lg transition-all flex-shrink-0">
              <ExternalLink size={18} />
              زيارة الموقع
            </div>
          </div>
        </motion.a>

        {/* Media Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            الإعلام
          </span>
          <h2 className="text-4xl font-black text-[#0d1b2a] mt-3 mb-2">
            الصحـف والمجـلات السعودية
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {GROUP.saudiMedia.map((media, i) => (
            <motion.a
              key={media.name}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-[#ede8e1] hover:border-[#c8a951]/40 transition-all group"
            >
              <div className="h-8 mb-2 flex items-center justify-center">
                {"logo" in media ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={media.logo} alt={media.name} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="text-2xl">📰</span>
                )}
              </div>
              <p className="text-[#0d1b2a] font-bold text-xs leading-tight">
                {media.name}
              </p>
              <ExternalLink
                size={10}
                className="mx-auto mt-1 text-[#c8a951] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
