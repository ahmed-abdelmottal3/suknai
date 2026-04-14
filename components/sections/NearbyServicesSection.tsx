"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Brand } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function NearbyServicesSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const services = brand.nearbyServices || [];

  if (services.length === 0) return null;

  return (
    <section ref={ref} className="section-padding bg-[#011627] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#c8a951]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-[#c8a951] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
            مكتشفات الجوار
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-2 mb-6 tracking-tight">
            الخدمات القريبة
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#c8a951] to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.nameAr}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative flex flex-col h-full bg-[#1a2e3f] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#c8a951]/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Image / Icon Container */}
              <div className="relative h-56 w-full overflow-hidden">
                {service.image ? (
                  <>
                    <Image
                      src={service.image}
                      alt={service.nameAr}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e3f] via-transparent to-transparent opacity-60" />
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#c8a951]/5">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center bg-[#c8a951]/10 text-[#c8a951]">
                      {(() => {
                        const iconKey = service.icon as keyof typeof Icons;
                        const IconComp = (Icons[iconKey] as LucideIcon | undefined) ?? Icons.MapPin;
                        return <IconComp size={40} strokeWidth={1} />;
                      })()}
                    </div>
                  </div>
                )}
                
                {/* External Link Button - Floating */}
                <Link
                  href={service.mapUrl}
                  target="_blank"
                  className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all duration-300 hover:bg-[#c8a951] hover:scale-110 hover:shadow-lg hover:shadow-[#c8a951]/20 group-hover:opacity-100 opacity-0 md:opacity-100"
                  title="عرض في الخريطة"
                >
                  <ExternalLink size={20} />
                </Link>
              </div>

              {/* Content */}
              <Link 
                href={service.mapUrl} 
                target="_blank"
                className="p-6 flex flex-col flex-grow text-right"
              >
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#c8a951] transition-colors duration-300">
                  {service.nameAr}
                </h3>
                <div className="flex items-center gap-2 text-white/40 text-sm mt-auto">
                  <Icons.MapPin size={14} className="text-[#c8a951]" />
                  <span>{brand.cityAr}</span>
                </div>
              </Link>
              
              {/* Bottom Interactive Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#c8a951] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
