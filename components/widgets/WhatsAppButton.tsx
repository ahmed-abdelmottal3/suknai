"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { GROUP, getBrandBySlug } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  // Get current brand if we are on a hotel page (e.g., /brands/ghadi-apartments)
  const slug = pathname.split("/").pop() || "";
  const brand = getBrandBySlug(slug);
  
  // Determine if we have branches to show
  const branches = brand?.branches || [];
  const hasBranches = branches.length > 0;
  
  const mainNumber = brand?.whatsapp || GROUP.whatsapp;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Floating Menu of Branches */}
      <AnimatePresence>
        {isOpen && hasBranches && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="flex flex-col items-end gap-3 mb-2"
          >
            {/* Headline for Branches */}
            <motion.span 
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/90 backdrop-blur-sm text-[#0d1b2a] px-3 py-1 rounded-lg text-xs font-bold border border-[#c8a951]/20 shadow-sm"
            >
              اختر الفرع للتواصل
            </motion.span>

            {branches.map((branch, idx) => (
              <motion.a
                key={branch.nameAr}
                href={`https://wa.me/${branch.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex items-center gap-3"
              >
                {/* Branch Label */}
                <span className="bg-[#0d1b2a] text-white px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-white/10 group-hover:bg-[#c8a951] group-hover:text-[#0d1b2a] transition-all duration-300">
                  {branch.nameAr}
                </span>
                {/* WhatsApp Mini Circle */}
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <WhatsAppIcon size={24} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <div className="flex flex-col items-end gap-2">
        {/* Toggle Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
          className="relative"
        >
          {/* Pulse Effect for main button when branches exist */}
          {hasBranches && !isOpen && (
            <motion.div 
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-[#25D366] rounded-full"
            />
          )}

          <button
            onClick={() => hasBranches ? setIsOpen(!isOpen) : window.open(`https://wa.me/${mainNumber.replace("+", "")}`, '_blank')}
            className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 transition-transform hover:scale-110 active:scale-95"
            style={{ background: "#25D366" }}
            aria-label="تواصل معنا"
          >
            {isOpen && hasBranches ? (
              <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }} className="text-white font-black text-2xl">×</motion.div>
            ) : (
              <WhatsAppIcon size={32} />
            )}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
