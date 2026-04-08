"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Brand } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface HeroSectionProps {
  brand: Brand;
  isGroup?: boolean;
}

export default function HeroSection({ brand, isGroup = false }: HeroSectionProps) {
  const branches = brand.branches ?? [];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={brand.heroImage}
        alt={brand.nameAr}
        fill
        priority
        className="object-cover object-center scale-105"
        style={{ filter: "brightness(0.55)" }}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-[#0d1b2a]/40" />

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-8 h-px bg-[#c8a951]" />
          <span
            className="text-[#c8a951] text-sm font-semibold tracking-[0.25em] uppercase"
            style={{ fontFamily: "Cairo, sans-serif" }}
          >
            {isGroup ? "مجموعة سكناي" : brand.cityAr}
          </span>
          <span className="w-8 h-px bg-[#c8a951]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight"
        >
          {brand.nameAr}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-xl md:text-2xl text-white/75 font-light mb-10 max-w-2xl mx-auto"
        >
          {brand.taglineAr}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          {!isGroup ? (
            <>
              <a
                href={`https://wa.me/${brand.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold text-[#0d1b2a] font-bold px-8 py-4 rounded-2xl text-lg hover:shadow-xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <WhatsAppIcon size={24} />
                تواصل عبر واتساب
              </a>

              {branches.length > 0 && (
                <div className="w-full max-w-2xl rounded-2xl border border-white/15 bg-[#0d1b2a]/45 backdrop-blur-sm p-4 md:p-5">
                  <p className="text-xs md:text-sm text-white/70 mb-3">اختر الفرع للتواصل المباشر</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {branches.map((branch) => (
                      <a
                        key={branch.nameAr}
                        href={`https://wa.me/${branch.whatsapp.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-bold text-white hover:border-[#25D366]/50 hover:bg-[#25D366]/15 transition-all duration-300"
                      >
                        <span>{branch.nameAr}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link
              href="#brands"
              className="gradient-gold text-[#0d1b2a] font-bold px-8 py-4 rounded-2xl text-lg hover:shadow-xl hover:shadow-yellow-500/20 hover:scale-105 transition-all duration-300"
            >
              استكشف علاماتنا
            </Link>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">اكتشف</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-[#c8a951]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
