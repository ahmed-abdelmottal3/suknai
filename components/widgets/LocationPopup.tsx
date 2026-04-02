"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Navigation, Sparkles } from "lucide-react";
import Link from "next/link";
import { BRANDS, Brand } from "@/lib/constants";

function getDistance(
  lat1: number, lon1: number,
  lat2: number, lon2: number
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export default function LocationPopup() {
  const [open, setOpen] = useState(false);
  const [nearest, setNearest] = useState<Brand | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [locating, setLocating] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds if not dismissed before
    const seen = sessionStorage.getItem("locationPopupDismissed");
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    sessionStorage.setItem("locationPopupDismissed", "1");
  }, []);

  const locate = useCallback(() => {
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        let closestBrand = BRANDS[0];
        let minDist = Infinity;
        for (const brand of BRANDS) {
          const d = getDistance(
            latitude, longitude,
            brand.coordinates.lat, brand.coordinates.lng
          );
          if (d < minDist) { minDist = d; closestBrand = brand; }
        }
        setNearest(closestBrand);
        setDistance(Math.round(minDist));
        setLocating(false);
      },
      () => {
        setLocating(false);
        setNearest(BRANDS[0]);
        setDistance(null);
      }
    );
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 40 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md"
          >
            <div className="relative rounded-3xl overflow-hidden glass-dark shadow-2xl p-8">
              {/* Close */}
              <button
                onClick={dismiss}
                aria-label="إغلاق"
                className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/70"
              >
                <X size={16} />
              </button>

              {/* Gold accent */}
              <div className="w-12 h-1 gradient-gold rounded-full mb-6" />

              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-1.5">
                مرحباً بك في مجموعة سكناي <Sparkles size={20} className="text-[#c8a951]" />
              </h2>
              <p className="text-white/70 text-sm mb-6">
                حدد موقعك لنرشدك إلى أقرب فرع وتجربة مميزة
              </p>

              {!nearest ? (
                <button
                  onClick={locate}
                  disabled={locating}
                  className="w-full gradient-gold text-[#0d1b2a] font-bold py-3 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 disabled:opacity-60"
                >
                  {locating ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-[#0d1b2a]/40 border-t-[#0d1b2a] animate-spin" />
                      جاري التحديد...
                    </>
                  ) : (
                    <>
                      <Navigation size={18} />
                      تحديد موقعي الآن
                    </>
                  )}
                </button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div
                    className="rounded-2xl p-4 border"
                    style={{ borderColor: nearest.color + "40", background: nearest.color + "10" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin size={18} style={{ color: nearest.color }} />
                      <p className="text-white font-bold">{nearest.nameAr}</p>
                    </div>
                    <p className="text-white/60 text-sm">{nearest.cityAr}</p>
                    {distance && (
                      <p className="text-xs mt-1" style={{ color: nearest.color }}>
                        على بُعد ~{distance.toLocaleString("ar-SA")} كم
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Link
                      href={`/${nearest.slug}`}
                      onClick={dismiss}
                      className="flex-1 gradient-gold text-[#0d1b2a] font-bold py-3 rounded-xl text-center text-sm hover:shadow-lg transition-all"
                    >
                      عرض التفاصيل
                    </Link>
                    <a
                      href={nearest.reservationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={dismiss}
                      className="flex-1 border border-[#c8a951]/40 text-[#c8a951] font-bold py-3 rounded-xl text-center text-sm hover:bg-[#c8a951]/10 transition-all"
                    >
                      احجز الآن
                    </a>
                  </div>

                  <button
                    onClick={dismiss}
                    className="w-full text-white/40 text-xs hover:text-white/60 transition-colors py-1"
                  >
                    تخطي
                  </button>
                </motion.div>
              )}

              {/* All brands row */}
              {!nearest && (
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  {BRANDS.map((b) => (
                    <Link
                      key={b.id}
                      href={`/${b.slug}`}
                      onClick={dismiss}
                      className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:bg-white/10"
                      style={{ borderColor: b.color + "50", color: b.color }}
                    >
                      {b.nameAr}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
