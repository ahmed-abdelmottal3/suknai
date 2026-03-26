"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { BRANDS, GROUP } from "@/lib/constants";
import WeatherWidget from "@/components/widgets/WeatherWidget";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
    scrolled || !isHome ? "glass-dark shadow-lg py-3" : "bg-transparent py-5"
  }`;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={navClass}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-2xl font-black tracking-wide gradient-text-gold"
              style={{ fontFamily: "Cairo, sans-serif" }}
            >
              سكناي
            </span>
            <span className="text-[10px] text-white/60 tracking-[0.2em] uppercase">
              SUKNAI GROUP
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-white/90 text-sm font-medium">
            <Link
              href="/"
              className="hover:text-[#c8a951] transition-colors duration-200"
            >
              الرئيسية
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setBrandsOpen(true)}
              onMouseLeave={() => setBrandsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#c8a951] transition-colors duration-200">
                فنادقنا وعلاماتنا
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${brandsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {brandsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full right-0 mt-2 w-56 rounded-2xl glass-dark overflow-hidden shadow-2xl"
                  >
                    {BRANDS.map((brand) => (
                      <Link
                        key={brand.id}
                        href={`/${brand.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5"
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: brand.color }}
                        />
                        <span className="text-white/85 text-sm">
                          {brand.nameAr}
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/brands"
                      className="block px-4 py-3 text-sm font-semibold text-[#c8a951] hover:bg-white/5 transition-colors"
                    >
                      عرض جميع الوجهات
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="hover:text-[#c8a951] transition-colors duration-200"
            >
              عن سكناي
            </Link>
            <Link
              href="/brands"
              className="hover:text-[#c8a951] transition-colors duration-200"
            >
              الوجهات
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#c8a951] transition-colors duration-200"
            >
              الحجز والتواصل
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <WeatherWidget compact />
            <a
              href={GROUP.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-[#0d1b2a] font-bold text-sm px-5 py-2 rounded-full hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105"
            >
              احجز عبر واتساب
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="فتح القائمة"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 glass-dark flex flex-col pt-24 px-6 pb-8 overflow-y-auto"
          >
            <button
              className="absolute top-5 left-5 text-white/60"
              onClick={() => setMenuOpen(false)}
              aria-label="إغلاق القائمة"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col gap-6">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-white"
              >
                الرئيسية
              </Link>

              <div>
                <p className="text-[#c8a951] text-xs font-semibold tracking-widest uppercase mb-3">
                  فنادقنا وعلاماتنا
                </p>
                {BRANDS.map((brand) => (
                  <Link
                    key={brand.id}
                    href={`/${brand.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 py-3 border-b border-white/10"
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: brand.color }}
                    />
                    <span className="text-white/90 text-lg font-medium">
                      {brand.nameAr}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/brands"
                  onClick={() => setMenuOpen(false)}
                  className="block pt-4 text-base font-semibold text-[#c8a951]"
                >
                  عرض جميع الوجهات
                </Link>
              </div>

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="text-xl text-white/80"
              >
                عن سكناي
              </Link>
              <Link
                href="/brands"
                onClick={() => setMenuOpen(false)}
                className="text-xl text-white/80"
              >
                الوجهات
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-xl text-white/80"
              >
                الحجز والتواصل
              </Link>
              <a
                href={GROUP.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold text-[#0d1b2a] font-bold text-center py-4 rounded-2xl text-xl"
              >
                احجز عبر واتساب
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
