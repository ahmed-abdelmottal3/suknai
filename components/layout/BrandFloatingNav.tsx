"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BRANDS, Brand } from "@/lib/constants";

export default function BrandFloatingNav({ brand }: { brand: Brand }) {
  const [visible, setVisible] = useState(false);
  const idx = BRANDS.findIndex((b) => b.id === brand.id);
  const prev = idx > 0 ? BRANDS[idx - 1] : null;
  const next = idx < BRANDS.length - 1 ? BRANDS[idx + 1] : null;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (prev || next) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-48 right-4 z-40 flex flex-col gap-2"
        >
          {next && (
            <Link
              href={`/${next.slug}`}
              className="flex items-center gap-2 glass-dark rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-white/10 transition-all group"
            >
              <span className="text-white/60 group-hover:text-white transition-colors">
                {next.nameAr}
              </span>
              <span className="text-[#c8a951]">›</span>
            </Link>
          )}
          {prev && (
            <Link
              href={`/${prev.slug}`}
              className="flex items-center gap-2 glass-dark rounded-2xl px-4 py-3 text-sm font-semibold hover:bg-white/10 transition-all group"
            >
              <span className="text-[#c8a951]">‹</span>
              <span className="text-white/60 group-hover:text-white transition-colors">
                {prev.nameAr}
              </span>
            </Link>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
