"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function GroupHero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="مجموعة سكناي"
        fill
        priority
        className="object-cover object-center"
        style={{ filter: "brightness(0.4)" }}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b2a]/80 via-transparent to-[#c8a951]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b2a] via-transparent to-transparent" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#c8a951]/10 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#c8a951]/5 pointer-events-none" />

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-px bg-[#c8a951]" />
          <span className="text-[#c8a951] text-sm font-semibold tracking-[0.3em] uppercase">
            مجموعة سكناي
          </span>
          <span className="w-12 h-px bg-[#c8a951]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl text-white mb-6 leading-none"
        >
          <span className="text-gold">SUKNAI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/75 font-light mb-4 max-w-3xl mx-auto"
        >
          تجارب ضيافة متنوعة تجمع بين الفخامة والراحة والموقع المميز في وجهات
          مختارة داخل المملكة
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-white/45 text-lg mb-12"
          dir="ltr"
        >
          Where luxury meets Saudi hospitality
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/brands"
            className="gradient-gold text-[#0d1b2a] font-black px-10 py-4 rounded-2xl text-lg hover:shadow-2xl hover:shadow-yellow-500/25 hover:scale-105 transition-all duration-300"
          >
            استكشف وجهاتنا
          </Link>
          <Link
            href="/contact"
            className="glass text-white font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-white/20 transition-all"
          >
            احجز أو تواصل معنا
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={24} className="text-[#c8a951]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
