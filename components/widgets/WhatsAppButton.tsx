"use client";
import { motion } from "framer-motion";
import { GROUP } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${GROUP.whatsapp.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-xl"
      style={{ background: "#25D366" }}
      aria-label="واتساب"
    >
      <WhatsAppIcon size={28} />
    </motion.a>
  );
}
