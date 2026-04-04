"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Building } from "lucide-react";
import { Brand, GROUP } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";


const XIcon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="https://cdn.simpleicons.org/x/0d1b2a"
    alt="X"
    className="w-4.5 h-4.5"
    loading="lazy"
    decoding="async"
  />
);

const SnapchatIcon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="https://cdn.simpleicons.org/snapchat/0d1b2a"
    alt="Snapchat"
    className="w-4.5 h-4.5"
    loading="lazy"
    decoding="async"
  />
);

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
              <WhatsAppIcon size={24} />
              تواصل عبر واتساب
            </a>

            {/* Reservation */}
            <a
              href={brand.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0d1b2a] text-white font-bold px-6 py-4 rounded-2xl hover:bg-[#1a2f45] transition-colors w-full justify-center"
            >
              <Building size={24} />
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
                    aria-label="X"
                    className="w-10 h-10 rounded-xl bg-white border border-[#ede8e1] flex items-center justify-center hover:bg-[#fff9ec] hover:border-[#c8a951]/30 transition-colors shadow-sm"
                  >
                    <XIcon />
                  </a>
                )}
                <a
                  href={GROUP.social.snapchat}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Snapchat"
                  className="w-10 h-10 rounded-xl bg-white border border-[#ede8e1] flex items-center justify-center hover:bg-[#fff9ec] hover:border-[#c8a951]/30 transition-colors shadow-sm"
                >
                  <SnapchatIcon />
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4234.482339825847!2d41.6679273!3d27.5091242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157641ee45099879%3A0x6df707496496b561!2sSuknai%20Hotel!5e1!3m2!1sen!2seg!4v1775342086526!5m2!1sen!2seg" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>          </motion.div>
        </div>
      </div>
    </section>
  );
}
