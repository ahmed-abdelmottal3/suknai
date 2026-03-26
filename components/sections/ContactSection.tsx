"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Twitter } from "lucide-react";
import { Brand, GROUP } from "@/lib/constants";

export default function ContactSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} id="contact" className="section-padding bg-[#f8f4ef]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            التواصل
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0d1b2a] mt-3 mb-2">
            معلومات التواصل
          </h2>
          <div className="divider-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "الهاتف", value: brand.phone, href: `tel:${brand.phone}`, dir: "ltr" },
              { icon: Mail, label: "البريد الإلكتروني", value: brand.email, href: `mailto:${brand.email}`, dir: "ltr" },
              { icon: MapPin, label: "الموقع", value: brand.cityAr + "، المملكة العربية السعودية", href: undefined, dir: "rtl" },
            ].map(({ icon: Icon, label, value, href, dir }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: brand.color + "20" }}
                >
                  <Icon size={20} style={{ color: brand.color }} />
                </div>
                <div>
                  <p className="text-[#4a4a4a] text-xs mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      dir={dir}
                      className="text-[#0d1b2a] font-semibold hover:text-[#c8a951] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#0d1b2a] font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${brand.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 gradient-gold text-[#0d1b2a] font-bold px-6 py-4 rounded-2xl hover:shadow-xl hover:shadow-yellow-500/20 hover:scale-[1.02] transition-all w-full justify-center"
            >
              <span className="text-xl">💬</span>
              تواصل عبر واتساب
            </a>

            {/* Reservation */}
            <a
              href={brand.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0d1b2a] text-white font-bold px-6 py-4 rounded-2xl hover:bg-[#1a2f45] transition-colors w-full justify-center"
            >
              <span className="text-xl">🏨</span>
              احجز إقامتك الآن
            </a>

            {/* Social */}
            <div>
              <p className="text-[#4a4a4a] text-sm font-semibold mb-3">تابعنا على</p>
              <div className="flex gap-3">
                {brand.social.instagram && (
                  <a
                    href={brand.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-[#ede8e1] flex items-center justify-center text-[#4a4a4a] hover:text-[#c8a951] hover:border-[#c8a951]/30 transition-colors shadow-sm"
                  >
                    <Instagram size={18} />
                  </a>
                )}
                {brand.social.twitter && (
                  <a
                    href={brand.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white border border-[#ede8e1] flex items-center justify-center text-[#4a4a4a] hover:text-[#c8a951] hover:border-[#c8a951]/30 transition-colors shadow-sm"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                <a
                  href={GROUP.social.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-[#ede8e1] flex items-center justify-center text-[#4a4a4a] hover:text-[#c8a951] hover:border-[#c8a951]/30 transition-colors shadow-sm text-sm font-bold"
                >
                  👻
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-lg border border-[#ede8e1] h-[400px]"
          >
            <iframe
              title={`خريطة ${brand.nameAr}`}
              src={`https://maps.google.com/maps?q=${brand.coordinates.lat},${brand.coordinates.lng}&z=14&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
