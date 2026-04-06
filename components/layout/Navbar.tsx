"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { BRANDS, GROUP } from "@/lib/constants";
import WeatherWidget from "@/components/widgets/WeatherWidget";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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

  const navClass = `fixed top-8 inset-x-0 z-50 transition-all duration-500 ${scrolled || !isHome ? "glass-dark shadow-lg py-3" : "bg-transparent py-5"
    }`;

  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[60] bg-[#c8a951] text-[#0d1b2a] text-xs md:text-sm py-1.5 px-4 text-center font-bold shadow-md">
        تنويه: هذه الصفحة مخصصة للإستخدام الداخلي. للعودة إلى الموقع الرسمي لمجموعة سكناي، <a href="https://suknai.com" target="_blank" rel="noreferrer" className="underline font-black hover:text-white transition-colors">اضغط هنا</a>
      </div>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={navClass}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Screenshot_2026-04-01_101437-removebg-preview.png"
              alt="شعار مجموعة سكناي"
              className="h-12 md:h-14 w-auto object-contain scale-[2] md:scale-[2.5] origin-right transition-transform duration-300 group-hover:scale-[2.1] md:group-hover:scale-[2.6] filter drop-shadow hover:drop-shadow-lg"
            />
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
                الفنادق
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${brandsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {brandsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full right-0 mt-4 w-[480px] rounded-3xl glass-dark overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 p-6"
                  >
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-[#c8a951] text-[10px] font-black uppercase tracking-[2px] mb-4 opacity-70 border-b border-white/10 pb-2">
                          فنادق سكناي
                        </p>
                        <div className="flex flex-col gap-1">
                          {BRANDS.filter(b => !b.id.startsWith('aya')).map((brand) => (
                            <Link
                              key={brand.id}
                              href={`/${brand.slug}`}
                              className="group/item flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
                            >
                              <span className="text-white/80 group-hover/item:text-white text-sm font-medium transition-colors">
                                {brand.nameAr}
                              </span>
                              <span
                                className="w-1.5 h-1.5 rounded-full opacity-40 group-hover/item:opacity-100 transition-opacity shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                style={{ background: brand.color }}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[#c8a951] text-[10px] font-black uppercase tracking-[2px] mb-4 opacity-70 border-b border-white/10 pb-2">
                          فنادق أياس
                        </p>
                        <div className="flex flex-col gap-1">
                          {BRANDS.filter(b => b.id.startsWith('aya')).map((brand) => (
                            <Link
                              key={brand.id}
                              href={`/${brand.slug}`}
                              className="group/item flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-all duration-300"
                            >
                              <span className="text-white/80 group-hover/item:text-white text-sm font-medium transition-colors">
                                {brand.nameAr}
                              </span>
                              <span
                                className="w-1.5 h-1.5 rounded-full opacity-40 group-hover/item:opacity-100 transition-opacity shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                                style={{ background: brand.color }}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
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
              href={`https://wa.me/${GROUP.whatsapp.replace(/\+/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-gold text-[#0d1b2a] font-bold text-sm px-5 py-2 rounded-full hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <WhatsAppIcon size={16} />
              احجز عبر واتساب
            </a>
          </div>

          <button
            className="md:hidden text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
              className="absolute top-5 left-5 text-white/70 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                <p className="text-[#c8a951] text-xs font-semibold tracking-widest uppercase mb-4 px-1">
                  الفنادق
                </p>
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2 px-1 border-r-2 border-[#c8a951] pr-2">
                      فنادق سكناي
                    </p>
                    <div className="flex flex-col gap-1">
                      {BRANDS.filter(b => !b.id.startsWith('aya')).map((brand) => (
                        <Link
                          key={brand.id}
                          href={`/${brand.slug}`}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center justify-between py-4 border-b border-white/5 px-2 hover:bg-white/5 rounded-xl transition-all"
                        >
                          <span className="text-white/90 text-lg font-medium">
                            {brand.nameAr}
                          </span>
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ background: brand.color }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider mb-2 px-1 border-r-2 border-[#c8a951] pr-2">
                      فنادق أياس
                    </p>
                    <div className="flex flex-col gap-1">
                      {BRANDS.filter(b => b.id.startsWith('aya')).map((brand) => (
                        <Link
                          key={brand.id}
                          href={`/${brand.slug}`}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center justify-between py-4 border-b border-white/5 px-2 hover:bg-white/5 rounded-xl transition-all"
                        >
                          <span className="text-white/90 text-lg font-medium">
                            {brand.nameAr}
                          </span>
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ background: brand.color }}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
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
                href={`https://wa.me/${GROUP.whatsapp.replace(/\+/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-gold text-[#0d1b2a] font-bold text-center py-4 rounded-2xl text-xl flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={24} />
                احجز عبر واتساب
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
