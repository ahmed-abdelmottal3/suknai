"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Twitter, Youtube } from "lucide-react";
import { GROUP, BRANDS } from "@/lib/constants";

export default function GroupContactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            تواصل معنا
          </span>
          <h2 className="text-5xl font-black text-white mt-4 mb-3">
            نحن هنا لخدمتك
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <motion.a
            href={`tel:${GROUP.phone}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="glass rounded-3xl p-8 text-center hover-lift group"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Phone size={28} className="text-[#0d1b2a]" />
            </div>
            <p className="text-[#c8a951] text-sm font-semibold mb-2">الهاتف</p>
            <p className="text-white font-bold text-lg" dir="ltr">{GROUP.phone}</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href={`https://wa.me/${GROUP.whatsapp.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-8 text-center hover-lift group"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
              style={{ background: "#25D36622" }}
            >
              <svg viewBox="0 0 32 32" width="28" height="28" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.004 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.354.63 4.635 1.828 6.635L2.667 29.333l6.865-1.8A13.285 13.285 0 0 0 16.004 29.333C23.369 29.333 29.333 23.364 29.333 16S23.369 2.667 16.004 2.667Zm0 2.4c5.924 0 10.933 5.009 10.933 10.933 0 5.92-5.01 10.933-10.933 10.933a10.9 10.9 0 0 1-5.565
-1.527l-.388-.234-4.08 1.07 1.092-3.973-.256-.4A10.893 10.893 0 0 1 5.07 16c0-5.924 5.01-10.933 10.933-10.933Zm-3.4 5.6c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.24 3.573 5.52 4.88 2.72 1.093 3.28.88 3.867.827.587-.053 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.999 1.253-.16.213-.333.24-.613.08-.293-.16-1.227-.453-2.333-1.44-.867-.773-1.44-1.72-1.613-2.013-.173-.293-.013-.453.12-.6C13 .12 13 .12 13 .12z"/>
              </svg>
            </div>
            <p className="text-[#c8a951] text-sm font-semibold mb-2">واتساب</p>
            <p className="text-white font-bold text-lg" dir="ltr">{GROUP.whatsapp}</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href={`mailto:${GROUP.email}`}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-8 text-center hover-lift group"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
              style={{ background: "#c8a95118" }}
            >
              <Mail size={28} className="text-[#c8a951]" />
            </div>
            <p className="text-[#c8a951] text-sm font-semibold mb-2">البريد الإلكتروني</p>
            <p className="text-white font-bold text-lg">{GROUP.email}</p>
          </motion.a>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-white/40 text-sm mb-5 tracking-widest uppercase">تابعنا على</p>
          <div className="flex items-center justify-center gap-4">
            {[
              { icon: Instagram, href: GROUP.social.instagram, label: "Instagram" },
              { icon: Twitter, href: GROUP.social.twitter, label: "Twitter" },
              { icon: Youtube, href: GROUP.social.youtube, label: "YouTube" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/70 hover:text-[#c8a951] transition-colors"
              >
                <Icon size={22} />
              </motion.a>
            ))}
            <motion.a
              href={GROUP.social.snapchat}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Snapchat"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/70 hover:text-[#c8a951] transition-colors text-xl"
            >
              👻
            </motion.a>
            <motion.a
              href={GROUP.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/70 hover:text-[#c8a951] transition-colors text-xl"
            >
              🎵
            </motion.a>
          </div>
        </motion.div>

        {/* Brands Reservations Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="border-t border-white/10 pt-10"
        >
          <p className="text-center text-[#c8a951] text-sm font-semibold tracking-widest uppercase mb-6">
            روابط الحجز المباشر
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {BRANDS.map((brand) => (
              <a
                key={brand.id}
                href={brand.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-2xl glass text-white/70 hover:text-white text-sm border border-white/10 hover:border-white/20 transition-all font-medium"
              >
                {brand.nameAr}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
