"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Brand } from "@/lib/constants";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

export default function SurroundingsSection({ brand }: { brand: Brand }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState<"landmarks" | "services">("landmarks");

  const visibleLandmarks = brand.landmarks || [];
  const services = brand.nearbyServices || [];

  return (
    <section ref={ref} className="section-padding bg-[#0d1b2a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-[#c8a951] text-sm font-semibold tracking-widest uppercase">
            الاستكشاف
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-2">
            محيط المكان
          </h2>
          <div className="divider-gold mx-auto mb-8" />

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 p-1.5 rounded-xl flex gap-1 border border-white/10 overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveTab("landmarks")}
                className={`px-6 py-2.5 rounded-lg text-sm md:text-base font-bold transition-all whitespace-nowrap ${
                  activeTab === "landmarks"
                    ? "bg-[#c8a951] text-[#0d1b2a] shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                معالم المنطقة
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`px-6 py-2.5 rounded-lg text-sm md:text-base font-bold transition-all whitespace-nowrap ${
                  activeTab === "services"
                    ? "bg-[#c8a951] text-[#0d1b2a] shadow-lg"
                    : "text-white/60 hover:text-white"
                }`}
              >
                الخدمات القريبة
              </button>
            </div>
          </div>
        </motion.div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "landmarks" && (
              <motion.div
                key="landmarks"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleLandmarks.map((landmark, i) => (
                  <motion.div
                    key={landmark.nameAr}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover-lift"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Link href={landmark.location} target="_blank">
                        <Image
                          src={landmark.image}
                          alt={landmark.nameAr}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#0d1b2a]/40" />
                      </Link>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-white font-bold">{landmark.nameAr}</h3>
                      </div>
                      <p className="text-white/50 text-sm mt-1">{brand.cityAr}</p>
                    </div>
                  </motion.div>
                ))}
                {visibleLandmarks.length === 0 && (
                  <div className="col-span-full text-center text-white/40 py-10">
                    لا توجد معالم مسجلة بعد
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "services" && (
              <motion.div
                key="services"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {services.map((service, i) => (
                  <motion.div
                    key={service.nameAr}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover-lift flex flex-col h-full"
                  >
                    <div className="relative h-44 overflow-hidden">
                      {service.image ? (
                        <Link href={service.mapUrl} target="_blank">
                          <Image
                            src={service.image}
                            alt={service.nameAr}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-[#0d1b2a]/40 group-hover:bg-[#0d1b2a]/20 transition-colors" />
                        </Link>
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
                      <Link
                        href={service.mapUrl}
                        target="_blank"
                        className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white flex items-center justify-center transition-all duration-300 hover:bg-[#c8a951] hover:scale-110"
                        title="عرض الموقع"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                      <h3 className="text-white font-bold group-hover:text-[#c8a951] transition-colors">{service.nameAr}</h3>
                      <p className="text-white/50 text-sm mt-1">{brand.cityAr}</p>
                    </div>
                  </motion.div>
                ))}
                {services.length === 0 && (
                  <div className="col-span-full text-center text-white/40 py-10">
                    لا توجد خدمات مسجلة بعد
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
