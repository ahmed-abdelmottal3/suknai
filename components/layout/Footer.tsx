"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { BRANDS, GROUP } from "@/lib/constants";

const BUSINESS_LINKS = [
  { label: "الفنادق", href: "/brands" },
  { label: "الحجوزات الكوربريت", href: "/contact" },
  { label: "الشراكات", href: "/contact" },
  { label: "العقارات", href: "/about" },
  { label: "المسؤولية الاجتماعية", href: "/about" },
];

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.07.041.182.087.347.087.46 0 1.022-.277 1.542-.684.116-.09.262-.18.402-.18.146 0 .25.069.295.139.076.126.053.367-.058.53-.181.26-.674.713-1.72 1.001a.84.84 0 0 0 .042.096 1.67 1.67 0 0 0 .155.245c.227.309.491.66.491 1.15 0 .547-.362.936-.808 1.12-.142.058-.312.096-.505.096-.197 0-.378-.04-.575-.098l-.037-.01c-.41-.115-.819-.218-1.25-.218-.19 0-.393.021-.61.065.437.587.86 1.335.86 2.19 0 1.343-1.087 2.09-2.097 2.481-.517.2-1.011.291-1.52.291-.313 0-.61-.038-.895-.113-.165-.044-.317-.1-.47-.157a5.082 5.082 0 0 0-1.668-.33c-.582 0-1.15.12-1.674.34-.15.063-.3.118-.463.162-.285.075-.583.113-.896.113-.508 0-1.003-.092-1.518-.29-1.01-.392-2.097-1.14-2.097-2.482 0-.855.423-1.603.86-2.19a3.27 3.27 0 0 1-.61-.065c-.432 0-.841.103-1.25.218l-.037.01a2.24 2.24 0 0 1-.575.097c-.194 0-.363-.037-.506-.095-.446-.184-.808-.573-.808-1.12 0-.49.264-.842.491-1.15.057-.078.112-.162.155-.245a.842.842 0 0 0 .042-.096c-1.046-.288-1.539-.741-1.72-1.001-.111-.164-.134-.405-.057-.53a.337.337 0 0 1 .295-.139c.14 0 .285.09.401.18.52.407 1.082.684 1.543.684.165 0 .277-.046.347-.087l-.031-.51-.002-.06c-.105-1.628-.23-3.654.299-4.847C7.86 1.07 11.218.793 12.207.793z" />
  </svg>
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
            <h2 className="text-3xl font-black gradient-text-gold mb-1">سكناي</h2>
            <p className="text-white/40 text-xs tracking-widest uppercase">
              SUKNAI GROUP
            </p>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            تجارب ضيافة متنوعة في فنادق ومنتجعات وشقق مخدومة بهوية خدمة واحدة.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: GROUP.social.instagram, label: "Instagram" },
              { Icon: Twitter, href: GROUP.social.twitter, label: "Twitter" },
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
                className="w-9 h-9 rounded-full glass flex items-center justify-center text-white/70 hover:text-[#c8a951] transition-colors"
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
                  className="flex items-center gap-2 text-white/60 hover:text-[#c8a951] transition-colors text-sm group"
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
                  className="text-white/60 hover:text-[#c8a951] transition-colors"
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
            <li>
              <a
                href={GROUP.roohAlSaudia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/60 hover:text-[#c8a951] transition-colors"
              >
                <span>روح السعودية</span>
                <ExternalLink size={12} />
              </a>
            </li>
            {GROUP.saudiMedia.map((media) => (
              <li key={media.name}>
                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-[#c8a951] transition-colors"
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
                className="flex items-start gap-3 text-white/60 hover:text-[#c8a951] transition-colors text-sm"
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
                className="flex items-start gap-3 text-white/60 hover:text-[#c8a951] transition-colors text-sm"
              >
                <span className="text-base flex-shrink-0">💬</span>
                واتساب للحجوزات
              </a>
            </li>
            <li>
              <a
                href={`mailto:${GROUP.email}`}
                className="flex items-start gap-3 text-white/60 hover:text-[#c8a951] transition-colors text-sm"
              >
                <Mail size={15} className="mt-0.5 flex-shrink-0" />
                {GROUP.email}
              </a>
            </li>
            <li className="flex items-start gap-3 text-white/60 text-sm">
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
