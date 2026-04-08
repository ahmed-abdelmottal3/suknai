"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { GROUP, getBrandBySlug } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppButton() {
  const pathname = usePathname();

  // Get current brand if we are on a brand page.
  const slug = pathname.split("/").pop() || "";
  const brand = getBrandBySlug(slug);
  const mainNumber = brand?.whatsapp || GROUP.whatsapp;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <motion.a
        href={`https://wa.me/${mainNumber.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 bg-[#25D366]"
        aria-label="تواصل معنا عبر واتساب"
      >
        <WhatsAppIcon size={32} />
      </motion.a>
    </div>
  );
}
