"use client";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";
import { GROUP } from "@/lib/constants";
import { ExternalLink } from "lucide-react";

export default function PressSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f4ef] rounded-l-[100px] opacity-50 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#c8a951]/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-2 block">
            التغطية الإعلامية
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mb-4">
            الصحافية بين يدك
          </h2>
          <div className="divider-gold mx-auto" />
          <p className="mt-6 text-[#4a4a4a] text-lg max-w-2xl mx-auto">
            تصفح الآن الصحف والمجلات المفضلة لديك .. وكن على اطلاع بجديد الأحداث
          </p>
        </motion.div>

        <motion.div style={{ y: y1 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUP.saudiMedia.map((media, idx) => (
            <motion.a
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              key={media.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative block p-8 bg-[#f8f4ef] rounded-3xl border border-[#ede8e1] hover:border-[#c8a951] transition-all shadow-sm hover:shadow-xl"
            >
              <div className="absolute top-6 left-6 text-[#c8a951] opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all">
                <ExternalLink size={20} />
              </div>
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center p-3 mb-6 group-hover:scale-110 transition-transform relative overflow-hidden">
                {"logo" in media ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={media.logo} alt={media.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-xl">📰</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-[#0d1b2a] mb-2 group-hover:text-[#c8a951] transition-colors">
                {media.name}
              </h3>
              <p className="text-[#4a4a4a]/70 text-sm">
                تصفح أخبار {media.name}
              </p>
              
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
