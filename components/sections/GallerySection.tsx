"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { Brand } from "@/lib/constants";

export default function GallerySection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section ref={ref} className="section-padding bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
              معرض الصور
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-2">
              لمحة من تجربتنا
            </h2>
            <div className="divider-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {brand.galleryImages.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
                  i === 0 ? "md:col-span-2 md:row-span-2 h-72 md:h-full" : "h-40 md:h-48"
                }`}
                onClick={() => setLightbox(img)}
              >
                <Image
                  src={img}
                  alt={`${brand.nameAr} - صورة ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#0d1b2a]/0 group-hover:bg-[#0d1b2a]/30 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-3xl">🔍</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={lightbox}
              alt="معرض الصور"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
