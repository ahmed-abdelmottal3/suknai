"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Twitter, Youtube, Ghost, Music } from "lucide-react";
import { GROUP } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
              <WhatsAppIcon size={28} className="text-[#25D366]" />
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
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/70 hover:text-[#c8a951] transition-colors"
            >
              <Ghost size={22} />
            </motion.a>
            <motion.a
              href={GROUP.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-white/70 hover:text-[#c8a951] transition-colors"
            >
              <Music size={22} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
