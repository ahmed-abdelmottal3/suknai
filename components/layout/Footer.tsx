"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { BRANDS, GROUP } from "@/lib/constants";
import WhatsAppIcon from "../icons/WhatsAppIcon";

const BUSINESS_LINKS = [
  { label: "الفنادق", href: "/brands" },
  { label: "الحجوزات الكوربريت", href: "/contact" },
  { label: "الشراكات", href: "/partnerships" },
  { label: "العقارات", href: "/about" },
  { label: "المسؤولية الاجتماعية", href: "/social-responsibility" },
];

const XIcon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="https://cdn.simpleicons.org/x/ffffff"
    alt="X"
    className="w-5 h-5"
    loading="lazy"
    decoding="async"
  />
);

const SnapchatIcon = () => (
  /* eslint-disable-next-line @next/next/no-img-element */
  <img
    src="https://cdn.simpleicons.org/snapchat/ffffff"
    alt="Snapchat"
    className="w-5 h-5"
    loading="lazy"
    decoding="async"
  />
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.23 8.23 0 0 0 4.83 1.55V6.79a4.83 4.83 0 0 1-1.06-.1z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <div>
          <div className="mb-5">
            <Link href="/" className="flex items-center group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshot-2026-04-01-101437-removebg-preview.png"
                alt="شعار مجموعة سكناي"
                className="h-12 md:h-14 w-auto object-contain scale-[2] md:scale-[2.5] origin-right transition-transform duration-300 group-hover:scale-[2.1] md:group-hover:scale-[2.6] filter drop-shadow hover:drop-shadow-lg"
              />
            </Link>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            تجارب ضيافة متنوعة في فنادق ومنتجعات وشقق مخدومة بهوية خدمة واحدة.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: GROUP.social.instagram, label: "Instagram" },
              { Icon: XIcon, href: GROUP.social.twitter, label: "X" },
              { Icon: Youtube, href: GROUP.social.youtube, label: "YouTube" },
              { Icon: SnapchatIcon, href: GROUP.social.snapchat, label: "Snapchat" },
              { Icon: TikTokIcon, href: GROUP.social.tiktok, label: "TikTok" },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-white/70 hover:text-gold transition-colors"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[#c8a951] font-bold text-sm tracking-widest uppercase mb-5">
            الوجهات
          </h3>
          <ul className="space-y-3">
            {BRANDS.map((brand) => (
              <li key={brand.id}>
                <Link
                  href={`/${brand.slug}`}
                  className="flex items-center gap-2 text-white/70 hover:text-[#c8a951] transition-colors text-sm group"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform group-hover:scale-150"
                    style={{ background: brand.color }}
                  />
                  {brand.nameAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[#c8a951] font-bold text-sm tracking-widest uppercase mb-5">
            خدمات المجموعة
          </h3>
          <ul className="space-y-3 text-sm">
            {BUSINESS_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-[#c8a951] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[#c8a951] font-bold text-sm tracking-widest uppercase mb-5">
            الصحف والمجلات
          </h3>
          <ul className="space-y-3 text-sm">
            {GROUP.saudiMedia.map((media) => (
              <li key={media.name}>
                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-[#c8a951] transition-colors"
                >
                  <span>{media.name}</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[#c8a951] font-bold text-sm tracking-widest uppercase mb-5">
            تواصل معنا
          </h3>
          <ul className="space-y-4">
            <li>
              <a
                href={`tel:${GROUP.phone}`}
                className="flex items-start gap-3 text-white/70 hover:text-[#c8a951] transition-colors text-sm"
              >
                <Phone size={15} className="mt-0.5 flex-shrink-0" />
                <span dir="ltr">{GROUP.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${GROUP.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/70 hover:text-[#c8a951] transition-colors text-sm"
              >
                <span className="text-base flex-shrink-0 mt-0.5"><WhatsAppIcon size={15} /></span>
                واتساب للحجوزات
              </a>
            </li>
            <li>
              <a
                href={`mailto:${GROUP.email}`}
                className="flex items-start gap-3 text-white/70 hover:text-[#c8a951] transition-colors text-sm"
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0" />
                {GROUP.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/70 text-sm">
              <MapPin size={15} className="mt-0.5 flex-shrink-0" />
              المملكة العربية السعودية
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} مجموعة سكناي. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#c8a951] transition-colors">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-[#c8a951] transition-colors">
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
